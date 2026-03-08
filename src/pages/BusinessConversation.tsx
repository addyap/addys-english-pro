import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import {
  MessageCircle, Send, RotateCcw, Award, Briefcase, Users,
  ShieldAlert, Coffee, Handshake, Loader2, ChevronRight,
  Phone, Mic, Building2, Globe, UserCheck, ClipboardList,
  HelpCircle, Presentation, DollarSign, BookOpen, Target, GraduationCap,
  CheckCircle2, AlertTriangle, Lightbulb, ArrowLeft, Square, Clock, TrendingUp,
  RefreshCw, ArrowRight
} from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

interface Feedback {
  fluency: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  tone: { rating: string; comment: string };
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  estimatedSpeakingTime: string;
  overallLevel: string;
  strengths: string;
  needsImprovement: string;
  overall: string;
}

type Mode = "practice" | "challenge" | "exam";

interface ScenarioItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  scenarios: ScenarioItem[];
}

const CATEGORIES: Category[] = [
  {
    id: "business",
    label: "Business English",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-400 dark:border-blue-800",
    scenarios: [
      { id: "meeting-client", label: "Meeting a New Client", icon: Users },
      { id: "negotiating-price", label: "Negotiating a Price", icon: DollarSign },
      { id: "small-talk", label: "Small Talk Before a Meeting", icon: Coffee },
      { id: "presenting-product", label: "Presenting a Product", icon: Presentation },
      { id: "handling-complaint", label: "Handling a Complaint", icon: ShieldAlert },
    ],
  },
  {
    id: "professional",
    label: "Professional Communication",
    icon: ClipboardList,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200 dark:text-emerald-400 dark:border-emerald-800",
    scenarios: [
      { id: "job-interview", label: "Job Interview", icon: UserCheck },
      { id: "project-update", label: "Giving a Project Update", icon: ClipboardList },
      { id: "asking-clarification", label: "Asking for Clarification", icon: HelpCircle },
      { id: "networking-event", label: "Networking Event", icon: Handshake },
      { id: "telephone-followup", label: "Telephone Follow-up", icon: Phone },
    ],
  },
  {
    id: "everyday",
    label: "Everyday Professional English",
    icon: Globe,
    color: "bg-amber-500/10 text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-800",
    scenarios: [
      { id: "talking-about-job", label: "Talking About Your Job", icon: Mic },
      { id: "talking-responsibilities", label: "Talking About Responsibilities", icon: ClipboardList },
      { id: "travel-for-work", label: "Travel for Work", icon: Globe },
      { id: "introducing-yourself", label: "Introducing Yourself", icon: Users },
      { id: "describing-company", label: "Describing Your Company", icon: Building2 },
    ],
  },
];

const MODES: { id: Mode; label: string; description: string; icon: React.ElementType; color: string }[] = [
  {
    id: "practice",
    label: "Practice",
    description: "Supportive training with guidance and encouragement",
    icon: BookOpen,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-300 dark:text-emerald-400 dark:border-emerald-800",
  },
  {
    id: "challenge",
    label: "Challenge",
    description: "Realistic interaction — more demanding, less help",
    icon: Target,
    color: "bg-amber-500/10 text-amber-700 border-amber-300 dark:text-amber-400 dark:border-amber-800",
  },
  {
    id: "exam",
    label: "Exam",
    description: "5-question structured assessment with CEFR level",
    icon: GraduationCap,
    color: "bg-red-500/10 text-red-700 border-red-300 dark:text-red-400 dark:border-red-800",
  },
];

