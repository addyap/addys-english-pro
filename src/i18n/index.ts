import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./locales/fr.json";

/**
 * i18next, pinned to French.
 *
 * This site is French-only in practice: every page body is hardcoded French and
 * only the header/footer strings in Layout.tsx go through `t()`. i18next is kept
 * for those, not because the site is translatable.
 *
 * ⚠️ What used to happen here was a live bug, not just dead weight. A
 * LanguageContext read `navigator.language` after hydration and called
 * `changeLanguage("en")` for any visitor whose browser was not French — while
 * every page body stayed French. English-speaking visitors therefore got an
 * English navigation and footer bolted onto French content, with no way to
 * change it back: the LanguageSwitcher that was supposed to control this was
 * never rendered anywhere in the app, so `interfaceLanguage` was never written
 * and the detection was the only thing driving the switch.
 *
 * Both the switcher and the context have been deleted, `en.json` with them, and
 * the language is now fixed. To make the site genuinely bilingual later you need
 * translated page content first — at which point restore a switcher, re-add the
 * locale file, and give each language its own URL (/en/...) with hreflang, which
 * is what search engines need and what localStorage-based switching never gave.
 */
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      fr: { translation: fr },
    },
    fallbackLng: "fr",
    lng: "fr",
    supportedLngs: ["fr"],
    load: "languageOnly",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
