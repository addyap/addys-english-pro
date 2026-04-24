/**
 * Builds keyword-rich, structured titles for exercise pages.
 *
 * Format: "[Category] English Exercise — [Topic] ([Level])"
 * Examples:
 *   - "Business English Exercise — Writing Professional Emails (B2)"
 *   - "General English Exercise — Talking About Past Experiences (B1)"
 *   - "IELTS Speaking Practice — Describing a Situation (B2-C1)"
 *
 * Falls back gracefully when category/level are unavailable so we never ship
 * a broken title.
 */
export interface ExerciseTitleParts {
  /** e.g. "Business English Exercise", "Grammar Exercise". Defaults to "English Exercise". */
  categoryLabel?: string;
  /** Topic / exercise focus, e.g. "Writing Professional Emails". Required. */
  topic: string;
  /** CEFR or difficulty marker, e.g. "B2", "B1-B2", "Easy". */
  level?: string;
}

/** Builds the H1 / page title. */
export function buildExerciseTitle({
  categoryLabel = "English Exercise",
  topic,
  level,
}: ExerciseTitleParts): string {
  const head = categoryLabel.trim();
  const body = topic.trim();
  const tail = level ? ` (${level.trim()})` : "";
  if (!body) return head;
  return `${head} — ${body}${tail}`;
}

/** Builds the <title> tag. Adds the brand suffix once. */
export function buildExerciseMetaTitle(parts: ExerciseTitleParts): string {
  return `${buildExerciseTitle(parts)} | Antony Addy`;
}