const EXAM_MAX_QUESTIONS = 5;
const MIN_TURNS_FOR_FEEDBACK = 3;
const EXAM_CLOSING_SENTENCE = "Thank you. This concludes the assessment.";
const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/business-chat`;

function getScenarioMeta(scenarioId: string) {
  for (const cat of CATEGORIES) {
    const s = cat.scenarios.find(sc => sc.id === scenarioId);
    if (s) return { ...s, category: cat };
  }
  return null;
}

/**
 * Count real learner turns, excluding the initial bootstrap "Hello." message.
 */
function countRealUserTurns(msgs: Msg[]): number {
  let count = 0;
  let skippedFirst = false;
  for (const m of msgs) {
    if (m.role === "user") {
      if (!skippedFirst) {
        skippedFirst = true;
        continue;
      }
      count++;
    }
  }
  return count;
}

/** Check if the final assistant message contains the exam closing sentence */
function hasExamClosingSentence(msgs: Msg[]): boolean {
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i].role === "assistant") {
      return msgs[i].content.includes(EXAM_CLOSING_SENTENCE);
    }
  }
  return false;
}

const BusinessConversation: React.FC = () => {
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("conversation");
  const [scenario, setScenario] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("practice");
  const [step, setStep] = useState<"scenario" | "mode" | "chat">("scenario");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);
  const [sessionId, setSessionId] = useState(() => crypto.randomUUID());
  const [examComplete, setExamComplete] = useState(false);
  const [startedAt, setStartedAt] = useState(() => new Date().toISOString());
  const [sessionSaved, setSessionSaved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const examFeedbackTriggeredRef = useRef(false);

  const realUserTurns = countRealUserTurns(messages);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Exam mode: auto-trigger feedback after user answers question 5 AND closing sentence streams in
  useEffect(() => {
    if (
      mode === "exam" &&
      realUserTurns >= EXAM_MAX_QUESTIONS &&
      !feedback &&
      !isFeedbackLoading &&
      !examFeedbackTriggeredRef.current &&
      !isLoading && // wait for streaming to finish
      hasExamClosingSentence(messages) // ensure closing sentence present
    ) {
      examFeedbackTriggeredRef.current = true;
      setExamComplete(true);
      requestFeedback(messages);
    }
  }, [realUserTurns, mode, feedback, isFeedbackLoading, isLoading, messages]);

  const selectScenario = (scenarioId: string) => {
    setScenario(scenarioId);
    setStep("mode");
  };

  const selectMode = (m: Mode) => {
    if (limitReached) {
      toast.error(`Daily limit reached (${DAILY_LIMIT} sessions per 24h). Please come back tomorrow!`);
      return;
    }
    setMode(m);
    recordSession();
    startConversation(scenario!, m);
  };

  const startConversation = useCallback(async (scenarioId: string, selectedMode: Mode) => {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
    setStartedAt(new Date().toISOString());
    setSessionSaved(false);
    setStep("chat");
    setMessages([]);
    setFeedback(null);
    setFeedbackError(false);
    setExamComplete(false);
    examFeedbackTriggeredRef.current = false;
    setIsLoading(true);

    try {
      const initMessages: Msg[] = [{ role: "user", content: "Hello." }];
      let assistantSoFar = "";

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: initMessages, scenario: scenarioId, mode: selectedMode }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to start conversation");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      setMessages([
        { role: "user", content: "Hello." },
        { role: "assistant", content: "" },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let nlIdx: number;
        while ((nlIdx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nlIdx);
          buffer = buffer.slice(nlIdx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantSoFar += content;
              setMessages([
                { role: "user", content: "Hello." },
                { role: "assistant", content: assistantSoFar },
              ]);
            }
          } catch { /* partial JSON */ }
        }
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to start conversation");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || !scenario) return;
    if (mode === "exam" && examComplete) return;

    const userMsg: Msg = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");

    // In exam mode, check if this was the last allowed answer
    const newRealTurns = countRealUserTurns(updatedMessages);
    const isLastExamAnswer = mode === "exam" && newRealTurns >= EXAM_MAX_QUESTIONS;

    setIsLoading(true);
    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: updatedMessages, scenario, mode }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to send message");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let nlIdx: number;
        while ((nlIdx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nlIdx);
          buffer = buffer.slice(nlIdx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantSoFar += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch { /* partial */ }
        }
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to send message");
    } finally {
      setIsLoading(false);
      if (!isLastExamAnswer) {
        inputRef.current?.focus();
      }
    }
  }, [input, isLoading, scenario, messages, mode, examComplete]);

  const requestFeedback = useCallback(async (msgsOverride?: Msg[]) => {
    const msgsToUse = msgsOverride || messages;
    if (msgsToUse.length < 2) return;
    if (isFeedbackLoading) return; // prevent duplicate requests

    setIsFeedbackLoading(true);
    setFeedbackError(false);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: msgsToUse, action: "feedback", mode }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to get feedback");
      }

      const data = await resp.json();
      const fb = data.feedback as Feedback;
      setFeedback(fb);

      // Persist session with metadata (only once per session)
      if (!sessionSaved) {
        const { error: insertError } = await supabase.from("conversation_sessions" as any).insert({
          scenario,
          mode,
          messages: JSON.stringify(msgsToUse),
          feedback: JSON.stringify(fb),
          session_id: sessionId,
          started_at: startedAt,
          completed_at: new Date().toISOString(),
          overall_level: fb.overallLevel || null,
        } as any);
        if (!insertError) {
          setSessionSaved(true);
        } else {
          console.warn("[session] DB insert failed, will retry on next feedback request:", insertError.message);
        }
      }
    } catch (e: any) {
      setFeedbackError(true);
      toast.error(e.message || "Could not generate feedback. Please try again.");
    } finally {
      setIsFeedbackLoading(false);
    }
  }, [messages, scenario, sessionId, mode, isFeedbackLoading, sessionSaved, startedAt]);

  const endConversation = useCallback(() => {
    setExamComplete(true);
    requestFeedback();
  }, [requestFeedback]);

  const retryFeedback = useCallback(() => {
    setFeedbackError(false);
    requestFeedback(messages);
  }, [requestFeedback, messages]);

  const resetConversation = () => {
    setScenario(null);
    setMode("practice");
    setStep("scenario");
    setMessages([]);
    setFeedback(null);
    setFeedbackError(false);
    setInput("");
    setExamComplete(false);
    setSessionSaved(false);
    examFeedbackTriggeredRef.current = false;
  };

  const retryScenario = () => {
    if (scenario) {
      setFeedback(null);
      setFeedbackError(false);
      setExamComplete(false);
      examFeedbackTriggeredRef.current = false;
      startConversation(scenario, mode);
    }
  };

  const changeMode = () => {
    setStep("mode");
    setMessages([]);
    setFeedback(null);
    setFeedbackError(false);
    setExamComplete(false);
    examFeedbackTriggeredRef.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const inputDisabled = isLoading || !!feedback || (mode === "exam" && examComplete) || isFeedbackLoading;
  const canEndConversation = realUserTurns >= MIN_TURNS_FOR_FEEDBACK && !feedback && !examComplete && !isFeedbackLoading;
  const examProgress = mode === "exam" ? Math.min(realUserTurns, EXAM_MAX_QUESTIONS) : 0;

  const seoHead = (
    <SEOHead
      title="AI Business Conversation Trainer | Antony Addy"
      description="Practice professional English conversations with an AI partner. Choose a business scenario and get instant feedback on fluency, grammar, vocabulary and professional tone."
      canonicalUrl="https://www.antonyaddy.com/conversation-trainer"
      keywords={["business English", "conversation practice", "professional English", "AI trainer"]}
    />
  );

  // ─── STEP 1: Scenario selection ───
  if (step === "scenario") {
    return (
      <>
        {seoHead}
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-3xl w-full space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                AI Conversation Trainer
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Practice Business English
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Choose a professional scenario and have a realistic conversation with an AI partner. Get detailed coaching feedback when you're done.
              </p>
            </div>

            <div className="space-y-6">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <cat.icon className="w-5 h-5 text-muted-foreground" />
                    <h2 className="font-heading font-semibold text-foreground">{cat.label}</h2>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.scenarios.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => selectScenario(s.id)}
                        className={`group flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all hover:shadow-md hover:scale-[1.02] ${cat.color}`}
                      >
                        <s.icon className="w-4.5 h-4.5 shrink-0" />
                        <span className="font-medium text-sm flex-1">{s.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ─── STEP 2: Mode selection ───
  if (step === "mode") {
    const meta = getScenarioMeta(scenario!);
    return (
      <>
        {seoHead}
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-xl w-full space-y-8">
            <div className="text-center space-y-3">
              <button
                onClick={() => setStep("scenario")}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to scenarios
              </button>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Choose Your Mode
              </h2>
              {meta && (
                <p className="text-muted-foreground">
                  Scenario: <span className="font-medium text-foreground">{meta.label}</span>
                </p>
              )}
            </div>

            <div className="grid gap-3">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => selectMode(m.id)}
                  className={`group flex items-center gap-4 p-5 rounded-xl border text-left transition-all hover:shadow-md hover:scale-[1.01] ${m.color}`}
                >
                  <div className="p-2.5 rounded-lg bg-background/60">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{m.label} Mode</p>
                    <p className="text-sm text-muted-foreground">{m.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ─── STEP 3: Chat ───
  const scenarioMeta = getScenarioMeta(scenario!);
  const currentMode = MODES.find(m => m.id === mode)!;

  return (
    <>
      {seoHead}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {scenarioMeta && (
              <Badge variant="outline" className={scenarioMeta.category.color}>
                <scenarioMeta.icon className="w-3.5 h-3.5 mr-1" />
                {scenarioMeta.label}
              </Badge>
            )}
            <Badge variant="outline" className={currentMode.color}>
              <currentMode.icon className="w-3.5 h-3.5 mr-1" />
              {currentMode.label}
            </Badge>
            {mode === "exam" ? (
              <Badge variant="secondary" className="text-xs">
                Question {examProgress}/{EXAM_MAX_QUESTIONS}
              </Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">
                {realUserTurns} turn{realUserTurns !== 1 ? "s" : ""}
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            {canEndConversation && (
              <Button
                size="sm"
                onClick={endConversation}
                disabled={isFeedbackLoading}
                className="gap-1.5"
              >
                <Square className="w-3.5 h-3.5" />
                End & Get Feedback
              </Button>
            )}
            {isFeedbackLoading && (
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" />
                {mode === "exam" ? "Assessing your answers…" : "Generating feedback…"}
              </Badge>
            )}
            <Button size="sm" variant="outline" onClick={resetConversation} className="gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              New
            </Button>
          </div>
        </div>

        {/* Exam progress bar */}
        {mode === "exam" && !feedback && (
          <Progress value={(examProgress / EXAM_MAX_QUESTIONS) * 100} className="h-1.5" />
        )}

        {/* Chat */}
        <Card className="border overflow-hidden">
          <ScrollArea className="h-[50vh] md:h-[55vh]" ref={scrollRef as any}>
            <div className="p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content || (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Loader2 className="w-3 h-3 animate-spin" /> Typing…
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input area */}
          {!feedback && !feedbackError && (
            <div className="border-t p-3 flex gap-2 items-end bg-background">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  inputDisabled && examComplete
                    ? (isFeedbackLoading ? "Assessing your answers…" : "Exam complete.")
                    : inputDisabled
                    ? "Please wait…"
                    : "Type your reply in English…"
                }
                className="min-h-[44px] max-h-[120px] resize-none text-sm border-0 focus-visible:ring-0 shadow-none p-2"
                disabled={inputDisabled}
                rows={1}
              />
              <Button
                size="icon"
                onClick={sendMessage}
                disabled={!input.trim() || inputDisabled}
                className="shrink-0 h-10 w-10"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          )}
        </Card>

        {/* Feedback error with retry */}
        {feedbackError && !feedback && (
          <Card className="p-5 border-destructive/30 bg-destructive/5 space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <p className="text-sm font-medium text-foreground">Could not generate feedback. Please try again.</p>
            </div>
            <Button onClick={retryFeedback} disabled={isFeedbackLoading} size="sm" className="gap-1.5">
              {isFeedbackLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
              Retry Feedback
            </Button>
          </Card>
        )}

        {/* Feedback */}
        {feedback && (
          <Card className="p-6 space-y-5 border-primary/20 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="font-heading font-bold text-lg text-foreground">Conversation Feedback</h2>
              </div>
              {feedback.overallLevel && (
                <Badge className="text-sm px-3 py-1">{feedback.overallLevel}</Badge>
              )}
            </div>

            {/* Scores */}
            <div className="space-y-4">
              {feedback.fluency?.score > 0 && <ScoreBar score={feedback.fluency.score} label="Fluency" comment={feedback.fluency.comment || ""} />}
              {feedback.grammar?.score > 0 && <ScoreBar score={feedback.grammar.score} label="Grammar" comment={feedback.grammar.comment || ""} />}
              {feedback.vocabulary?.score > 0 && <ScoreBar score={feedback.vocabulary.score} label="Vocabulary" comment={feedback.vocabulary.comment || ""} />}
            </div>

            {feedback.tone?.rating && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Professional Tone</span>
                  <Badge variant={feedback.tone.rating === "Excellent" ? "default" : "secondary"}>
                    {feedback.tone.rating}
                  </Badge>
                </div>
                {feedback.tone.comment && <p className="text-xs text-muted-foreground">{feedback.tone.comment}</p>}
              </div>
            )}

            <CorrectionsList corrections={feedback.corrections || []} />
            <SuggestionsList suggestions={feedback.suggestions || []} />
            <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} overall={feedback.overall} />
            <VocabUpgrades items={feedback.advancedVocabulary || []} />

            {/* Speaking Time */}
            {feedback.estimatedSpeakingTime && (
              <div className="flex items-center gap-4 pt-3 border-t flex-wrap">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Est. speaking time: <span className="font-medium text-foreground">{feedback.estimatedSpeakingTime}</span></span>
                </div>
              </div>
            )}

            {/* Post-feedback CTAs */}
            <div className="pt-3 border-t grid gap-2 sm:grid-cols-3">
              <Button onClick={retryScenario} variant="outline" className="gap-1.5">
                <RefreshCw className="w-4 h-4" />
                Retry Scenario
              </Button>
              <Button onClick={changeMode} variant="outline" className="gap-1.5">
                <Target className="w-4 h-4" />
                Change Mode
              </Button>
              <Button onClick={resetConversation} className="gap-1.5">
                <ArrowRight className="w-4 h-4" />
                New Scenario
              </Button>
            </div>
          </Card>
        )}

        {/* Hint */}
        {!feedback && !feedbackError && !examComplete && realUserTurns > 0 && realUserTurns < MIN_TURNS_FOR_FEEDBACK && mode !== "exam" && (
          <p className="text-center text-xs text-muted-foreground">
            Continue the conversation ({MIN_TURNS_FOR_FEEDBACK - realUserTurns} more turn{MIN_TURNS_FOR_FEEDBACK - realUserTurns !== 1 ? "s" : ""} needed for feedback)
          </p>
        )}
      </div>
    </>
  );
};

export default BusinessConversation;
