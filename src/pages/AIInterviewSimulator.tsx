import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import RatingBadge from "@/components/ai-trainer/RatingBadge";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import { useStreamingChat, type Msg } from "@/lib/ai/useStreamingChat";
import { invokeAI } from "@/lib/ai/streamChat";
import { t, type UILang } from "@/lib/ai/i18n";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import {
  Send, RotateCcw, ArrowLeft, Loader2, ChevronRight, Mic,
  Briefcase, Building2, TrendingUp, Heart, GraduationCap, Truck,
  Monitor, Palette, Utensils, Users
} from "lucide-react";
import { toast } from "sonner";
import FeedbackLanguageToggle from "@/components/ai-trainer/FeedbackLanguageToggle";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";

interface Feedback {
  clarity: { score: number; comment: string };
  relevance: { score: number; comment: string };
  confidence: { rating: string; comment: string };
  structure: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
}

interface IndustryItem { id: string; label: string; icon: React.ElementType; }
interface InterviewTypeItem { id: string; label: string; desc: string; }

const INDUSTRIES: IndustryItem[] = [
  { id: "tech-startup", label: "Tech / Startup", icon: Monitor },
  { id: "finance-banking", label: "Finance / Banking", icon: TrendingUp },
  { id: "marketing-agency", label: "Marketing Agency", icon: Palette },
  { id: "consulting-firm", label: "Consulting Firm", icon: Briefcase },
  { id: "hospitality-tourism", label: "Hospitality / Tourism", icon: Utensils },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "logistics-supply", label: "Logistics / Supply Chain", icon: Truck },
];

const INTERVIEW_TYPES: InterviewTypeItem[] = [
  { id: "behavioral", label: "Behavioural (STAR)", desc: "Tell me about a time when..." },
  { id: "competency", label: "Competency-based", desc: "Demonstrate specific skills" },
  { id: "motivational", label: "Motivational", desc: "Career goals and cultural fit" },
];

