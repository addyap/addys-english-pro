// Lightweight per-tool session memory + global usage counter (localStorage).
// Spec-compliant facade — used alongside the existing useSessionHistory hook.

export interface StoredSession {
  id: string;
  input: string;
  outputSummary: string;
  timestamp: number;
}

const MAX = 5;
const sessionsKey = (tool: string) => `ai_sessions_${tool}`;
const USAGE_KEY = "ai_usage_counter";

function safeRead<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode — ignore */
  }
}

export function saveSession(tool: string, input: string, outputSummary: string): void {
  const list = getRecentSessions(tool);
  const next: StoredSession[] = [
    {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      input: input.slice(0, 1000),
      outputSummary: outputSummary.slice(0, 500),
      timestamp: Date.now(),
    },
    ...list,
  ].slice(0, MAX);
  safeWrite(sessionsKey(tool), next);
}

export function getRecentSessions(tool: string): StoredSession[] {
  const v = safeRead<StoredSession[]>(sessionsKey(tool), []);
  return Array.isArray(v) ? v.slice(0, MAX) : [];
}

export function clearSessions(tool: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(sessionsKey(tool));
  } catch {
    /* ignore */
  }
}

// ----- Usage counter (Feature 5) -----

interface UsageCounter {
  total: number;
  daily: number;
  day: string; // YYYY-MM-DD
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getUsageCounter(): { total: number; daily: number } {
  const c = safeRead<UsageCounter>(USAGE_KEY, { total: 0, daily: 0, day: todayKey() });
  if (c.day !== todayKey()) {
    return { total: c.total, daily: 0 };
  }
  return { total: c.total, daily: c.daily };
}

export function incrementUsageCounter(): { total: number; daily: number } {
  const current = safeRead<UsageCounter>(USAGE_KEY, { total: 0, daily: 0, day: todayKey() });
  const today = todayKey();
  const next: UsageCounter =
    current.day === today
      ? { total: current.total + 1, daily: current.daily + 1, day: today }
      : { total: current.total + 1, daily: 1, day: today };
  safeWrite(USAGE_KEY, next);
  return { total: next.total, daily: next.daily };
}
