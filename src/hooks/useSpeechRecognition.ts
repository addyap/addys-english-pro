import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";

export function useSpeechRecognition(onTranscript: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const speechSupported =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const startListening = useCallback(() => {
    if (!speechSupported) {
      toast.error("Your browser does not support speech recognition.");
      return;
    }

    // Stop any previous instance before creating a new one —
    // mobile browsers only allow one active SpeechRecognition at a time.
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (_) {
        /* ignore */
      }
      recognitionRef.current = null;
    }

    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");
      onTranscript(transcript);
    };

    recognition.onend = () => setIsListening(false);

    recognition.onerror = (e: any) => {
      console.warn("[SpeechRecognition] error:", e.error, e.message);
      setIsListening(false);

      switch (e.error) {
        case "not-allowed":
          toast.error(
            "Microphone access denied. Please allow microphone access in your browser settings, then try again.",
            { duration: 6000 }
          );
          break;
        case "no-speech":
          toast.info("No speech detected. Please try again.");
          break;
        case "aborted":
          // Silently ignore — happens when we abort a previous instance
          break;
        case "audio-capture":
        case "not-found":
          toast.error(
            "No microphone found. Please connect a microphone and try again."
          );
          break;
        case "network":
          toast.error(
            "Network error during speech recognition. Please check your connection."
          );
          break;
        default:
          toast.error(
            "Speech recognition error. You can continue typing instead."
          );
          break;
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
      setIsListening(true);
    } catch (err: any) {
      console.error("[SpeechRecognition] start() threw:", err);
      setIsListening(false);
      recognitionRef.current = null;
      toast.error(
        "Could not start speech recognition. You can continue typing instead."
      );
    }
  }, [speechSupported, onTranscript]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_) {
        /* ignore */
      }
    }
    setIsListening(false);
  }, []);

  return { isListening, startListening, stopListening, speechSupported };
}
