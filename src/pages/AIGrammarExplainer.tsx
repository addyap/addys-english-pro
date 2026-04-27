import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import SupportActions from "@/components/ai-trainer/SupportActions";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { GrammarExplainerResult } from "@/types/ai-trainers";
import { Search, RotateCcw, Loader2, BookOpen, Lightbulb, ArrowRight, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";
import AIToolLoadingSkeleton from "@/components/ai-trainer/AIToolLoadingSkeleton";
import { useSessionHistory, type SessionHistoryItem } from "@/hooks/useSessionHistory";
import RecentPractice from "@/components/ai-trainer/RecentPractice";
import UsageCounterBadge from "@/components/ai-trainer/UsageCounterBadge";
import ResultUtilityBar from "@/components/ai-trainer/ResultUtilityBar";
import { incrementUsageCounter, saveSession } from "@/lib/session-memory";
import { trackEvent } from "@/lib/analytics";

const EXAMPLE_SENTENCES = [
  "If I had known about the meeting, I would have prepared a report.",
  "The project, which was completed ahead of schedule, exceeded expectations.",
  "She's been working on this proposal since Monday morning.",
  "Not only did he finish the report, but he also presented it to the board.",
  "Had the client agreed to our terms, we could have started earlier.",
];

const AIGrammarExplainer = () => {
  const { t } = useTranslation();
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState<GrammarExplainerResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [usageTick, setUsageTick] = useState(0);
  const { remaining, limitReached, recordSession } = useAIDailyLimit("grammar-explainer");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();
  const { items: history, addItem: addHistoryItem, clear: clearHistory } = useSessionHistory("grammar-explainer");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const analyse = async (text?: string) => {
    const s = (text || sentence).trim();
    if (s.length < 3) { toast.error(t("ai.grammarEnterSentence", "Please enter an English sentence.")); return; }
    if (limitReached) { toast.error(t("ai.dailyLimitReached", "Daily limit reached (10 sessions / 24h).")); return; }

    setLoading(true);
    setResult(null);
    recordSession();
    trackEvent("ai_submit", { tool: "grammar", page: "grammar-explainer" });
    const startedAt = Date.now();

    try {
      const { data, error } = await supabase.functions.invoke("grammar-explainer", {
        body: { sentence: s, feedbackLanguage: feedbackLang },
      });
      if (error) throw error;
      // Enforce a minimum loading display time of 1.5s to avoid flicker
      const elapsed = Date.now() - startedAt;
      if (elapsed < 1500) {
        await new Promise((r) => setTimeout(r, 1500 - elapsed));
      }
      setResult(data.result);
      setSentence(s);
      trackEvent("ai_result_received", { tool: "grammar", page: "grammar-explainer" });
      // Build a compact summary for history (rules + tips fallback)
      const summary =
        (data?.result?.rules?.[0]?.example as string) ||
        (data?.result?.tips?.[0] as string) ||
        s;
      addHistoryItem(s, summary);
      saveSession("grammar-explainer", s, summary.slice(0, 240));
      incrementUsageCounter();
      setUsageTick((n) => n + 1);
    } catch {
      toast.error(t("ai.grammarAnalyzeError", "Analysis failed. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSentence("");
    setResult(null);
  };

  const tryAgain = () => {
    trackEvent("ai_retry_click", { tool: "grammar", page: "grammar-explainer" });
    setResult(null);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      inputRef.current?.classList.add("ring-2", "ring-primary");
      setTimeout(() => inputRef.current?.classList.remove("ring-2", "ring-primary"), 1200);
    }, 50);
  };

  const restoreFromHistory = (item: SessionHistoryItem) => {
    trackEvent("ai_session_resume", { tool: "grammar", page: "grammar-explainer" });
    setSentence(item.input);
    setResult(null);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const POS_COLORS: Record<string, string> = {
    noun: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    verb: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    adjective: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    adverb: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    preposition: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    conjunction: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    pronoun: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    article: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300",
    auxiliary: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
    modal: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  };

  return (
    <>
      <SEOHead
        title="AI Grammar Explainer — Analyse grammaticale anglais"
        description="Analysez vos phrases anglaises avec l'IA d'Antony Addy : nature des mots, règles, conseils. Outil gratuit pour professionnels en France."
        canonical="/grammar-explainer"
      />
      <div className="min-h-screen bg-background py-10 pb-32 md:pb-10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="secondary">
                <BookOpen className="w-3 h-3 mr-1" /> {remaining}/{10} sessions restantes
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              📖 AI Grammar Explainer
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Collez une phrase en anglais et obtenez une analyse grammaticale complète — nature des mots, règles, et conseils pratiques.
            </p>
          </div>

          {!result && (
            <>
              <UsageCounterBadge refreshKey={usageTick} />
              <RecentPractice
                items={history}
                onRestore={restoreFromHistory}
                onClear={clearHistory}
              />
            </>
          )}

          {/* Input */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              {sentence.length === 0 && !loading && (
                <div className="p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground/80 mb-1">{t("ai.grammarTryThis", "Try this:")}</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>{t("ai.grammarExample1", "Correct my business email")}</li>
                    <li>{t("ai.grammarExample2", "Explain present perfect")}</li>
                    <li>{t("ai.grammarExample3", "Improve this sentence")}</li>
                  </ul>
                </div>
              )}
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={sentence}
                  onChange={e => setSentence(e.target.value)}
                  placeholder={t("ai.grammarPlaceholder", "Type or paste an English sentence...")}
                  maxLength={500}
                  onKeyDown={e => { if (e.key === "Enter") analyse(); }}
                  disabled={loading}
                />
                <Button onClick={() => analyse()} disabled={loading || sentence.trim().length < 3 || limitReached} className="hidden sm:inline-flex">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                </Button>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">Exemples :</p>
                <div className="flex flex-wrap gap-2">
                  {EXAMPLE_SENTENCES.map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => { setSentence(ex); analyse(ex); }}
                      disabled={loading}
                      className="text-xs px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 text-foreground transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {ex.length > 50 ? ex.slice(0, 50) + "..." : ex}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading skeleton (no empty space while AI is processing) */}
          {loading && !result && (
            <AIToolLoadingSkeleton
              headline="Analyzing your English..."
              steps={[
                "Checking grammar...",
                "Improving tone...",
                "Making it natural...",
              ]}
            />
          )}

          {/* Results */}
          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              {/* Level */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-heading font-bold">Analyse</h2>
                <Badge className="text-base px-3 py-1">Niveau {result.level}</Badge>
              </div>

              {/* Sentence with colored words */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">🔤 Analyse mot par mot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.breakdown.map((b, i) => (
                      <div key={i} className="text-center">
                        <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${POS_COLORS[b.partOfSpeech.toLowerCase()] || "bg-muted text-foreground"}`}>
                          {b.word}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{b.partOfSpeech}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mt-4">
                    {result.breakdown.map((b, i) => (
                      <div key={i} className="flex gap-3 items-start text-sm">
                        <Badge variant="outline" className="shrink-0 text-xs">{b.role}</Badge>
                        <div>
                          <span className="font-semibold">{b.word}</span>
                          <span className="text-muted-foreground"> — {b.explanation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">📐 Règles de grammaire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {result.rules.map((r, i) => (
                    <div key={i} className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{r.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{r.explanation}</p>
                      <p className="text-sm italic text-primary">💡 {r.example}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Conseils pratiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-3 h-3 mt-1 text-primary shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <ResultUtilityBar
                text={[
                  `Sentence: ${sentence}`,
                  `Level: ${result.level}`,
                  "",
                  "Rules:",
                  ...result.rules.map((r) => `• ${r.name} — ${r.explanation}`),
                  "",
                  "Tips:",
                  ...result.tips.map((tip) => `• ${tip}`),
                ].join("\n")}
                tool="grammar"
                page="grammar-explainer"
                fileName="ai-grammar-explanation"
                copyLabel="Copy Explanation"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button onClick={tryAgain} variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" /> Try again with this feedback
                </Button>
                <Button onClick={reset} className="w-full">
                  <RotateCcw className="w-4 h-4 mr-2" /> Nouvelle phrase
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile floating analyse button */}
        {!result && (
          <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
            <Button
              onClick={() => analyse()}
              disabled={loading || sentence.trim().length < 3 || limitReached}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Analyzing...</>
              ) : (
                <><Search className="w-4 h-4 mr-2" /> Analyze</>
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default AIGrammarExplainer;
