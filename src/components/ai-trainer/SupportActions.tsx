import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Languages, BookOpen, Sparkles, Loader2, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";
import { getLangMeta } from "@/i18n";

type Action = "translate" | "explain" | "vocabulary";

interface VocabItem {
  term: string;
  meaning: string;
  example: string;
}

interface SupportActionsProps {
  /** The English text to act on (the AI message or correction). */
  text: string;
  /** Optional context for the AI (e.g. preceding message). */
  context?: string;
  className?: string;
}

const FUNC_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/multilingual-support`;

export function SupportActions({ text, context, className = "" }: SupportActionsProps) {
  const { t } = useTranslation();
  const [feedbackLang] = useFeedbackLanguage();
  const [loading, setLoading] = useState<Action | null>(null);
  const [error, setError] = useState<{ action: Action; message: string } | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [vocab, setVocab] = useState<VocabItem[] | null>(null);

  const isRTL = getLangMeta(feedbackLang).dir === "rtl";

  const run = useCallback(async (action: Action) => {
    setLoading(action);
    setError(null);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ action, text, feedbackLanguage: feedbackLang, context }),
      });
      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${resp.status})`);
      }
      const data = await resp.json();
      // Replace (not append) — repeated clicks update the same panel
      if (action === "translate") setTranslation(data.result || "");
      else if (action === "explain") setExplanation(data.result || "");
      else setVocab(Array.isArray(data.items) ? data.items : []);
    } catch (e) {
      setError({ action, message: e instanceof Error ? e.message : "Action failed" });
    } finally {
      setLoading(null);
    }
  }, [text, context, feedbackLang]);

  if (!text || !text.trim()) return null;

  const dirAttr = isRTL ? { dir: "rtl" as const } : {};
  const textAlignClass = isRTL ? "text-right" : "text-left";

  const loadingLabel =
    loading === "translate" ? t("ai.translateShort", "Translate")
    : loading === "explain" ? t("ai.explainShort", "Explain")
    : loading === "vocabulary" ? t("ai.vocabShort", "Vocabulary")
    : "";

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const helpId = "support-actions-help";
  const showHelp = !translation && !explanation && !vocab && !error && !loading;

  return (
    <div className={`mt-2 space-y-2 ${className}`} dir={isRTL ? "rtl" : undefined}>
      <div
        role="group"
        aria-label={t("ai.supportActionsGroup", "Multilingual support actions")}
        className={`flex flex-wrap gap-1.5 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
      >
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("translate")}
          disabled={loading !== null}
          aria-label={t("ai.translateAnswer")}
          aria-busy={loading === "translate"}
          aria-describedby={showHelp ? helpId : undefined}
          title={t("ai.translateAnswer")}
          className={`h-8 px-2.5 text-xs ${focusRing}`}
        >
          {loading === "translate" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" aria-hidden="true" /> : <Languages className="h-3.5 w-3.5 mr-1" aria-hidden="true" />}
          {t("ai.translateShort", "Translate")}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("explain")}
          disabled={loading !== null}
          aria-label={t("ai.explainInMyLanguage")}
          aria-busy={loading === "explain"}
          aria-describedby={showHelp ? helpId : undefined}
          title={t("ai.explainInMyLanguage")}
          className={`h-8 px-2.5 text-xs ${focusRing}`}
        >
          {loading === "explain" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" aria-hidden="true" /> : <Sparkles className="h-3.5 w-3.5 mr-1" aria-hidden="true" />}
          {t("ai.explainShort", "Explain")}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("vocabulary")}
          disabled={loading !== null}
          aria-label={t("ai.showVocab")}
          aria-busy={loading === "vocabulary"}
          aria-describedby={showHelp ? helpId : undefined}
          title={t("ai.showVocab")}
          className={`h-8 px-2.5 text-xs ${focusRing}`}
        >
          {loading === "vocabulary" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" aria-hidden="true" /> : <BookOpen className="h-3.5 w-3.5 mr-1" aria-hidden="true" />}
          {t("ai.vocabShort", "Vocabulary")}
        </Button>
      </div>

      {showHelp && (
        <p id={helpId} className="text-[11px] text-muted-foreground leading-snug">
          {t("ai.supportHelp", "Need help? Translate, explain, or study vocabulary in your support language.")}
        </p>
      )}

      {/* Mobile-clear loading banner */}
      {loading && (
        <div
          className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 border border-border rounded p-2"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0" aria-hidden="true" />
          <span>{t("ai.loadingAction", "Working on")} <span className="font-medium">{loadingLabel}</span>…</span>
        </div>
      )}

      {error && (
        <div
          className="flex flex-wrap items-center gap-2 text-xs bg-destructive/10 text-destructive rounded p-2"
          role="alert"
          aria-atomic="true"
        >
          <span className="flex-1 min-w-0">{t("ai.supportError", "Something went wrong. Please try again.")}</span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => run(error.action)}
            className={`h-7 px-2 text-xs ${focusRing}`}
            aria-label={t("ai.tryAgain", "Try again")}
          >
            <RotateCw className="h-3 w-3 mr-1" aria-hidden="true" />
            {t("ai.tryAgain", "Try again")}
          </Button>
        </div>
      )}

      {translation && (
        <section
          className={`text-sm bg-muted/50 border border-border rounded p-3 ${textAlignClass}`}
          {...dirAttr}
          role="region"
          aria-live="polite"
          aria-label={t("ai.translateAnswer")}
        >
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
            {t("ai.translateAnswer")}
          </div>
          <div className="whitespace-pre-wrap">{translation}</div>
        </section>
      )}

      {explanation && (
        <section
          className={`text-sm bg-muted/50 border border-border rounded p-3 ${textAlignClass}`}
          {...dirAttr}
          role="region"
          aria-live="polite"
          aria-label={t("ai.explainInMyLanguage")}
        >
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
            {t("ai.explainInMyLanguage")}
          </div>
          <div className="whitespace-pre-wrap">{explanation}</div>
        </section>
      )}

      {vocab && vocab.length > 0 && (
        <section
          className="text-sm bg-muted/50 border border-border rounded p-3"
          role="region"
          aria-live="polite"
          aria-label={t("ai.showVocab")}
        >
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
            {t("ai.showVocab")}
          </div>
          <ul className="space-y-2" aria-label={t("ai.showVocab")}>
            {vocab.map((it, i) => (
              <li key={`${it.term}-${i}`} className="border-b border-border/50 last:border-0 pb-2 last:pb-0">
                <div className="font-semibold">{it.term}</div>
                <div className={`text-muted-foreground ${textAlignClass}`} {...dirAttr}>{it.meaning}</div>
                {it.example && <div className="text-xs italic mt-1">“{it.example}”</div>}
              </li>
            ))}
          </ul>
        </section>
      )}
      {vocab && vocab.length === 0 && (
        <div className="text-xs text-muted-foreground" role="status" aria-live="polite">
          {t("ai.noVocab", "No vocabulary items found.")}
        </div>
      )}
    </div>
  );
}

export default SupportActions;
