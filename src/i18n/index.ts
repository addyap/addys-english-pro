import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const SUPPORTED_LANGS: Array<{ code: string; label: string; flag: string; dir: "ltr" | "rtl"; nativeName: string }> = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr", nativeName: "Français" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr", nativeName: "English" },
];

export const SUPPORTED_LANG_CODES = SUPPORTED_LANGS.map((l) => l.code);

export type SupportedLangCode = (typeof SUPPORTED_LANGS)[number]["code"];

export function getLangMeta(code: string) {
  return SUPPORTED_LANGS.find((l) => l.code === code) ?? SUPPORTED_LANGS[0];
}

const isBrowser = typeof window !== "undefined";

if (!i18n.isInitialized) {
  const chain = isBrowser
    ? i18n.use(LanguageDetector).use(initReactI18next)
    : i18n.use(initReactI18next);

  chain.init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: "fr",
    lng: isBrowser ? undefined : "fr",
    supportedLngs: SUPPORTED_LANG_CODES,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: isBrowser
      ? {
          order: ["localStorage", "navigator", "htmlTag"],
          lookupLocalStorage: "interfaceLanguage",
          caches: ["localStorage"],
        }
      : undefined,
    react: { useSuspense: false },
  });
}

if (typeof document !== "undefined") {
  const apply = (lng: string) => {
    const meta = getLangMeta(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = meta.dir;
  };
  apply(i18n.language || "fr");
  i18n.on("languageChanged", apply);
}

export default i18n;
