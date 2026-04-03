/**
 * Centralized SSE streaming utility for all AI trainer chat functions.
 * Eliminates duplicated streaming logic across pages.
 */

export interface StreamChatOptions {
  /** Full edge function URL */
  url: string;
  /** Request body (messages, scenario, mode, etc.) */
  body: Record<string, unknown>;
  /** Called with each new token chunk */
  onDelta: (text: string) => void;
  /** Called when stream completes */
  onDone: () => void;
  /** Called on error with user-friendly message */
  onError: (error: StreamError) => void;
  /** AbortSignal for cancellation */
  signal?: AbortSignal;
}

export interface StreamError {
  status: number;
  message: string;
  type: "rate_limit" | "credits_exhausted" | "network" | "server" | "unknown";
}

function classifyError(status: number): StreamError["type"] {
  if (status === 429) return "rate_limit";
  if (status === 402) return "credits_exhausted";
  if (status >= 500) return "server";
  return "unknown";
}

/**
 * Stream a chat response from an edge function.
 * Handles SSE parsing, CRLF, partial JSON, and [DONE] signals.
 */
export async function streamChat({
  url,
  body,
  onDelta,
  onDone,
  onError,
  signal,
}: StreamChatOptions): Promise<void> {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify(body),
      signal,
    });

    if (!resp.ok || !resp.body) {
      const errorType = classifyError(resp.status);
      onError({
        status: resp.status,
        message: getErrorMessage(errorType),
        type: errorType,
      });
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, newlineIndex);
        buffer = buffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          // Incomplete JSON split across chunks — put back and wait
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }

    // Final flush for any remaining buffered lines
    if (buffer.trim()) {
      for (let raw of buffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          /* ignore partial leftovers */
        }
      }
    }

    onDone();
  } catch (e: unknown) {
    if (e instanceof DOMException && e.name === "AbortError") {
      onDone();
      return;
    }
    onError({
      status: 0,
      message: getErrorMessage("network"),
      type: "network",
    });
  }
}

function getErrorMessage(type: StreamError["type"]): string {
  switch (type) {
    case "rate_limit":
      return "Too many requests. Please wait a moment and try again.";
    case "credits_exhausted":
      return "AI credits exhausted. Please try again later.";
    case "network":
      return "Connection error. Please check your internet and try again.";
    case "server":
      return "Server error. Please try again.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}

/**
 * Invoke an edge function (non-streaming) and return parsed JSON.
 * Handles error classification consistently.
 */
export async function invokeAI<T = unknown>(
  url: string,
  body: Record<string, unknown>,
): Promise<{ data: T | null; error: StreamError | null }> {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const errorType = classifyError(resp.status);
      return {
        data: null,
        error: {
          status: resp.status,
          message: getErrorMessage(errorType),
          type: errorType,
        },
      };
    }

    const data = (await resp.json()) as T;
    return { data, error: null };
  } catch {
    return {
      data: null,
      error: {
        status: 0,
        message: getErrorMessage("network"),
        type: "network",
      },
    };
  }
}
