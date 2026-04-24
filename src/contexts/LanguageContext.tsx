import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import i18n, { SUPPORTED_LANG_CODES, type SupportedLangCode, getLangMeta } from "@/i18n";

interface LanguageContextValue {
  /** UI language (controls navigation, buttons, forms) */
  interfaceLang: SupportedLangCode;
  /** AI feedback / explanation language */
  feedbackLang: SupportedLangCode;
  setInterfaceLang: (lang: SupportedLangCode) => void;
  setFeedbackLang: (lang: SupportedLangCode) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const FEEDBACK_KEY = "feedbackLanguage";
const INTERFACE_KEY = "interfaceLanguage";

function detect(): SupportedLangCode {
  if (typeof navigator === "undefined") return "en";
  const browser = (navigator.language || "en").toLowerCase().slice(0, 2);
  return (SUPPORTED_LANG_CODES as readonly string[]).includes(browser)
    ? (browser as SupportedLangCode)
    : "en";
}

function readStored(key: string): SupportedLangCode | null {
  try {
    const v = localStorage.getItem(key);
    if (v && (SUPPORTED_LANG_CODES as readonly string[]).includes(v)) {
      return v as SupportedLangCode;
    }
  } catch {}
  return null;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [interfaceLang, setInterfaceLangState] = useState<SupportedLangCode>(
    () => readStored(INTERFACE_KEY) ?? detect()
  );
  const [feedbackLang, setFeedbackLangState] = useState<SupportedLangCode>(
    () => readStored(FEEDBACK_KEY) ?? readStored(INTERFACE_KEY) ?? detect()
  );

  // Sync with i18next on mount and when interface language changes
  useEffect(() => {
    if (i18n.language !== interfaceLang) {
      i18n.changeLanguage(interfaceLang);
    }
  }, [interfaceLang]);

  const setInterfaceLang = useCallback((lang: SupportedLangCode) => {
    setInterfaceLangState(lang);
    try { localStorage.setItem(INTERFACE_KEY, lang); } catch {}
  }, []);

  const setFeedbackLang = useCallback((lang: SupportedLangCode) => {
    setFeedbackLangState(lang);
    try { localStorage.setItem(FEEDBACK_KEY, lang); } catch {}
  }, []);

  const isRTL = getLangMeta(interfaceLang).dir === "rtl";

  return (
    <LanguageContext.Provider
      value={{ interfaceLang, feedbackLang, setInterfaceLang, setFeedbackLang, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
