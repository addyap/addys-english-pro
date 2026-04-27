import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import SupportActions from "@/components/ai-trainer/SupportActions";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useStreamingChat, type Msg } from "@/lib/ai/useStreamingChat";
import { invokeAI } from "@/lib/ai/streamChat";
import { t, type UILang } from "@/lib/ai/i18n";
import MicErrorBanner from "@/components/MicErrorBanner";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import {
  Mic, MicOff, Send, RotateCcw, ArrowLeft, Loader2,
  Volume2, MessageCircle, Coffee, Phone, Briefcase, Users,
  Building2, Globe, Plane, ShoppingCart, ChevronRight
} from "lucide-react";
import { toast } from "sonner";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChatAutoScroll } from "@/hooks/useChatAutoScroll";
import JumpToLatestButton from "@/components/chat/JumpToLatestButton";

interface Feedback {
  fluency: { score: number; comment: string };
  pronunciation: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  tone: { rating: string; comment: string };
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
}

type Mode = "practice" | "challenge";

interface ScenarioItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SCENARIOS: ScenarioItem[] = [
  { id: "ordering-restaurant", label: "Ordering at a Restaurant", icon: Coffee },
  { id: "hotel-checkin", label: "Hotel Check-in", icon: Building2 },
  { id: "airport-situation", label: "At the Airport", icon: Plane },
  { id: "giving-directions", label: "Giving Directions", icon: Globe },
  { id: "doctor-appointment", label: "Booking a Doctor's Appointment", icon: Phone },
  { id: "phone-complaint", label: "Making a Phone Complaint", icon: Phone },
  { id: "job-interview-speaking", label: "Phone Job Interview", icon: Briefcase },
  { id: "casual-conversation", label: "Casual Conversation", icon: MessageCircle },
  { id: "presenting-ideas", label: "Presenting Ideas in a Meeting", icon: Users },
  { id: "negotiating-deal", label: "Negotiating a Deal", icon: ShoppingCart },
];

