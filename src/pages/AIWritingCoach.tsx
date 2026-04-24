import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import SupportActions from "@/components/ai-trainer/SupportActions";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import RatingBadge from "@/components/ai-trainer/RatingBadge";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import { invokeAI } from "@/lib/ai/streamChat";
import { t, type UILang } from "@/lib/ai/i18n";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import { Send, RotateCcw, Loader2, FileText, Wand2, Eye, ChevronDown, ChevronUp, Copy, Check, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import FeedbackLanguageToggle from "@/components/ai-trainer/FeedbackLanguageToggle";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";
import AIToolLoadingSkeleton from "@/components/ai-trainer/AIToolLoadingSkeleton";
import { useSessionHistory, type SessionHistoryItem } from "@/hooks/useSessionHistory";
import RecentPractice from "@/components/ai-trainer/RecentPractice";
import UsageCounterBadge from "@/components/ai-trainer/UsageCounterBadge";
import ResultUtilityBar from "@/components/ai-trainer/ResultUtilityBar";
import { incrementUsageCounter, saveSession } from "@/lib/session-memory";
import { trackEvent } from "@/lib/analytics";

interface Feedback {
  taskAchievement: { score: number; comment: string };
  clarity: { score: number; comment: string };
  coherence: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  style: { rating: string; comment: string };
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
  improvedVersion: string;
}

const WRITING_TYPES = [
  { value: "email", label: "Professional Email" },
  { value: "essay", label: "Essay / Composition" },
  { value: "report", label: "Business Report" },
  { value: "cover-letter", label: "Cover Letter" },
  { value: "linkedin", label: "LinkedIn Post" },
  { value: "presentation", label: "Presentation Script" },
  { value: "meeting-notes", label: "Meeting Notes / Minutes" },
  { value: "general", label: "General Writing" },
];

const FUNC_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/writing-coach`;

const AIWritingCoach = () => {
  const [text, setText] = useState("");
  const [writingType, setWritingType] = useState("email");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [showImproved, setShowImproved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [usageTick, setUsageTick] = useState(0);
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("writing-coach");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();
  const uiLang = feedbackLang as UILang;
  const { items: history, addItem: addHistoryItem, clear: clearHistory } = useSessionHistory("writing-coach");
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const submit = async () => {
    if (text.trim().length < 20) {
      toast.error(t("error.min_chars", uiLang, 20));
      return;
    }
    if (limitReached) {
      toast.error(t("daily.limit.reached", uiLang, DAILY_LIMIT));
      return;
    }

    setLoading(true);
    setFeedback(null);
    recordSession();
    trackEvent("ai_submit", { tool: "writing", page: "writing-coach", writingType });
    const startedAt = Date.now();

    try {
      const { data, error } = await invokeAI<{ feedback: Feedback }>(FUNC_URL, {
        text: text.trim(),
        writingType,
        feedbackLanguage: feedbackLang,
      });
      if (error) { toast.error(error.message); return; }
      // Enforce a minimum loading display time of 1.5s to avoid flicker
      const elapsed = Date.now() - startedAt;
      if (elapsed < 1500) {
        await new Promise((r) => setTimeout(r, 1500 - elapsed));
      }
      if (data?.feedback) {
        setFeedback(data.feedback);
        addHistoryItem(text.trim(), data.feedback.improvedVersion || "");
        saveSession("writing-coach", text.trim(), (data.feedback.improvedVersion || "").slice(0, 240));
        incrementUsageCounter();
        setUsageTick((n) => n + 1);
        trackEvent("ai_result_received", { tool: "writing", page: "writing-coach" });
      }
    } catch {
      toast.error(t("error.feedback", uiLang));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setText("");
    setFeedback(null);
    setShowImproved(false);
  };

  const tryAgain = () => {
    trackEvent("ai_retry_click", { tool: "writing", page: "writing-coach" });
    setFeedback(null);
    setShowImproved(false);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      // brief highlight
      inputRef.current?.classList.add("ring-2", "ring-primary");
      setTimeout(() => inputRef.current?.classList.remove("ring-2", "ring-primary"), 1200);
    }, 50);
  };

  const restoreFromHistory = (item: SessionHistoryItem) => {
    trackEvent("ai_session_resume", { tool: "writing", page: "writing-coach" });
    setText(item.input);
    setFeedback(null);
    setShowImproved(false);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const copyImproved = async () => {
    const improved = feedback?.improvedVersion?.trim();
    if (!improved) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(improved);
      } else {
        throw new Error("no clipboard");
      }
      setCopied(true);
      toast.success("Copied!");
      trackEvent("ai_copy_click", { tool: "writing", page: "writing-coach" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy, please select text manually");
    }
  };

  return (
    <>
      <SEOHead
        title="AI Writing Coach — Correction anglais écrit | Addy's English"
        description="Soumettez un texte en anglais et recevez un feedback IA détaillé : grammaire, vocabulaire, style et version améliorée."
        canonical="/writing-coach"
      />
      <div className="min-h-screen bg-background py-10 pb-32 md:pb-10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="secondary">
                <FileText className="w-3 h-3 mr-1" /> {t("sessions.remaining", uiLang, remaining, DAILY_LIMIT)}
              </Badge>
              <FeedbackLanguageToggle value={feedbackLang} onChange={setFeedbackLang} />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              ✍️ AI Writing Coach
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("speaking.desc", uiLang)}
            </p>
          </div>

          {!feedback ? (
            <>
              <UsageCounterBadge refreshKey={usageTick} />
              <RecentPractice
                items={history}
                onRestore={restoreFromHistory}
                onClear={clearHistory}
              />
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">{t("writing.type_label", uiLang)}</label>
                    <Select value={writingType} onValueChange={setWritingType} disabled={loading}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {WRITING_TYPES.map(wt => (
                          <SelectItem key={wt.value} value={wt.value}>{wt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">{t("writing.input_label", uiLang)}</label>
                    {text.length === 0 && !loading && (
                      <div className="mb-3 p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground/80 mb-1">Try this:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          <li>Correct my business email</li>
                          <li>Explain present perfect</li>
                          <li>Improve this sentence</li>
                        </ul>
                      </div>
                    )}
                    <Textarea
                      ref={inputRef}
                      value={text}
                      onChange={e => setText(e.target.value)}
                      placeholder="Write your text in English here..."
                      className="min-h-[200px]"
                      maxLength={3000}
                      disabled={loading}
                    />
                    <p className="text-xs text-muted-foreground mt-1 text-right">{text.length}/3000</p>
                  </div>

                  <Button
                    onClick={submit}
                    disabled={loading || text.trim().length < 20 || limitReached}
                    className="w-full"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin mr-2" /> {t("btn.analysing", uiLang)}</>
                    ) : (
                      <><Wand2 className="w-4 h-4 mr-2" /> {t("btn.analyse", uiLang)}</>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {loading && (
                <AIToolLoadingSkeleton
                  headline="Analyzing your English..."
                  steps={[
                    "Checking grammar...",
                    "Improving tone...",
                    "Making it natural...",
                  ]}
                />
              )}
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold">📊 {t("feedback.title", uiLang)}</h2>
                <Badge className="text-lg px-4 py-1">{feedback.overallLevel}</Badge>
              </div>

              <div className="grid gap-4">
                <ScoreBar label="Task Achievement" score={feedback.taskAchievement.score} comment={feedback.taskAchievement.comment} />
                <ScoreBar label="Clarity" score={feedback.clarity.score} comment={feedback.clarity.comment} />
                <ScoreBar label="Coherence" score={feedback.coherence.score} comment={feedback.coherence.comment} />
                <ScoreBar label="Grammar" score={feedback.grammar.score} comment={feedback.grammar.comment} />
                <ScoreBar label="Vocabulary" score={feedback.vocabulary.score} comment={feedback.vocabulary.comment} />
              </div>

              <Card className="p-4">
                <p className="text-sm font-medium text-muted-foreground mb-1">Style</p>
                <RatingBadge label="Style" rating={feedback.style.rating} comment={feedback.style.comment} />
              </Card>

              <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} />
              <CorrectionsList corrections={feedback.corrections} />
              <VocabUpgrades items={feedback.advancedVocabulary} />
              <SuggestionsList suggestions={feedback.suggestions} />

              {/* Improved version */}
              <Card className="border-primary/20">
                <CardHeader className="cursor-pointer" onClick={() => setShowImproved(!showImproved)}>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" /> {t("feedback.improved_version", uiLang)}
                    </span>
                    {showImproved ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </CardTitle>
                </CardHeader>
                {showImproved && (
                  <CardContent className="space-y-3">
                    <p className="text-sm whitespace-pre-wrap bg-primary/5 p-4 rounded-lg">{feedback.improvedVersion}</p>
                    <SupportActions text={feedback.improvedVersion} />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={copyImproved}
                      className="w-full sm:w-auto"
                    >
                      {copied ? (
                        <><Check className="w-4 h-4 mr-2" /> Copied!</>
                      ) : (
                        <><Copy className="w-4 h-4 mr-2" /> Copy improved version</>
                      )}
                    </Button>
                  </CardContent>
                )}
              </Card>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="font-semibold mb-1">{t("feedback.overall", uiLang)}</p>
                <p className="text-sm">{feedback.overall}</p>
              </Card>

              {/* Result utility bar (copy / download / share) */}
              {feedback.improvedVersion && (
                <ResultUtilityBar
                  text={feedback.improvedVersion}
                  tool="writing"
                  page="writing-coach"
                  fileName="ai-writing-improved"
                  copyLabel="Copy Improved Text"
                />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button onClick={tryAgain} variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" /> Try again
                </Button>
                <Button onClick={reset} className="w-full">
                  <RotateCcw className="w-4 h-4 mr-2" /> {t("btn.new_session", uiLang)}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile floating submit (hidden once feedback is shown) */}
        {!feedback && (
          <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
            <Button
              onClick={submit}
              disabled={loading || text.trim().length < 20 || limitReached}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" /> {t("btn.analysing", uiLang)}</>
              ) : (
                <><Wand2 className="w-4 h-4 mr-2" /> {t("btn.analyse", uiLang)}</>
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default AIWritingCoach;
