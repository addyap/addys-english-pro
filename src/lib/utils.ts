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

const FRENCH_MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

export function getCurrentMonthYearFR(): string {
  const now = new Date();
  return `${FRENCH_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}
