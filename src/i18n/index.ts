import fr from "./locales/fr.json";

/**
 * UI-string lookup, pinned to French.
 *
 * This site is French-only: every page body is hardcoded French and only the
 * header/footer strings in Layout.tsx come from here. i18next + react-i18next
 * used to do this lookup — ~45 KB of JS on every page for one fixed locale — so
 * it is now a plain nested-key read of fr.json.
 *
 * History worth keeping: an earlier LanguageContext switched the header/footer
 * to English for non-French browsers while page bodies stayed French, with no
 * way back. To make the site genuinely bilingual, translate the page content
 * first, then give each language its own URL (/en/...) with hreflang.
 */
type Vars = Record<string, string | number>;

export function t(key: string, vars?: Vars): string {
  const value = key
    .split(".")
    .reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], fr);
  if (typeof value !== "string") return key;
  return vars ? value.replace(/\{\{(\w+)\}\}/g, (m, name) => String(vars[name] ?? m)) : value;
}