const FUNC_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/speaking-practice`;

const AISpeakingPractice = () => {
  const [step, setStep] = useState<"select" | "chat" | "feedback">("select");
  const [scenario, setScenario] = useState("");
  const [mode, setMode] = useState<Mode>("practice");
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("speaking");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();
  const { interfaceLang } = useLanguage();
  const uiLang = interfaceLang as UILang;

  const { messages, isStreaming, startConversation, resetMessages, stream } = useStreamingChat({
    url: FUNC_URL,
    extraBody: { feedbackLanguage: feedbackLang },
  });

  const { isListening, startListening, stopListening, speechSupported, micState, micError, clearError } = useSpeechRecognition(
    useCallback((text: string) => setInput(text), [])
  );

  const lastMsg = messages[messages.length - 1];
  const { scrollRef, endRef, isAtBottom, scrollToBottom } = useChatAutoScroll([
    messages.length,
    lastMsg?.content,
    isStreaming,
  ]);

  const startScenario = (scenarioId: string) => {
    if (limitReached) {
      toast.error(t("daily.limit.reached", uiLang, DAILY_LIMIT));
      return;
    }
    setScenario(scenarioId);
    setFeedback(null);
    setStep("chat");
    recordSession();
    startConversation("Hello.", { scenario: scenarioId, mode });
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    const newMsgs: Msg[] = [...messages, { role: "user", content: text }];
    setInput("");
    // Update messages via stream
    stream(newMsgs, { scenario, mode });
  };

  // We need to manually set messages before streaming since useStreamingChat
  // manages its own messages state via stream()
  const handleSendMessage = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const updatedMsgs = [...messages, userMsg];
    // The stream function will handle setting the messages
    stream(updatedMsgs, { scenario, mode });
  };

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
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
        scenario,
        mode,
        action: "feedback",
        feedbackLanguage: feedbackLang,
      });
      if (error) {
        toast.error(error.message);
        return;
      }
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

  // ── SCENARIO SELECT ──
  if (step === "select") {
    return (
      <>
        <SEOHead
          title="AI Speaking Practice — Entraînement oral anglais"
          description="Pratiquez l'anglais oral avec un partenaire IA d'Antony Addy : reconnaissance vocale, synthèse vocale et feedback détaillé pour professionnels."
          canonical="/speaking-practice"
        />
        <div className="min-h-screen bg-background py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Badge variant="secondary">
                  <Mic className="w-3 h-3 mr-1" /> {t("sessions.remaining", uiLang, remaining, DAILY_LIMIT)}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                🎙️ AI Speaking Practice
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("speaking.desc", uiLang)}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              <Button variant={mode === "practice" ? "default" : "outline"} onClick={() => setMode("practice")}>
                🎯 {t("mode.practice", uiLang)}
              </Button>
              <Button variant={mode === "challenge" ? "default" : "outline"} onClick={() => setMode("challenge")}>
                🔥 {t("mode.challenge", uiLang)}
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {SCENARIOS.map(s => (
                <button
                  key={s.id}
                  onClick={() => startScenario(s.id)}
                  disabled={limitReached}
                  className="group flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all text-left disabled:opacity-50"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{s.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
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

          <h2 className="text-2xl font-heading font-bold text-foreground">📊 {t("feedback.title", uiLang)}</h2>
          <Badge className="text-lg px-4 py-1">{feedback.overallLevel}</Badge>

          <div className="grid gap-4">
            <ScoreBar label="Fluency" score={feedback.fluency.score} comment={feedback.fluency.comment} />
            <ScoreBar label="Pronunciation" score={feedback.pronunciation.score} comment={feedback.pronunciation.comment} />
            <ScoreBar label="Grammar" score={feedback.grammar.score} comment={feedback.grammar.comment} />
            <ScoreBar label="Vocabulary" score={feedback.vocabulary.score} comment={feedback.vocabulary.comment} />
          </div>

          <Card className="p-4">
            <p className="text-sm font-medium text-muted-foreground mb-1">Tone</p>
            <Badge variant="outline">{feedback.tone.rating}</Badge>
            <p className="text-sm mt-1">{feedback.tone.comment}</p>
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
        <Badge variant="outline">{SCENARIOS.find(s => s.id === scenario)?.label}</Badge>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={requestFeedback}
            disabled={loadingFeedback || userMsgCount < 2}
          >
            {loadingFeedback ? <Loader2 className="w-4 h-4 animate-spin" /> : `📊 ${t("btn.feedback", uiLang)}`}
          </Button>
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div ref={scrollRef} className="max-w-2xl mx-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                  {m.role === "assistant" && (
                    <button
                      onClick={() => speakText(m.content)}
                      className="mt-1 text-xs opacity-60 hover:opacity-100 flex items-center gap-1"
                    >
                      <Volume2 className="w-3 h-3" /> {t("btn.listen", uiLang)}
                    </button>
                  )}
                </div>
                {m.role === "assistant" && m.content && (
                  <div className="max-w-[80%] w-full"><SupportActions text={m.content} /></div>
                )}
              </div>
            ))}
            {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={endRef} aria-hidden="true" />
          </div>
        </ScrollArea>
        <JumpToLatestButton show={!isAtBottom} onClick={() => scrollToBottom("smooth")} />
      </div>

      <div className="border-t border-border bg-card">
        <MicErrorBanner micError={micError} clearError={clearError} startListening={startListening} />
        <div className="p-4">
          <div className="max-w-2xl mx-auto flex gap-2">
            {speechSupported && (
              <Button
                variant={isListening ? "destructive" : micState === "requesting-permission" ? "outline" : "outline"}
                size="icon"
                onClick={isListening ? stopListening : startListening}
                disabled={isStreaming || micState === "requesting-permission"}
              >
                {micState === "requesting-permission" ? <Loader2 className="w-4 h-4 animate-spin" /> : isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
            )}
            <Textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={isListening ? t("chat.placeholder.listening", uiLang) : t("chat.placeholder.typing", uiLang)}
              className="min-h-[44px] max-h-[120px] resize-none"
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
            />
            <Button onClick={handleSendMessage} disabled={!input.trim() || isStreaming} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
          {isListening && (
            <p className="text-center text-xs text-destructive mt-2 animate-pulse">
              {t("chat.mic.active", uiLang)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISpeakingPractice;
