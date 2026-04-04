import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Microphone / speech-input states.
 * – idle:                  ready to start
 * – requesting-permission: getUserMedia or recognition.start() in progress
 * – listening:             actively capturing audio
 * – denied:                user or browser blocked mic access
 * – unavailable:           no mic device, insecure context, or mic busy
 * – unsupported:           browser has no SpeechRecognition API
 * – error:                 transient failure (network, aborted, unknown)
 */
export type MicState =
  | "idle"
  | "requesting-permission"
  | "listening"
  | "denied"
  | "unavailable"
  | "unsupported"
  | "error";

export interface MicError {
  state: MicState;
  message: string;
  hint?: string;
}

/* ── helpers ─────────────────────────────────────────────── */

const getSR = (): (new () => SpeechRecognition) | null => {
  if (typeof window === "undefined") return null;
  return (
    (window as any).SpeechRecognition ??
    (window as any).webkitSpeechRecognition ??
    null
  );
};

const isSpeechSupported = (): boolean => getSR() !== null;

const isSecureContext = (): boolean =>
  typeof window !== "undefined" && window.isSecureContext;

/**
 * Map a raw SpeechRecognitionErrorEvent.error code to a
 * user-meaningful MicError.
 */
function classifyError(code: string, _message?: string): MicError {
  switch (code) {
    case "not-allowed":
      return {
        state: "denied",
        message: "Microphone access is blocked. Please allow microphone access in your browser settings and try again.",
        hint: "Check your browser site settings and phone app permissions.",
      };
    case "audio-capture":
    case "not-found":
      return {
        state: "unavailable",
        message: "No microphone was detected on this device.",
      };
    case "no-speech":
      return {
        state: "idle",
        message: "No speech was detected. Please try again.",
      };
    case "aborted":
      // silently reset — happens when we abort a previous instance
      return { state: "idle", message: "" };
    case "network":
      return {
        state: "error",
        message: "A network error occurred during speech recognition. Please check your connection and try again.",
      };
    case "service-not-allowed":
      return {
        state: "unavailable",
        message: "Voice input is not available on this browser. Please type your reply instead.",
      };
    default:
      return {
        state: "error",
        message: "The microphone could not start. Please try again.",
      };
  }
}

/* ── hook ────────────────────────────────────────────────── */

export function useSpeechRecognition(onTranscript: (text: string) => void) {
  const [micState, setMicState] = useState<MicState>(() =>
    isSpeechSupported() ? "idle" : "unsupported"
  );
  const [micError, setMicError] = useState<MicError | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  // Guard against rapid double-taps
  const startingRef = useRef(false);

  const speechSupported = isSpeechSupported();

  /** Cleanly tear down whatever instance is in the ref */
  const teardown = useCallback(() => {
    const r = recognitionRef.current;
    if (r) {
      try { r.abort(); } catch (_) { /* ignore */ }
      recognitionRef.current = null;
    }
  }, []);

  /** Cleanup on unmount / navigation */
  useEffect(() => {
    return () => {
      teardown();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearError = useCallback(() => setMicError(null), []);

  const startListening = useCallback(() => {
    // ── pre-checks ──
    if (!speechSupported) {
      const err: MicError = {
        state: "unsupported",
        message: "Voice input is not supported on this browser. Please type your reply instead.",
      };
      setMicState("unsupported");
      setMicError(err);
      return;
    }

    if (!isSecureContext()) {
      const err: MicError = {
        state: "unavailable",
        message: "Voice input requires a secure (HTTPS) connection.",
      };
      setMicState("unavailable");
      setMicError(err);
      return;
    }

    // Prevent duplicate starts from rapid tapping
    if (startingRef.current || micState === "listening" || micState === "requesting-permission") {
      return;
    }

    // Clear previous error
    setMicError(null);

    // Abort any lingering instance
    teardown();

    startingRef.current = true;
    setMicState("requesting-permission");

    const SR = getSR()!;
    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join("");
      onTranscript(transcript);
    };

    recognition.onend = () => {
      if (recognitionRef.current === recognition) {
        recognitionRef.current = null;
      }
      startingRef.current = false;
      setMicState((prev) => (prev === "listening" || prev === "requesting-permission" ? "idle" : prev));
    };

    recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
      if (recognitionRef.current === recognition) {
        recognitionRef.current = null;
      }
      startingRef.current = false;

      const classified = classifyError(e.error, e.message);

      setMicState(classified.state);

      // Don't surface "aborted" as an error
      if (classified.message) {
        setMicError(classified);
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
      // If start() didn't throw, we're now waiting for audio.
      // The actual "listening" state is set once we know it's live:
      setMicState("listening");
      startingRef.current = false;
    } catch (err: unknown) {
      recognitionRef.current = null;
      startingRef.current = false;

      // start() can throw DOMException for permission issues on some browsers
      const isDenied =
        err instanceof DOMException &&
        (err.name === "NotAllowedError" || err.name === "SecurityError");

      if (isDenied) {
        const micErr: MicError = {
          state: "denied",
          message: "Microphone access is blocked. Please allow microphone access in your browser settings and try again.",
          hint: "Check your browser site settings and phone app permissions.",
        };
        setMicState("denied");
        setMicError(micErr);
      } else {
        const micErr: MicError = {
          state: "error",
          message: "The microphone could not start. Please try again.",
        };
        setMicState("error");
        setMicError(micErr);
      }
    }
  }, [speechSupported, micState, onTranscript, teardown]);

  const stopListening = useCallback(() => {
    teardown();
    startingRef.current = false;
    setMicState("idle");
  }, [teardown]);

  // Legacy-compatible boolean
  const isListening = micState === "listening";

  return {
    micState,
    micError,
    isListening,
    startListening,
    stopListening,
    clearError,
    speechSupported,
  };
}
