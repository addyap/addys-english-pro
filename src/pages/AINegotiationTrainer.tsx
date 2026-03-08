import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import {
  Send, RotateCcw, Award, Briefcase, Users,
  Loader2, ChevronRight, DollarSign, BookOpen, Target,
  CheckCircle2, AlertTriangle, Lightbulb, ArrowLeft, Square,
  TrendingUp, RefreshCw, ArrowRight, Handshake, Shield, Building2,
  Globe, UserCheck, Scale
} from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

interface Correction { wrong: string; correct: string; explanation: string }
interface VocabUpgrade { basic: string; advanced: string }

interface Feedback {
  persuasion: { score: number; comment: string };
  clarity: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  strategy: { score: number; comment: string };
  professionalism: { score: number; comment: string };
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgrade[];
  overallLevel: string;
  strengths: string;
  needsImprovement: string;
  overall: string;
}

type Mode = "practice" | "challenge";

interface ScenarioItem {
  id: string;
  label: string;
  description: string;
  difficulty: string;
  objective: string;
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
    id: "sales",
    label: "Sales Negotiation",
    icon: DollarSign,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200 dark:text-emerald-400 dark:border-emerald-800",
    scenarios: [
      { id: "price-negotiation", label: "Price Negotiation", description: "Client says your training is too expensive.", difficulty: "B1–B2", objective: "Defend your pricing while keeping the client interested.", icon: DollarSign },
      { id: "discount-request", label: "Discount Request", description: "Client asks for a 20% discount.", difficulty: "B1–B2", objective: "Find a compromise that satisfies both parties.", icon: DollarSign },
      { id: "long-term-contract", label: "Long-Term Contract", description: "Client wants better terms for a multi-year commitment.", difficulty: "B2", objective: "Negotiate volume discounts while protecting margins.", icon: Handshake },
      { id: "value-objection", label: "Value Objection", description: "Client isn't convinced your product is necessary.", difficulty: "B2–C1", objective: "Demonstrate clear value and ROI.", icon: Shield },
    ],
  },
  {
    id: "business",
    label: "Business Negotiation",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-400 dark:border-blue-800",
    scenarios: [
      { id: "deadline-negotiation", label: "Deadline Negotiation", description: "Manager asks you to finish a project earlier.", difficulty: "B1–B2", objective: "Negotiate a realistic deadline with trade-offs.", icon: Briefcase },
      { id: "resource-negotiation", label: "Resource Negotiation", description: "You need more resources for your project.", difficulty: "B2", objective: "Justify your resource request convincingly.", icon: Users },
      { id: "budget-approval", label: "Budget Approval", description: "Justify your budget request to the CFO.", difficulty: "B2–C1", objective: "Present a compelling business case.", icon: Scale },
      { id: "scope-change", label: "Scope Change", description: "Project scope needs to change mid-way.", difficulty: "B2", objective: "Negotiate scope adjustments with cost implications.", icon: Briefcase },
    ],
  },
  {
    id: "career",
    label: "Career Negotiation",
    icon: UserCheck,
    color: "bg-purple-500/10 text-purple-700 border-purple-200 dark:text-purple-400 dark:border-purple-800",
    scenarios: [
      { id: "salary-negotiation", label: "Salary Negotiation", description: "Discuss salary after a job offer.", difficulty: "B1–B2", objective: "Negotiate a fair salary package.", icon: DollarSign },
      { id: "promotion-discussion", label: "Promotion Discussion", description: "Ask for more responsibilities or a promotion.", difficulty: "B2", objective: "Make a convincing case for advancement.", icon: TrendingUp },
    ],
  },
  {
    id: "trade-fair",
    label: "Trade Fair",
    icon: Globe,
    color: "bg-amber-500/10 text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-800",
    scenarios: [
      { id: "trade-fair-buyer", label: "Trade Fair Buyer", description: "Convince a visitor at your stand.", difficulty: "B1–B2", objective: "Deliver a compelling pitch under time pressure.", icon: Globe },
      { id: "distributor-negotiation", label: "Distributor Negotiation", description: "Discuss partnership conditions.", difficulty: "B2–C1", objective: "Secure favorable distribution terms.", icon: Handshake },
      { id: "vendor-selection", label: "Vendor Selection", description: "You're being evaluated against competitors.", difficulty: "B2–C1", objective: "Differentiate your offer and win the deal.", icon: Shield },
      { id: "territory-rights", label: "Territory Rights", description: "Negotiate exclusive territory rights.", difficulty: "B2–C1", objective: "Secure the broadest territory possible.", icon: Globe },
    ],
  },
  {
    id: "executive",
    label: "Executive Negotiation",
    icon: Building2,
    color: "bg-red-500/10 text-red-700 border-red-200 dark:text-red-400 dark:border-red-800",
    scenarios: [
      { id: "partnership-negotiation", label: "Partnership Negotiation", description: "Discuss terms of a strategic partnership.", difficulty: "B2–C1", objective: "Define fair partnership terms.", icon: Handshake },
      { id: "strategic-agreement", label: "Strategic Agreement", description: "Agree on responsibilities between companies.", difficulty: "C1", objective: "Protect your company's interests while finding common ground.", icon: Scale },
      { id: "contract-renewal", label: "Contract Renewal", description: "Renegotiate terms at contract renewal.", difficulty: "B2", objective: "Secure better terms for the renewal period.", icon: Briefcase },
      { id: "payment-terms", label: "Payment Terms", description: "Negotiate extended payment terms.", difficulty: "B2", objective: "Secure more favorable payment conditions.", icon: DollarSign },
      { id: "service-upgrade", label: "Service Upgrade", description: "Client wants premium features at current price.", difficulty: "B2", objective: "Get an upgrade without proportional price increase.", icon: TrendingUp },
      { id: "crisis-resolution", label: "Crisis Resolution", description: "Resolve a serious client complaint.", difficulty: "B2–C1", objective: "Secure concrete compensation and guarantees.", icon: AlertTriangle },
    ],
  },
];

