import { useState } from "react";
import type { FeedbackLang } from "@/components/ai-trainer/FeedbackLanguageToggle";

const VALID_LANGS: FeedbackLang[] = ["en","fr","es","de","it","pt","ru","ar","pl","uk","zh","ja"];

/** Persists feedback language preference across sessions */
export function useFeedbackLanguage(): [FeedbackLang, (lang: FeedbackLang) => void] {
  const [lang, setLangState] = useState<FeedbackLang>(() => {
    try {
      const stored = localStorage.getItem("feedbackLanguage");
      if (stored && VALID_LANGS.includes(stored as FeedbackLang)) return stored as FeedbackLang;
    } catch {}
    const browserLang = (navigator.language || "").toLowerCase().slice(0, 2);
    if (VALID_LANGS.includes(browserLang as FeedbackLang)) return browserLang as FeedbackLang;
    return "en";
  });

  const setLang = (l: FeedbackLang) => {
    setLangState(l);
    try { localStorage.setItem("feedbackLanguage", l); } catch {}
  };

  return [lang, setLang];
}
