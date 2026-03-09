import { useState } from "react";
import type { FeedbackLang } from "@/components/ai-trainer/FeedbackLanguageToggle";

/** Persists feedback language preference across sessions */
export function useFeedbackLanguage(): [FeedbackLang, (lang: FeedbackLang) => void] {
  const [lang, setLangState] = useState<FeedbackLang>(() => {
    try {
      const stored = localStorage.getItem("feedbackLanguage");
      if (stored === "en" || stored === "fr") return stored;
    } catch {}
    // Auto-detect from browser language
    const browserLang = (navigator.language || "").toLowerCase();
    return browserLang.startsWith("fr") ? "fr" : "en";
  });

  const setLang = (l: FeedbackLang) => {
    setLangState(l);
    try { localStorage.setItem("feedbackLanguage", l); } catch {}
  };

  return [lang, setLang];
}
