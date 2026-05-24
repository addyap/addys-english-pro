import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const SUPPORTED_LANGS = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" as const, nativeName: "Français" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" as const, nativeName: "English" },
];

export const SUPPORTED_LANG_CODES = SUPPORTED_LANGS.map((l) => l.code);

export type SupportedLangCode = (typeof SUPPORTED_LANGS)[number]["code"];

export function getLangMeta(code: string) {
  return SUPPORTED_LANGS.find((l) => l.code === code) ?? SUPPORTED_LANGS[0];
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        fr: { translation: fr },
        en: { translation: en },
      },
      fallbackLng: "fr",
      supportedLngs: SUPPORTED_LANG_CODES,
      load: "languageOnly",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        lookupLocalStorage: "interfaceLanguage",
        caches: ["localStorage"],
      },
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
