/**
 * Professional training contexts for AI conversation simulators.
 *
 * These are passed to the `business-chat` edge function as `professionalContext`
 * to bias the system prompt towards a specific French vocational track
 * (BTS / formations professionnelles). The chat architecture, hooks, scrolling,
 * microphone and TTS behaviour are completely unchanged — only the system
 * prompt is enriched server-side.
 */

import type { LucideIcon } from "lucide-react";
import { Briefcase, Gem, Phone, Stethoscope } from "lucide-react";

export type ProfessionalContextId = "ACOM" | "VPL" | "AD" | "MEDICAL";

export interface ProfessionalContextDef {
  id: ProfessionalContextId;
  label: string;
  shortLabel: string;
  description: string;
  /** Default session objective shown at the top of the chat. */
  objective: string;
  icon: LucideIcon;
  /** Tailwind utility classes for the badge / card accent. */
  color: string;
}

export const PROFESSIONAL_CONTEXTS: ProfessionalContextDef[] = [
  {
    id: "ACOM",
    label: "ACOM — Trade Fair / Business",
    shortLabel: "ACOM",
    description: "Salons internationaux, prospection B2B, négociation commerciale.",
    objective: "Welcome a trade-fair visitor, qualify their needs and pitch your range.",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-400 dark:border-blue-800",
  },
  {
    id: "VPL",
    label: "VPL — Luxury Sales",
    shortLabel: "VPL",
    description: "Vente conseil en boutique de luxe, accueil clientèle haut de gamme.",
    objective: "Welcome a luxury client, build rapport and guide them to a purchase.",
    icon: Gem,
    color: "bg-amber-500/10 text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-800",
  },
  {
    id: "AD",
    label: "AD — Assistant de Direction",
    shortLabel: "AD",
    description: "Communication téléphonique professionnelle, prise de message, agenda.",
    objective: "Handle a professional phone call: take a message, schedule, confirm in writing.",
    icon: Phone,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200 dark:text-emerald-400 dark:border-emerald-800",
  },
  {
    id: "MEDICAL",
    label: "MEDICAL — Secrétaire Médicale",
    shortLabel: "MEDICAL",
    description: "Accueil patient, prise de rendez-vous, écoute et réassurance.",
    objective: "Register a patient and book an appointment while reassuring them.",
    icon: Stethoscope,
    color: "bg-rose-500/10 text-rose-700 border-rose-200 dark:text-rose-400 dark:border-rose-800",
  },
];

export function getProfessionalContext(id?: string | null): ProfessionalContextDef | null {
  if (!id) return null;
  return PROFESSIONAL_CONTEXTS.find((c) => c.id === id) ?? null;
}
