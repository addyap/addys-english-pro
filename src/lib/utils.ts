import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2005;

const FRENCH_MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

export function getCurrentMonthYearFR(): string {
  const now = new Date();
  return `${FRENCH_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}
