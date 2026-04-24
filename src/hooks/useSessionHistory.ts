import { useCallback, useEffect, useState } from "react";

export interface SessionHistoryItem {
  id: string;
  input: string;
  result: string;
  timestamp: number;
}

const MAX_ITEMS = 5;

function read(key: string): SessionHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : [];
  } catch {
    return [];
  }
}

/**
 * Lightweight per-tool session history stored in localStorage.
 * Keeps only the last 5 sessions.
 */
export function useSessionHistory(toolKey: string) {
  const storageKey = `ai-history:${toolKey}`;
  const [items, setItems] = useState<SessionHistoryItem[]>(() => read(storageKey));

  useEffect(() => {
    setItems(read(storageKey));
  }, [storageKey]);

  const addItem = useCallback(
    (input: string, result: string) => {
      const next: SessionHistoryItem[] = [
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          input: input.slice(0, 1000),
          result: result.slice(0, 5000),
          timestamp: Date.now(),
        },
        ...items,
      ].slice(0, MAX_ITEMS);
      setItems(next);
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore quota errors */
      }
    },
    [items, storageKey]
  );

  const clear = useCallback(() => {
    setItems([]);
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  return { items, addItem, clear };
}

export function formatRelativeTime(ts: number, lang: "en" | "fr" = "en"): string {
  const diffSec = Math.max(1, Math.round((Date.now() - ts) / 1000));
  const en = lang === "en";
  if (diffSec < 60) return en ? "just now" : "à l'instant";
  const min = Math.round(diffSec / 60);
  if (min < 60) return en ? `${min} min ago` : `il y a ${min} min`;
  const hr = Math.round(min / 60);
  if (hr < 24) return en ? `${hr} hour${hr > 1 ? "s" : ""} ago` : `il y a ${hr} h`;
  const d = Math.round(hr / 24);
  return en ? `${d} day${d > 1 ? "s" : ""} ago` : `il y a ${d} j`;
}
