/**
 * Fisher-Yates shuffle algorithm for randomizing array order.
 * Creates a new shuffled array without mutating the original.
 * Uses a seed-based approach for consistent shuffling per question during a session.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffles options for a question while preserving the mapping to the correct answer.
 * Use this when you need to shuffle options but maintain answer validation.
 */
export function shuffleOptions(options: string[]): string[] {
  return shuffleArray(options);
}

/**
 * Creates a seeded shuffle that will produce the same results for the same seed.
 * Useful for consistent shuffling during a user session.
 */
export function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;
  
  // Simple seeded random function
  const seededRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Hook-friendly version that memoizes shuffled options per question ID
 */
export function useShuffledOptions(options: string[], questionId: number | string): string[] {
  // Create a seed from the question ID for consistent per-question shuffling
  const seed = typeof questionId === 'string' 
    ? questionId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    : questionId;
  
  return seededShuffle(options, seed + Date.now() % 10000);
}
