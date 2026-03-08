import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import {
  Mic, MicOff, Send, RotateCcw, ArrowLeft, ArrowRight, Loader2,
  Volume2, MessageCircle, Coffee, Phone, Briefcase, Users,
  Building2, Globe, Plane, ShoppingCart, ChevronRight
} from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

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
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const { remaining, limitReached, recordSession } = useAIDailyLimit("speaking");

  const speechSupported = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startScenario = (scenarioId: string) => {
    if (limitReached) { toast.error("Limite quotidienne atteinte (10 sessions / 24h)"); return; }
    setScenario(scenarioId);
    setMessages([]);
    setFeedback(null);
    setStep("chat");
    recordSession();
    // Send initial empty to get AI greeting
    streamMessage([], scenarioId, mode);
  };

  const streamMessage = async (msgs: Msg[], sc: string, md: Mode) => {
    setIsStreaming(true);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: msgs, scenario: sc, mode: md }),
      });

      if (!resp.ok) {
        if (resp.status === 429) { toast.error("Trop de requêtes. Réessayez dans un instant."); return; }
        if (resp.status === 402) { toast.error("Crédits IA épuisés."); return; }
        throw new Error("Stream error");
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantText += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantText } : m);
                }
                return [...prev, { role: "assistant", content: assistantText }];
              });
            }
          } catch {}
        }
      }
    } catch (e) {
      toast.error("Erreur de connexion. Réessayez.");
    } finally {
      setIsStreaming(false);
    }
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    const newMsgs: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(newMsgs);
    setInput("");
    streamMessage(newMsgs, scenario, mode);
  };

  const startListening = () => {
    if (!speechSupported) { toast.error("Votre navigateur ne supporte pas la reconnaissance vocale."); return; }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results).map((r: any) => r[0].transcript).join("");
      setInput(transcript);
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (e: any) => {
      setIsListening(false);
      if (e.error === "not-allowed") {
        toast.error("Accès au micro refusé. Autorisez le micro dans les paramètres de votre navigateur, ou ouvrez le site dans un nouvel onglet.", { duration: 6000 });
      } else {
        toast.error("Erreur de reconnaissance vocale. Réessayez ou utilisez la saisie texte.");
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
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
      toast.error("Envoyez au moins 2 messages avant de demander le feedback.");
      return;
    }
    setLoadingFeedback(true);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages, scenario, mode, action: "feedback" }),
      });
      if (!resp.ok) throw new Error("Feedback error");
      const data = await resp.json();
      setFeedback(data.feedback);
      setStep("feedback");
    } catch {
      toast.error("Erreur lors de la génération du feedback.");
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
          title="AI Speaking Practice — Entraînement oral anglais | Addy's English"
          description="Pratiquez l'anglais oral avec un partenaire IA. Reconnaissance vocale, synthèse vocale et feedback détaillé."
          canonical="/speaking-practice"
        />
        <div className="min-h-screen bg-background py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-3">
                <Mic className="w-3 h-3 mr-1" /> {remaining}/{10} sessions restantes
              </Badge>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                🎙️ AI Speaking Practice
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Parlez en anglais avec un partenaire IA. Utilisez votre micro pour pratiquer l'oral et recevez un feedback sur la prononciation, la fluidité et le vocabulaire.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              <Button variant={mode === "practice" ? "default" : "outline"} onClick={() => setMode("practice")}>
                🎯 Practice
              </Button>
              <Button variant={mode === "challenge" ? "default" : "outline"} onClick={() => setMode("challenge")}>
                🔥 Challenge
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
          <Button variant="ghost" onClick={() => setStep("select")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Nouveau scénario
          </Button>

          <h2 className="text-2xl font-heading font-bold text-foreground">📊 Votre feedback</h2>
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
            <p className="font-semibold mb-1">Overall</p>
            <p className="text-sm">{feedback.overall}</p>
          </Card>

          <Button onClick={() => setStep("select")} className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" /> Nouvel entraînement
          </Button>
        </div>
      </div>
    );
  }

  // ── CHAT ──
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-card px-4 py-3 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => setStep("select")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Retour
        </Button>
        <Badge variant="outline">{SCENARIOS.find(s => s.id === scenario)?.label}</Badge>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={requestFeedback}
            disabled={loadingFeedback || userMsgCount < 2}
          >
            {loadingFeedback ? <Loader2 className="w-4 h-4 animate-spin" /> : "📊 Feedback"}
          </Button>
        </div>
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
                {m.role === "assistant" && (
                  <button
                    onClick={() => speakText(m.content)}
                    className="mt-1 text-xs opacity-60 hover:opacity-100 flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" /> Listen
                  </button>
                )}
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
          {speechSupported && (
            <Button
              variant={isListening ? "destructive" : "outline"}
              size="icon"
              onClick={isListening ? stopListening : startListening}
              disabled={isStreaming}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          )}
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={isListening ? "Listening..." : "Type or use the mic..."}
            className="min-h-[44px] max-h-[120px] resize-none"
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
          />
          <Button onClick={sendMessage} disabled={!input.trim() || isStreaming} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        {isListening && (
          <p className="text-center text-xs text-destructive mt-2 animate-pulse">
            🎙️ Microphone actif — parlez en anglais...
          </p>
        )}
      </div>
    </div>
  );
};

export default AISpeakingPractice;
