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
  MessageCircle, Send, RotateCcw, Award, Briefcase, Users,
  ShieldAlert, Coffee, Handshake, Loader2, ChevronRight
} from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

interface Feedback {
  fluency: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  tone: { rating: string; comment: string };
  overall: string;
}

const SCENARIOS = [
  { id: "meeting-client", label: "Meeting a New Client", icon: Briefcase, color: "bg-blue-500/10 text-blue-700 border-blue-200" },
  { id: "welcoming-customer", label: "Welcoming a Customer", icon: Users, color: "bg-green-500/10 text-green-700 border-green-200" },
  { id: "handling-complaint", label: "Handling a Complaint", icon: ShieldAlert, color: "bg-red-500/10 text-red-700 border-red-200" },
  { id: "small-talk", label: "Small Talk Before a Meeting", icon: Coffee, color: "bg-amber-500/10 text-amber-700 border-amber-200" },
  { id: "networking", label: "Networking at a Trade Fair", icon: Handshake, color: "bg-purple-500/10 text-purple-700 border-purple-200" },
];

const MIN_TURNS_FOR_FEEDBACK = 3;

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/business-chat`;

const BusinessConversation: React.FC = () => {
  const [scenario, setScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const userTurnCount = messages.filter(m => m.role === "user").length;

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const startConversation = useCallback(async (scenarioId: string) => {
    setScenario(scenarioId);
    setMessages([]);
    setFeedback(null);
    setIsLoading(true);

    try {
      // Send an initial empty user message to get the AI to start
      const initMessages: Msg[] = [{ role: "user", content: "Hello." }];
      let assistantSoFar = "";

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: initMessages, scenario: scenarioId }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to start conversation");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const initialMessages: Msg[] = [
        { role: "user", content: "Hello." },
        { role: "assistant", content: "" },
      ];
      setMessages(initialMessages);

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
        body: JSON.stringify({ messages: updatedMessages, scenario }),
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
  }, [input, isLoading, scenario, messages]);

  const requestFeedback = useCallback(async () => {
    if (messages.length < 2) return;
    setIsFeedbackLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages, action: "feedback" }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to get feedback");
      }

      const data = await resp.json();
      setFeedback(data.feedback);

      // Save to DB
      await supabase.from("conversation_sessions" as any).insert({
        scenario,
        messages: JSON.stringify(messages),
        feedback: JSON.stringify(data.feedback),
        session_id: sessionId,
        completed_at: new Date().toISOString(),
      } as any);
    } catch (e: any) {
      toast.error(e.message || "Failed to generate feedback");
    } finally {
      setIsFeedbackLoading(false);
    }
  }, [messages, scenario, sessionId]);

  const resetConversation = () => {
    setScenario(null);
    setMessages([]);
    setFeedback(null);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

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

  // Scenario selection screen
  if (!scenario) {
    return (
      <>
        <SEOHead
          title="AI Business Conversation Trainer | Antony Addy"
          description="Practice professional English conversations with an AI partner. Choose a business scenario and get instant feedback on fluency, grammar, vocabulary and professional tone."
          path="/conversation-trainer"
          keywords={["business English", "conversation practice", "professional English", "AI trainer"]}
        />
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                AI Conversation Trainer
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Practice Business English
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Choose a professional scenario below and have a realistic conversation with an AI partner. Get detailed feedback when you're done.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => startConversation(s.id)}
                  className={`group flex items-center gap-3 p-4 rounded-xl border text-left transition-all hover:shadow-md hover:scale-[1.02] ${s.color}`}
                >
                  <s.icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium text-sm flex-1">{s.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  const currentScenario = SCENARIOS.find(s => s.id === scenario);

  return (
    <>
      <SEOHead
        title="AI Business Conversation Trainer | Antony Addy"
        description="Practice professional English conversations with an AI partner."
        path="/conversation-trainer"
        keywords={["business English", "conversation practice"]}
      />
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {currentScenario && (
              <Badge variant="outline" className={currentScenario.color}>
                <currentScenario.icon className="w-3.5 h-3.5 mr-1" />
                {currentScenario.label}
              </Badge>
            )}
            <Badge variant="secondary" className="text-xs">
              {userTurnCount} turn{userTurnCount !== 1 ? "s" : ""}
            </Badge>
          </div>
          <div className="flex gap-2">
            {userTurnCount >= MIN_TURNS_FOR_FEEDBACK && !feedback && (
              <Button
                size="sm"
                onClick={requestFeedback}
                disabled={isFeedbackLoading}
                className="gap-1.5"
              >
                {isFeedbackLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Award className="w-3.5 h-3.5" />}
                Get Feedback
              </Button>
            )}
            <Button size="sm" variant="outline" onClick={resetConversation} className="gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              New Scenario
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

          {/* Input */}
          <div className="border-t p-3 flex gap-2 items-end bg-background">
            <Textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your reply in English…"
              className="min-h-[44px] max-h-[120px] resize-none text-sm border-0 focus-visible:ring-0 shadow-none p-2"
              disabled={isLoading || !!feedback}
              rows={1}
            />
            <Button
              size="icon"
              onClick={sendMessage}
              disabled={!input.trim() || isLoading || !!feedback}
              className="shrink-0 h-10 w-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Feedback */}
        {feedback && (
          <Card className="p-6 space-y-5 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-heading font-bold text-lg text-foreground">Your Performance</h2>
            </div>

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
        {!feedback && userTurnCount > 0 && userTurnCount < MIN_TURNS_FOR_FEEDBACK && (
          <p className="text-center text-xs text-muted-foreground">
            Continue the conversation ({MIN_TURNS_FOR_FEEDBACK - userTurnCount} more turn{MIN_TURNS_FOR_FEEDBACK - userTurnCount !== 1 ? "s" : ""} needed for feedback)
          </p>
        )}
      </div>
    </>
  );
};

export default BusinessConversation;
