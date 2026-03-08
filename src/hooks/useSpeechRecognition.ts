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
      toast.error("Votre navigateur ne supporte pas la reconnaissance vocale.");
      return;
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
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
      setIsListening(false);
      if (e.error === "not-allowed") {
        toast.error(
          "Accès au micro refusé. Autorisez le micro dans les paramètres de votre navigateur, ou ouvrez le site dans un nouvel onglet.",
          { duration: 6000 }
        );
      } else {
        toast.error("Erreur de reconnaissance vocale. Réessayez ou utilisez la saisie texte.");
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [speechSupported, onTranscript]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, startListening, stopListening, speechSupported };
}
