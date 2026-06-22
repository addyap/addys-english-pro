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
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(key);
    if (v && (SUPPORTED_LANG_CODES as readonly string[]).includes(v)) {
      return v as SupportedLangCode;
    }
  } catch { /* ignore */ }
  return null;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // IMPORTANT: initial state MUST match the SSG-prerendered HTML (which is
  // always "fr") or React hydration fails (#418/#425). Read the stored/
  // detected preference AFTER hydration in a useEffect.
  const [interfaceLang, setInterfaceLangState] = useState<SupportedLangCode>("fr");
  const [feedbackLang, setFeedbackLangState] = useState<SupportedLangCode>("fr");

  // After hydration: apply the user's stored or detected preference.
  useEffect(() => {
    const storedInterface = readStored(INTERFACE_KEY) ?? detect();
    if (storedInterface !== interfaceLang) setInterfaceLangState(storedInterface);
    const storedFeedback = readStored(FEEDBACK_KEY) ?? storedInterface;
    if (storedFeedback !== feedbackLang) setFeedbackLangState(storedFeedback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync with i18next when interface language changes
  useEffect(() => {
    if (i18n.language !== interfaceLang) {
      i18n.changeLanguage(interfaceLang);
    }
  }, [interfaceLang]);

  const setInterfaceLang = useCallback((lang: SupportedLangCode) => {
    setInterfaceLangState(lang);
    if (typeof window !== "undefined") {
      try { window.localStorage.setItem(INTERFACE_KEY, lang); } catch { /* ignore */ }
    }
  }, []);

  const setFeedbackLang = useCallback((lang: SupportedLangCode) => {
    setFeedbackLangState(lang);
    if (typeof window !== "undefined") {
      try { window.localStorage.setItem(FEEDBACK_KEY, lang); } catch { /* ignore */ }
    }
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