const MODES: { id: Mode; label: string; description: string; icon: React.ElementType; color: string }[] = [
  {
    id: "practice",
    label: "Practice",
    description: "Supportive negotiation with occasional hints",
    icon: BookOpen,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-300 dark:text-emerald-400 dark:border-emerald-800",
  },
  {
    id: "challenge",
    label: "Challenge",
    description: "Tough, realistic negotiation — no hints",
    icon: Target,
    color: "bg-amber-500/10 text-amber-700 border-amber-300 dark:text-amber-400 dark:border-amber-800",
  },
];

const MIN_TURNS_FOR_FEEDBACK = 3;
const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/negotiation-trainer`;

function getScenarioMeta(scenarioId: string) {
  for (const cat of CATEGORIES) {
    const s = cat.scenarios.find(sc => sc.id === scenarioId);
    if (s) return { ...s, category: cat };
  }
  return null;
}

function countRealUserTurns(msgs: Msg[]): number {
  let count = 0;
  let skippedFirst = false;
  for (const m of msgs) {
    if (m.role === "user") {
      if (!skippedFirst) { skippedFirst = true; continue; }
      count++;
    }
  }
  return count;
}

const AINegotiationTrainer: React.FC = () => {
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
  const [startedAt, setStartedAt] = useState(() => new Date().toISOString());
  const [sessionSaved, setSessionSaved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const realUserTurns = countRealUserTurns(messages);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const selectScenario = (scenarioId: string) => {
    setScenario(scenarioId);
    setStep("mode");
  };

  const selectMode = (m: Mode) => {
    setMode(m);
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
    setIsLoading(true);

    try {
      const initMessages: Msg[] = [{ role: "user", content: "Hello, I'd like to discuss this matter with you." }];
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
        throw new Error(err.error || "Failed to start negotiation");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      setMessages([
        { role: "user", content: "Hello, I'd like to discuss this matter with you." },
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
                { role: "user", content: "Hello, I'd like to discuss this matter with you." },
                { role: "assistant", content: assistantSoFar },
              ]);
            }
          } catch { /* partial JSON */ }
        }
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to start negotiation");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || !scenario) return;

    const userMsg: Msg = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
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
      inputRef.current?.focus();
    }
  }, [input, isLoading, scenario, messages, mode]);

  const requestFeedback = useCallback(async (msgsOverride?: Msg[]) => {
    const msgsToUse = msgsOverride || messages;
    if (msgsToUse.length < 2) return;
    if (isFeedbackLoading) return;

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

      if (!sessionSaved) {
        const meta = getScenarioMeta(scenario!);
        const { error: insertError } = await supabase.from("negotiation_training_sessions" as any).insert({
          scenario,
          category: meta?.category?.id || null,
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
          console.warn("[session] DB insert failed:", insertError.message);
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
    setSessionSaved(false);
  };

  const retryScenario = () => {
    if (scenario) {
      setFeedback(null);
      setFeedbackError(false);
      startConversation(scenario, mode);
    }
  };

  const changeMode = () => {
    setStep("mode");
    setMessages([]);
    setFeedback(null);
    setFeedbackError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const inputDisabled = isLoading || !!feedback || isFeedbackLoading;
  const canEndConversation = realUserTurns >= MIN_TURNS_FOR_FEEDBACK && !feedback && !isFeedbackLoading;

  const ScoreBar = ({ score, label, comment }: { score: number; label: string; comment: string }) => (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary">{score}/10</span>
      </div>
      <Progress value={score * 10} className="h-2" />
      {comment && <p className="text-xs text-muted-foreground">{comment}</p>}
    </div>
  );

  const seoHead = (
    <SEOHead
      title="AI Negotiation Trainer | Business English Practice"
      description="Practice professional negotiations in English and receive instant AI feedback on persuasion, vocabulary, and negotiation strategy."
      canonicalUrl="https://www.antonyaddy.com/negotiation-trainer"
      keywords={["negotiation English", "business negotiation practice", "professional English", "AI negotiation trainer"]}
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
                <Handshake className="w-4 h-4" />
                AI Negotiation Trainer
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Practice Business Negotiations
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Choose a negotiation scenario and practice with an AI partner. Get detailed feedback on persuasion, strategy, and professional language.
              </p>
            </div>

            <div className="space-y-6">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <cat.icon className="w-5 h-5 text-muted-foreground" />
                    <h2 className="font-heading font-semibold text-foreground">{cat.label}</h2>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {cat.scenarios.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => selectScenario(s.id)}
                        className={`group flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all hover:shadow-md hover:scale-[1.02] ${cat.color}`}
                      >
                        <s.icon className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-sm block">{s.label}</span>
                          <span className="text-xs text-muted-foreground block mt-0.5">{s.description}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
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
                <div className="space-y-1">
                  <p className="text-muted-foreground">
                    Scenario: <span className="font-medium text-foreground">{meta.label}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Objective: {meta.objective}
                  </p>
                </div>
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
            <Badge variant="secondary" className="text-xs">
              {realUserTurns} turn{realUserTurns !== 1 ? "s" : ""}
            </Badge>
          </div>
          <div className="flex gap-2">
            {canEndConversation && (
              <Button size="sm" onClick={endConversation} disabled={isFeedbackLoading} className="gap-1.5">
                <Square className="w-3.5 h-3.5" />
                End & Get Feedback
              </Button>
            )}
            {isFeedbackLoading && (
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
                placeholder={inputDisabled ? "Please wait…" : "Type your response…"}
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

        {/* Feedback error */}
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
                <h2 className="font-heading font-bold text-lg text-foreground">Negotiation Feedback</h2>
              </div>
              {feedback.overallLevel && (
                <Badge className="text-sm px-3 py-1">{feedback.overallLevel}</Badge>
              )}
            </div>

            {/* Scores */}
            <div className="space-y-4">
              {feedback.persuasion?.score > 0 && <ScoreBar score={feedback.persuasion.score} label="Persuasion" comment={feedback.persuasion.comment || ""} />}
              {feedback.clarity?.score > 0 && <ScoreBar score={feedback.clarity.score} label="Clarity" comment={feedback.clarity.comment || ""} />}
              {feedback.grammar?.score > 0 && <ScoreBar score={feedback.grammar.score} label="Grammar" comment={feedback.grammar.comment || ""} />}
              {feedback.vocabulary?.score > 0 && <ScoreBar score={feedback.vocabulary.score} label="Vocabulary" comment={feedback.vocabulary.comment || ""} />}
              {feedback.strategy?.score > 0 && <ScoreBar score={feedback.strategy.score} label="Strategy" comment={feedback.strategy.comment || ""} />}
              {feedback.professionalism?.score > 0 && <ScoreBar score={feedback.professionalism.score} label="Professionalism" comment={feedback.professionalism.comment || ""} />}
            </div>

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
                      {c.wrong && <p className="text-destructive line-through">"{c.wrong}"</p>}
                      {c.correct && <p className="text-emerald-700 dark:text-emerald-400 font-medium">→ "{c.correct}"</p>}
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

            {/* Strengths / Needs improvement */}
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

            {/* Vocabulary Upgrades */}
            {feedback.advancedVocabulary && feedback.advancedVocabulary.length > 0 && (
              <div className="space-y-2 pt-3 border-t">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm text-foreground">Vocabulary Upgrades</h3>
                </div>
                <div className="space-y-1.5">
                  {feedback.advancedVocabulary.map((v, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">{v.basic}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="font-medium text-primary">{v.advanced}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overall */}
            {feedback.overall && (
              <div className="pt-3 border-t">
                <p className="text-sm text-foreground italic">{feedback.overall}</p>
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
        {!feedback && !feedbackError && realUserTurns > 0 && realUserTurns < MIN_TURNS_FOR_FEEDBACK && (
          <p className="text-center text-xs text-muted-foreground">
            Continue the negotiation ({MIN_TURNS_FOR_FEEDBACK - realUserTurns} more turn{MIN_TURNS_FOR_FEEDBACK - realUserTurns !== 1 ? "s" : ""} needed for feedback)
          </p>
        )}
      </div>
    </>
  );
};

export default AINegotiationTrainer;
