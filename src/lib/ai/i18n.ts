/**
 * Centralized UI strings for AI trainers.
 * All user-visible text goes here for easy i18n expansion.
 */

export type UILang = "en" | "fr";

const strings = {
  // ── Common ──
  "sessions.remaining": {
    en: (n: number, max: number) => `${n}/${max} sessions remaining`,
    fr: (n: number, max: number) => `${n}/${max} sessions restantes`,
  },
  "daily.limit.reached": {
    en: (max: number) => `Daily limit reached (${max} sessions per 24h). Please come back tomorrow!`,
    fr: (max: number) => `Limite quotidienne atteinte (${max} sessions / 24h). Revenez demain !`,
  },
  "error.rate_limit": {
    en: "Too many requests. Please wait a moment and try again.",
    fr: "Trop de requêtes. Réessayez dans un instant.",
  },
  "error.credits_exhausted": {
    en: "AI credits exhausted. Please try again later.",
    fr: "Crédits IA épuisés.",
  },
  "error.connection": {
    en: "Connection error. Please try again.",
    fr: "Erreur de connexion. Réessayez.",
  },
  "error.feedback": {
    en: "Could not generate feedback. Please try again.",
    fr: "Erreur lors de la génération du feedback.",
  },
  "error.min_messages": {
    en: (n: number) => `Send at least ${n} messages before requesting feedback.`,
    fr: (n: number) => `Envoyez au moins ${n} messages avant de demander le feedback.`,
  },
  "error.min_chars": {
    en: (n: number) => `Write at least ${n} characters.`,
    fr: (n: number) => `Écrivez au moins ${n} caractères.`,
  },

  // ── Chat UI ──
  "chat.placeholder.typing": {
    en: "Type your reply in English…",
    fr: "Écrivez votre réponse en anglais…",
  },
  "chat.placeholder.listening": {
    en: "Listening…",
    fr: "Écoute en cours…",
  },
  "chat.placeholder.disabled": {
    en: "Please wait…",
    fr: "Veuillez patienter…",
  },
  "chat.mic.active": {
    en: "🎙️ Microphone active — speak in English…",
    fr: "🎙️ Microphone actif — parlez en anglais…",
  },

  // ── Buttons ──
  "btn.back": { en: "Back", fr: "Retour" },
  "btn.feedback": { en: "Feedback", fr: "Feedback" },
  "btn.new_session": { en: "New session", fr: "Nouvelle session" },
  "btn.retry": { en: "Retry", fr: "Réessayer" },
  "btn.retry_scenario": { en: "Retry Scenario", fr: "Réessayer ce scénario" },
  "btn.new_scenario": { en: "New Scenario", fr: "Nouveau scénario" },
  "btn.change_mode": { en: "Change Mode", fr: "Changer de mode" },
  "btn.end_feedback": { en: "End & Get Feedback", fr: "Terminer et obtenir le feedback" },
  "btn.listen": { en: "Listen", fr: "Écouter" },
  "btn.submit": { en: "Submit", fr: "Soumettre" },
  "btn.analyse": { en: "Analyse my text", fr: "Analyser mon texte" },
  "btn.analysing": { en: "Analysing…", fr: "Analyse en cours…" },

  // ── Feedback labels ──
  "feedback.title": { en: "Your Feedback", fr: "Votre feedback" },
  "feedback.overall": { en: "Overall", fr: "Résumé global" },
  "feedback.strengths": { en: "Strengths", fr: "Points forts" },
  "feedback.improvements": { en: "Needs Improvement", fr: "À améliorer" },
  "feedback.corrections": { en: "Corrections", fr: "Corrections" },
  "feedback.suggestions": { en: "Suggestions", fr: "Suggestions" },
  "feedback.vocab_upgrades": { en: "Vocabulary Upgrades", fr: "Améliorations de vocabulaire" },
  "feedback.generating": { en: "Generating feedback…", fr: "Génération du feedback…" },
  "feedback.improved_version": { en: "Improved Version", fr: "Version améliorée" },

  // ── Modes ──
  "mode.practice": { en: "Practice", fr: "Pratique" },
  "mode.challenge": { en: "Challenge", fr: "Défi" },
  "mode.exam": { en: "Exam", fr: "Examen" },

  // ── Exam ──
  "exam.question_progress": {
    en: (n: number, max: number) => `Question ${n}/${max}`,
    fr: (n: number, max: number) => `Question ${n}/${max}`,
  },
  "exam.complete": { en: "Exam complete.", fr: "Examen terminé." },
  "exam.assessing": { en: "Assessing your answers…", fr: "Évaluation de vos réponses…" },

  // ── Steps ──
  "step.choose_scenario": { en: "Choose a scenario", fr: "Choisissez un scénario" },
  "step.choose_mode": { en: "Choose Your Mode", fr: "Choisissez votre mode" },

  // ── Turns ──
  "turns.hint": {
    en: (n: number) => `Continue the conversation (${n} more turn${n !== 1 ? "s" : ""} needed for feedback)`,
    fr: (n: number) => `Continuez la conversation (${n} tour${n !== 1 ? "s" : ""} de plus pour le feedback)`,
  },
  "turns.count": {
    en: (n: number) => `${n} turn${n !== 1 ? "s" : ""}`,
    fr: (n: number) => `${n} tour${n !== 1 ? "s" : ""}`,
  },

  // ── Writing types ──
  "writing.type_label": { en: "Text type", fr: "Type de texte" },
  "writing.input_label": { en: "Your text in English", fr: "Votre texte en anglais" },

  // ── Speaking ──
  "speaking.title": { en: "AI Speaking Practice", fr: "AI Speaking Practice" },
  "speaking.desc": {
    en: "Speak English with an AI partner. Use your microphone to practise speaking and get feedback on pronunciation, fluency and vocabulary.",
    fr: "Parlez en anglais avec un partenaire IA. Utilisez votre micro pour pratiquer l'oral et recevez un feedback sur la prononciation, la fluidité et le vocabulaire.",
  },
} as const;

type StringKey = keyof typeof strings;

/**
 * Get a localized string. If the value is a function, pass args.
 */
export function t(key: StringKey, lang: UILang, ...args: unknown[]): string {
  const entry = strings[key];
  if (!entry) return key;
  const val = entry[lang] ?? entry["en"];
  if (typeof val === "function") {
    return (val as (...a: unknown[]) => string)(...args);
  }
  return val as string;
}
