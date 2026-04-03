/**
 * Reusable session management hook for AI trainers.
 * Handles session ID generation, persistence to database, and lifecycle.
 */
import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SessionData {
  sessionId: string;
  startedAt: string;
  saved: boolean;
}

export interface UseSessionManagerOptions {
  /** Supabase table name */
  table: string;
}

export function useSessionManager({ table }: UseSessionManagerOptions) {
  const [session, setSession] = useState<SessionData>(() => ({
    sessionId: crypto.randomUUID(),
    startedAt: new Date().toISOString(),
    saved: false,
  }));
  const savingRef = useRef(false);

  /** Start a fresh session */
  const newSession = useCallback(() => {
    setSession({
      sessionId: crypto.randomUUID(),
      startedAt: new Date().toISOString(),
      saved: false,
    });
  }, []);

  /** Save session data to the database (idempotent — only saves once) */
  const saveSession = useCallback(
    async (data: Record<string, unknown>) => {
      if (session.saved || savingRef.current) return;
      savingRef.current = true;

      try {
        const { error } = await supabase.from(table as any).insert({
          session_id: session.sessionId,
          started_at: session.startedAt,
          completed_at: new Date().toISOString(),
          ...data,
        } as any);

        if (!error) {
          setSession((prev) => ({ ...prev, saved: true }));
        } else {
          console.warn(`[session] DB insert to ${table} failed:`, error.message);
        }
      } catch (e) {
        console.warn(`[session] Save exception:`, e);
      } finally {
        savingRef.current = false;
      }
    },
    [session.sessionId, session.startedAt, session.saved, table],
  );

  return {
    sessionId: session.sessionId,
    startedAt: session.startedAt,
    sessionSaved: session.saved,
    newSession,
    saveSession,
  };
}
