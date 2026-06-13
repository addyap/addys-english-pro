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
  // IMPORTANT: init with "fr" on BOTH server (SSG) and client so the first
  // client render matches the prerendered HTML and React can hydrate cleanly.
  // The user's stored preference is applied AFTER hydration (below) to avoid
  // React hydration errors #418/#425 (text content / UI mismatch).
  i18n.use(initReactI18next).init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: "fr",
    lng: "fr",
    supportedLngs: SUPPORTED_LANG_CODES,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  // Post-hydration language switch: read stored preference and change
  // language asynchronously so it never interferes with the initial render.
  if (isBrowser) {
    // Defer until after the current microtask/hydration pass
    Promise.resolve().then(() => {
      try {
        const stored = window.localStorage.getItem("interfaceLanguage");
        if (stored && SUPPORTED_LANG_CODES.includes(stored) && stored !== i18n.language) {
          // Wait one frame to let React commit the hydrated tree first
          requestAnimationFrame(() => {
            i18n.changeLanguage(stored).catch(() => undefined);
          });
        }
      } catch {
        /* localStorage unavailable; keep default */
      }
    });
  }
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
