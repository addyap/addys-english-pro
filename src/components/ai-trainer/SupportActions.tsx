import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages, BookOpen, Sparkles, Loader2 } from "lucide-react";
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
  const [error, setError] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [vocab, setVocab] = useState<VocabItem[] | null>(null);

  const isRTL = getLangMeta(feedbackLang).dir === "rtl";

  if (!text || !text.trim()) return null;

  const run = async (action: Action) => {
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
      if (action === "translate") setTranslation(data.result || "");
      else if (action === "explain") setExplanation(data.result || "");
      else setVocab(Array.isArray(data.items) ? data.items : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed");
    } finally {
      setLoading(null);
    }
  };

  const dirAttr = isRTL ? { dir: "rtl" as const } : {};

  return (
    <div className={`mt-2 space-y-2 ${className}`}>
      <div className="flex flex-wrap gap-1.5">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("translate")}
          disabled={loading !== null}
          aria-label={t("ai.translateAnswer")}
          title={t("ai.translateAnswer")}
          className="h-8 px-2.5 text-xs"
        >
          {loading === "translate" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" /> : <Languages className="h-3.5 w-3.5 mr-1" />}
          {t("ai.translateShort", "Translate")}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("explain")}
          disabled={loading !== null}
          aria-label={t("ai.explainInMyLanguage")}
          title={t("ai.explainInMyLanguage")}
          className="h-8 px-2.5 text-xs"
        >
          {loading === "explain" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" /> : <Sparkles className="h-3.5 w-3.5 mr-1" />}
          {t("ai.explainShort", "Explain")}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => run("vocabulary")}
          disabled={loading !== null}
          aria-label={t("ai.showVocab")}
          title={t("ai.showVocab")}
          className="h-8 px-2.5 text-xs"
        >
          {loading === "vocabulary" ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" /> : <BookOpen className="h-3.5 w-3.5 mr-1" />}
          {t("ai.vocabShort", "Vocabulary")}
        </Button>
      </div>
      {!translation && !explanation && !vocab && !error && (
        <p className="text-[11px] text-muted-foreground leading-snug">
          {t("ai.supportHelp", "Need help? Translate, explain, or study vocabulary in your support language.")}
        </p>
      )}

      {error && (
        <div className="text-xs text-destructive bg-destructive/10 rounded p-2" role="alert">
          {t("ai.supportError", "Something went wrong. Please try again.")}
        </div>
      )}

      {translation && (
        <div className="text-sm bg-muted/50 border border-border rounded p-3" {...dirAttr}>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
            {t("ai.translateAnswer")}
          </div>
          <div className="whitespace-pre-wrap">{translation}</div>
        </div>
      )}

      {explanation && (
        <div className="text-sm bg-muted/50 border border-border rounded p-3" {...dirAttr}>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
            {t("ai.explainInMyLanguage")}
          </div>
          <div className="whitespace-pre-wrap">{explanation}</div>
        </div>
      )}

      {vocab && vocab.length > 0 && (
        <div className="text-sm bg-muted/50 border border-border rounded p-3">
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
            {t("ai.showVocab")}
          </div>
          <ul className="space-y-2">
            {vocab.map((it, i) => (
              <li key={i} className="border-b border-border/50 last:border-0 pb-2 last:pb-0">
                <div className="font-semibold">{it.term}</div>
                <div className="text-muted-foreground" {...dirAttr}>{it.meaning}</div>
                {it.example && <div className="text-xs italic mt-1">“{it.example}”</div>}
              </li>
            ))}
          </ul>
        </div>
      )}
      {vocab && vocab.length === 0 && (
        <div className="text-xs text-muted-foreground">—</div>
      )}
    </div>
  );
}

export default SupportActions;
