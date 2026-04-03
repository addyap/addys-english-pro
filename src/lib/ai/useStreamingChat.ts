/**
 * Reusable React hook for streaming AI chat conversations.
 * Encapsulates message state, streaming state, and the streaming call.
 */
import { useState, useCallback, useRef } from "react";
import { streamChat, type StreamError } from "./streamChat";
import { toast } from "sonner";

export type Msg = { role: "user" | "assistant"; content: string };

export interface UseStreamingChatOptions {
  /** Full edge function URL */
  url: string;
  /** Extra body fields merged into every request */
  extraBody?: Record<string, unknown>;
}

export function useStreamingChat({ url, extraBody = {} }: UseStreamingChatOptions) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  /** Reset messages to empty */
  const resetMessages = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setIsStreaming(false);
  }, []);

  /** Stream a response from the AI given a set of messages to send */
  const stream = useCallback(
    async (
      outgoingMessages: Msg[],
      overrideBody?: Record<string, unknown>,
    ) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      // Set all outgoing messages first so UI reflects the user message immediately
      setMessages(outgoingMessages);
      setIsStreaming(true);
      let assistantSoFar = "";

      await streamChat({
        url,
        body: { messages: outgoingMessages, ...extraBody, ...overrideBody },
        signal: controller.signal,
        onDelta: (chunk) => {
          assistantSoFar += chunk;
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.role === "assistant") {
              return prev.map((m, i) =>
                i === prev.length - 1 ? { ...m, content: assistantSoFar } : m,
              );
            }
            return [...prev, { role: "assistant", content: assistantSoFar }];
          });
        },
        onDone: () => {
          setIsStreaming(false);
          if (abortRef.current === controller) abortRef.current = null;
        },
        onError: (err: StreamError) => {
          setIsStreaming(false);
          if (abortRef.current === controller) abortRef.current = null;
          toast.error(err.message);
        },
      });
    },
    [url, extraBody],
  );

  /** Send a user message and stream the AI response */
  const sendMessage = useCallback(
    async (text: string, overrideBody?: Record<string, unknown>) => {
      if (!text.trim() || isStreaming) return;
      const userMsg: Msg = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      await stream(updatedMessages, overrideBody);
    },
    [messages, isStreaming, stream],
  );

  /** Start a conversation with an initial greeting message */
  const startConversation = useCallback(
    async (
      initialUserMessage = "Hello.",
      overrideBody?: Record<string, unknown>,
    ) => {
      const initMessages: Msg[] = [{ role: "user", content: initialUserMessage }];
      setMessages(initMessages);
      await stream(initMessages, overrideBody);
    },
    [stream],
  );

  /** Abort current stream */
  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
  }, []);

  return {
    messages,
    setMessages,
    isStreaming,
    sendMessage,
    startConversation,
    resetMessages,
    stream,
    abort,
  };
}
