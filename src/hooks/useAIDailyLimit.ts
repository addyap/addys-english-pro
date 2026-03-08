import { useCallback, useMemo } from "react";
import type { TrainerType } from "@/types/ai-trainers";

const DAILY_LIMIT = 10;
const STORAGE_KEY = "ai-trainer-sessions";

interface SessionEntry {
  trainer: TrainerType;
  timestamp: number;
}

function getEntries(): SessionEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SessionEntry[];
    // Prune entries older than 24 hours
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    return parsed.filter((e) => e.timestamp > cutoff);
  } catch {
    return [];
  }
}

function saveEntries(entries: SessionEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Hook to enforce a rolling 24-hour daily limit across all AI trainers.
 * Returns remaining count, whether the limit is reached, and a function to record a new session.
 */
export function useAIDailyLimit(trainer: TrainerType) {
  const entries = useMemo(() => getEntries(), []);

  const todayCount = useMemo(() => {
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    return entries.filter((e) => e.timestamp > cutoff).length;
  }, [entries]);

  const remaining = Math.max(0, DAILY_LIMIT - todayCount);
  const limitReached = remaining <= 0;

  const recordSession = useCallback(() => {
    const fresh = getEntries();
    fresh.push({ trainer, timestamp: Date.now() });
    saveEntries(fresh);
  }, [trainer]);

  return { remaining, limitReached, recordSession, DAILY_LIMIT };
}
