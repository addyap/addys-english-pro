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
import {
  MessageCircle, Send, RotateCcw, Award, Briefcase, Users,
  ShieldAlert, Coffee, Handshake, Loader2, ChevronRight,
  Phone, Mic, Building2, Globe, UserCheck, ClipboardList,
  HelpCircle, Presentation, DollarSign, BookOpen, Target, GraduationCap,
  CheckCircle2, AlertTriangle, Lightbulb, ArrowLeft, Square, Clock, TrendingUp
} from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

interface Correction {
  wrong: string;
  correct: string;
  explanation: string;
}

interface VocabUpgrade {
  basic: string;
  advanced: string;
}

interface Feedback {
  fluency: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  tone: { rating: string; comment: string };
  corrections?: Correction[];
  suggestions?: string[];
  advancedVocabulary?: VocabUpgrade[];
  estimatedSpeakingTime?: string;
  overallLevel?: string;
  strengths?: string;
  needsImprovement?: string;
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
 * The first user message is always "Hello." used to start the AI — we skip it.
 */
function countRealUserTurns(msgs: Msg[]): number {
  let count = 0;
  let skippedFirst = false;
  for (const m of msgs) {
    if (m.role === "user") {
      if (!skippedFirst) {
        skippedFirst = true;
        continue; // skip the bootstrap "Hello."
      }
      count++;
    }
  }
  return count;
}

const BusinessConversation: React.FC = () => {
  const [scenario, setScenario] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("practice");
  const [step, setStep] = useState<"scenario" | "mode" | "chat">("scenario");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [sessionId, setSessionId] = useState(() => crypto.randomUUID());
  const [examComplete, setExamComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Ref to prevent double-triggering auto-feedback in exam mode
  const examFeedbackTriggeredRef = useRef(false);

  const realUserTurns = countRealUserTurns(messages);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Exam mode: auto-trigger feedback after user answers question 5
  useEffect(() => {
    if (
      mode === "exam" &&
      realUserTurns >= EXAM_MAX_QUESTIONS &&
      !feedback &&
      !isFeedbackLoading &&
      !examComplete &&
      !examFeedbackTriggeredRef.current
    ) {
      examFeedbackTriggeredRef.current = true;
      setExamComplete(true);
      // Small delay to let the last AI response stream in
      const timer = setTimeout(() => {
        triggerFeedback();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [realUserTurns, mode, feedback, isFeedbackLoading, examComplete]);

  const selectScenario = (scenarioId: string) => {
    setScenario(scenarioId);
    setStep("mode");
  };

  const selectMode = (m: Mode) => {
    setMode(m);
    startConversation(scenario!, m);
  };

  const startConversation = useCallback(async (scenarioId: string, selectedMode: Mode) => {
    // Fresh session ID for each new conversation
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
    setStep("chat");
    setMessages([]);
    setFeedback(null);
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
    // Block sending if exam is complete
    if (mode === "exam" && examComplete) return;

    const userMsg: Msg = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");

    // In exam mode, check if this was the last allowed answer
    const newRealTurns = countRealUserTurns(updatedMessages);
    const isLastExamAnswer = mode === "exam" && newRealTurns >= EXAM_MAX_QUESTIONS;

    // If this is the last exam answer, still send to get AI's closing response, then auto-end
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

  const triggerFeedback = useCallback(async () => {
    // Use latest messages from state via functional ref pattern
    setIsFeedbackLoading(true);

    // We need latest messages — use a small trick: read from DOM-adjacent state
    // Actually we call this from useEffect which has access to `messages` via closure
    // But since this is called via setTimeout, we use a ref approach
  }, []);

  // The actual feedback request — using messages from state at call time
  const requestFeedback = useCallback(async (msgsOverride?: Msg[]) => {
    const msgsToUse = msgsOverride || messages;
    if (msgsToUse.length < 2) return;
    setIsFeedbackLoading(true);

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
      setFeedback(data.feedback);

      // Save to DB with mode
      await supabase.from("conversation_sessions" as any).insert({
        scenario,
        mode,
        messages: JSON.stringify(msgsToUse),
        feedback: JSON.stringify(data.feedback),
        session_id: sessionId,
        completed_at: new Date().toISOString(),
      } as any);
    } catch (e: any) {
      toast.error(e.message || "Failed to generate feedback");
    } finally {
      setIsFeedbackLoading(false);
    }
  }, [messages, scenario, sessionId, mode]);

  // Replace the stub triggerFeedback with one that uses current messages
  // We use useEffect to auto-trigger for exam, and manual button for others
  // For exam auto-trigger, we need a stable ref to messages
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  // Actual exam auto-feedback trigger (called from useEffect timeout)
  useEffect(() => {
    if (examComplete && isFeedbackLoading === false && feedback === null && examFeedbackTriggeredRef.current) {
      // Only trigger once when examComplete first becomes true
      const shouldTrigger = messagesRef.current.length >= 2;
      if (shouldTrigger) {
        requestFeedback(messagesRef.current);
      }
    }
  }, [examComplete]);

  const endConversation = useCallback(() => {
    setExamComplete(true);
    requestFeedback();
  }, [requestFeedback]);

  const resetConversation = () => {
    setScenario(null);
    setMode("practice");
    setStep("scenario");
    setMessages([]);
    setFeedback(null);
    setInput("");
    setExamComplete(false);
    examFeedbackTriggeredRef.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Whether input should be disabled
  const inputDisabled = isLoading || !!feedback || (mode === "exam" && examComplete);

  // Whether the "End & Get Feedback" button should show
  const canEndConversation = realUserTurns >= MIN_TURNS_FOR_FEEDBACK && !feedback && !examComplete;

  // Exam progress indicator
  const examProgress = mode === "exam" ? Math.min(realUserTurns, EXAM_MAX_QUESTIONS) : 0;

  const ScoreBar = ({ score, label, comment }: { score: number; label: string; comment: string }) => (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary">{score}/10</span>
      </div>
      <Progress value={score * 10} className="h-2" />
      <p className="text-xs text-muted-foreground">{comment}</p>
    </div>
  );

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
                {isFeedbackLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Square className="w-3.5 h-3.5" />}
                End & Get Feedback
              </Button>
            )}
            {isFeedbackLoading && examComplete && (
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" />
                Generating feedback…
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

          {/* Input */}
          {!feedback && (
            <div className="border-t p-3 flex gap-2 items-end bg-background">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={inputDisabled && examComplete ? "Exam complete — generating feedback…" : "Type your reply in English…"}
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
              {feedback.fluency && <ScoreBar score={feedback.fluency.score} label="Fluency" comment={feedback.fluency.comment} />}
              {feedback.grammar && <ScoreBar score={feedback.grammar.score} label="Grammar" comment={feedback.grammar.comment} />}
              {feedback.vocabulary && <ScoreBar score={feedback.vocabulary.score} label="Vocabulary" comment={feedback.vocabulary.comment} />}
            </div>

            {feedback.tone && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Professional Tone</span>
                  <Badge variant={feedback.tone.rating === "Excellent" ? "default" : "secondary"}>
                    {feedback.tone.rating}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{feedback.tone.comment}</p>
              </div>
            )}

            {/* Corrections */}
            {feedback.corrections && feedback.corrections.length > 0 && (
              <div className="space-y-3 pt-3 border-t">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-semibold text-sm text-foreground">Corrections</h3>
                </div>
                <div className="space-y-2.5">
                  {feedback.corrections.map((c, i) => (
                    <div key={i} className="bg-background rounded-lg p-3 space-y-1 text-sm">
                      <p className="text-destructive line-through">"{c.wrong}"</p>
                      <p className="text-emerald-700 dark:text-emerald-400 font-medium">→ "{c.correct}"</p>
                      {c.explanation && <p className="text-xs text-muted-foreground">{c.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {feedback.suggestions && feedback.suggestions.length > 0 && (
              <div className="space-y-2 pt-3 border-t">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <h3 className="font-semibold text-sm text-foreground">Suggestions</h3>
                </div>
                <ul className="space-y-1.5">
                  {feedback.suggestions.map((s, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-amber-500 shrink-0">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exam-specific: strengths / needs improvement */}
            {(feedback.strengths || feedback.needsImprovement) && (
              <div className="space-y-2 pt-3 border-t">
                {feedback.strengths && (
                  <div className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-foreground"><span className="font-medium">Strengths:</span> {feedback.strengths}</p>
                  </div>
                )}
                {feedback.needsImprovement && (
                  <div className="flex gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-foreground"><span className="font-medium">Needs improvement:</span> {feedback.needsImprovement}</p>
                  </div>
                )}
              </div>
            )}

            {/* Overall */}
            {feedback.overall && (
              <div className="pt-3 border-t">
                <p className="text-sm text-foreground italic">{feedback.overall}</p>
              </div>
            )}

            <Button onClick={resetConversation} className="w-full gap-2">
              <RotateCcw className="w-4 h-4" />
              Try Another Scenario
            </Button>
          </Card>
        )}

        {/* Hint */}
        {!feedback && !examComplete && realUserTurns > 0 && realUserTurns < MIN_TURNS_FOR_FEEDBACK && mode !== "exam" && (
          <p className="text-center text-xs text-muted-foreground">
            Continue the conversation ({MIN_TURNS_FOR_FEEDBACK - realUserTurns} more turn{MIN_TURNS_FOR_FEEDBACK - realUserTurns !== 1 ? "s" : ""} needed for feedback)
          </p>
        )}
      </div>
    </>
  );
};

export default BusinessConversation;