const FUNC_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/interview-simulator`;

const AIInterviewSimulator = () => {
  const [step, setStep] = useState<"select" | "chat" | "feedback">("select");
  const [industry, setIndustry] = useState("");
  const [interviewType, setInterviewType] = useState("behavioral");
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("interview");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();
  const uiLang = feedbackLang as UILang;

  const { messages, isStreaming, startConversation, resetMessages, stream } = useStreamingChat({
    url: FUNC_URL,
    extraBody: { feedbackLanguage: feedbackLang },
  });

  const { isListening, startListening, stopListening, speechSupported } = useSpeechRecognition(
    useCallback((text: string) => setInput(text), [])
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startInterview = (ind: string) => {
    if (limitReached) {
      toast.error(t("daily.limit.reached", uiLang, DAILY_LIMIT));
      return;
    }
    setIndustry(ind);
    setFeedback(null);
    setStep("chat");
    recordSession();
    startConversation("Hello.", { industry: ind, interviewType });
  };

  const handleSendMessage = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput("");
    const updatedMsgs: Msg[] = [...messages, { role: "user", content: text }];
    stream(updatedMsgs, { industry, interviewType });
  };

  const requestFeedback = async () => {
    if (messages.filter(m => m.role === "user").length < 2) {
      toast.error(t("error.min_messages", uiLang, 2));
      return;
    }
    setLoadingFeedback(true);
    try {
      const { data, error } = await invokeAI<{ feedback: Feedback }>(FUNC_URL, {
        messages,
        industry,
        interviewType,
        action: "feedback",
        feedbackLanguage: feedbackLang,
      });
      if (error) { toast.error(error.message); return; }
      if (data?.feedback) {
        setFeedback(data.feedback);
        setStep("feedback");
      }
    } catch {
      toast.error(t("error.feedback", uiLang));
    } finally {
      setLoadingFeedback(false);
    }
  };

  const userMsgCount = messages.filter(m => m.role === "user").length;

  // ── SELECT ──
  if (step === "select") {
    return (
      <>
        <SEOHead
          title="AI Interview Simulator — Entraînement entretien anglais | Addy's English"
          description="Simulez un entretien d'embauche en anglais avec un recruteur IA. 8 industries, 3 types d'entretien, feedback détaillé."
          canonical="/interview-simulator"
        />
        <div className="min-h-screen bg-background py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Badge variant="secondary">
                  <Briefcase className="w-3 h-3 mr-1" /> {t("sessions.remaining", uiLang, remaining, DAILY_LIMIT)}
                </Badge>
                <FeedbackLanguageToggle value={feedbackLang} onChange={setFeedbackLang} />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                💼 AI Interview Simulator
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("speaking.desc", uiLang)}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3 text-center">{t("step.choose_mode", uiLang)}</h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {INTERVIEW_TYPES.map(iType => (
                  <Button
                    key={iType.id}
                    variant={interviewType === iType.id ? "default" : "outline"}
                    onClick={() => setInterviewType(iType.id)}
                    className="flex-col h-auto py-3"
                  >
                    <span className="font-semibold">{iType.label}</span>
                    <span className="text-xs opacity-70">{iType.desc}</span>
                  </Button>
                ))}
              </div>
            </div>

            <h3 className="font-semibold text-foreground mb-3 text-center">{t("step.choose_scenario", uiLang)}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {INDUSTRIES.map(ind => (
                <button
                  key={ind.id}
                  onClick={() => startInterview(ind.id)}
                  disabled={limitReached}
                  className="group flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all text-left disabled:opacity-50"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{ind.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── FEEDBACK ──
  if (step === "feedback" && feedback) {
    return (
      <div className="min-h-screen bg-background py-10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <Button variant="ghost" onClick={() => { setStep("select"); resetMessages(); }}>
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("btn.new_scenario", uiLang)}
          </Button>
          <h2 className="text-2xl font-heading font-bold">📊 {t("feedback.title", uiLang)}</h2>
          <Badge className="text-lg px-4 py-1">{feedback.overallLevel}</Badge>

          <div className="grid gap-4">
            <ScoreBar label="Clarity" score={feedback.clarity.score} comment={feedback.clarity.comment} />
            <ScoreBar label="Relevance" score={feedback.relevance.score} comment={feedback.relevance.comment} />
            <ScoreBar label="Structure" score={feedback.structure.score} comment={feedback.structure.comment} />
            <ScoreBar label="Grammar" score={feedback.grammar.score} comment={feedback.grammar.comment} />
            <ScoreBar label="Vocabulary" score={feedback.vocabulary.score} comment={feedback.vocabulary.comment} />
          </div>

          <Card className="p-4">
            <RatingBadge label="Confidence" rating={feedback.confidence.rating} comment={feedback.confidence.comment} />
          </Card>

          <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} />
          <CorrectionsList corrections={feedback.corrections} />
          <VocabUpgrades items={feedback.advancedVocabulary} />
          <SuggestionsList suggestions={feedback.suggestions} />

          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="font-semibold mb-1">{t("feedback.overall", uiLang)}</p>
            <p className="text-sm">{feedback.overall}</p>
          </Card>

          <Button onClick={() => { setStep("select"); resetMessages(); }} className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" /> {t("btn.new_session", uiLang)}
          </Button>
        </div>
      </div>
    );
  }

  // ── CHAT ──
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-card px-4 py-3 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => { setStep("select"); resetMessages(); }}>
          <ArrowLeft className="w-4 h-4 mr-1" /> {t("btn.back", uiLang)}
        </Button>
        <Badge variant="outline">{INDUSTRIES.find(i => i.id === industry)?.label}</Badge>
        <Button variant="outline" size="sm" onClick={requestFeedback} disabled={loadingFeedback || userMsgCount < 2}>
          {loadingFeedback ? <Loader2 className="w-4 h-4 animate-spin" /> : `📊 ${t("btn.feedback", uiLang)}`}
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted text-foreground rounded-bl-md"
              }`}>
                <p className="text-sm whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-card p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={t("chat.placeholder.typing", uiLang)}
            className="min-h-[44px] max-h-[120px] resize-none"
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
          />
          {speechSupported && (
            <Button
              size="icon"
              variant={isListening ? "destructive" : "outline"}
              onClick={isListening ? stopListening : startListening}
              disabled={isStreaming}
            >
              <Mic className="w-4 h-4" />
            </Button>
          )}
          <Button onClick={handleSendMessage} disabled={!input.trim() || isStreaming} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewSimulator;
