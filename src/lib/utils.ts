import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2005;

// Rounded-down decade floor for "plus de X ans" marketing prose.
// Reads "plus de 20 ans" today and auto-advances to "plus de 30 ans" in 2035 —
// always true, never needs a manual bump.
export const EXPERIENCE_FLOOR = Math.floor(YEARS_OF_EXPERIENCE / 10) * 10;

/**
 * schema.org `priceRange` for the business, used by every page that emits a
 * LocalBusiness/ProfessionalService node.
 *
 * Single constant because the pages disagreed: Home and Testimonials said "$$"
 * while the city landing pages said "€€", which reads as two different
 * businesses to a crawler. Currency symbols are the convention Google documents,
 * and euros match the market being served.
 */
export const PRICE_RANGE = "€€";

const FRENCH_MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/**
 * Date the marketing content was last actually reviewed, as `YYYY-MM-DD`.
 *
 * Bump this by hand when you genuinely revise the pages. It feeds both the
 * visible "Dernière mise à jour" line and the `dateModified` in structured data,
 * so the two can no longer disagree.
 *
 * This replaced a `getCurrentMonthYearFR()` helper that printed the *current*
 * month on every render. The footer therefore claimed a fresh update every
 * single day, regardless of whether anything had changed — a freshness signal
 * Google treats as manipulative, and one that flatly contradicted the hardcoded
 * `dateModified` values sitting in the same pages' schema.
 */
export const CONTENT_LAST_REVIEWED = "2026-08-18";

/** `CONTENT_LAST_REVIEWED` as an ISO 8601 timestamp, for schema.org dateModified. */
export const CONTENT_LAST_REVIEWED_ISO = `${CONTENT_LAST_REVIEWED}T10:00:00+02:00`;

/** Format a `YYYY-MM-DD` date as "Août 2026" for display. */
export function formatMonthYearFR(isoDate: string = CONTENT_LAST_REVIEWED): string {
  const [year, month] = isoDate.split("-");
  return `${FRENCH_MONTHS[Number(month) - 1]} ${year}`;
}
