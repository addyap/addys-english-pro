import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ru from "./locales/ru.json";
import uk from "./locales/uk.json";
import ar from "./locales/ar.json";
import ro from "./locales/ro.json";
import it from "./locales/it.json";

export const SUPPORTED_LANGS = [
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" as const, nativeName: "English" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" as const, nativeName: "Français" },
  { code: "ru", label: "Русский", flag: "🇷🇺", dir: "ltr" as const, nativeName: "Русский" },
  { code: "uk", label: "Українська", flag: "🇺🇦", dir: "ltr" as const, nativeName: "Українська" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl" as const, nativeName: "العربية" },
  { code: "ro", label: "Română", flag: "🇷🇴", dir: "ltr" as const, nativeName: "Română" },
  { code: "it", label: "Italiano", flag: "🇮🇹", dir: "ltr" as const, nativeName: "Italiano" },
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
        en: { translation: en },
        fr: { translation: fr },
        ru: { translation: ru },
        uk: { translation: uk },
        ar: { translation: ar },
        ro: { translation: ro },
        it: { translation: it },
      },
      fallbackLng: "en",
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

// Apply dir attribute on language change
if (typeof document !== "undefined") {
  const apply = (lng: string) => {
    const meta = getLangMeta(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = meta.dir;
  };
  apply(i18n.language || "en");
  i18n.on("languageChanged", apply);
}

export default i18n;
