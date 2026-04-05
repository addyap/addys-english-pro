import { useRef, useEffect, useCallback, useState } from "react";

type TTSState = "idle" | "loading" | "speaking" | "error";

const LOCALE_MAP: Record<string, string[]> = {
  en: ["en-GB", "en-US", "en-AU", "en"],
  fr: ["fr-FR", "fr-CA", "fr"],
  es: ["es-ES", "es-MX", "es"],
  de: ["de-DE", "de"],
  it: ["it-IT", "it"],
  pt: ["pt-BR", "pt-PT", "pt"],
  ru: ["ru-RU", "ru"],
  ar: ["ar-SA", "ar"],
  pl: ["pl-PL", "pl"],
  uk: ["uk-UA", "uk"],
  zh: ["zh-CN", "zh-TW", "zh"],
  ja: ["ja-JP", "ja"],
};

function findBestVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | null {
  const candidates = LOCALE_MAP[lang] || [lang];
  for (const locale of candidates) {
    const match = voices.find(v => v.lang.toLowerCase().startsWith(locale.toLowerCase()));
    if (match) return match;
  }
  // Fallback: any voice matching the base language
  const base = lang.slice(0, 2).toLowerCase();
  return voices.find(v => v.lang.toLowerCase().startsWith(base)) || null;
}

export function useBrowserTTS(lang: string = "en") {
  const [state, setState] = useState<TTSState>("idle");
  const [supported, setSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const hasTTS = typeof window !== "undefined" && "speechSynthesis" in window;
    setSupported(hasTTS);

    // Preload voices
    if (hasTTS) {
      speechSynthesis.getVoices();
      const onVoices = () => speechSynthesis.getVoices();
      speechSynthesis.addEventListener?.("voiceschanged", onVoices);
      return () => {
        mountedRef.current = false;
        speechSynthesis.cancel();
        speechSynthesis.removeEventListener?.("voiceschanged", onVoices);
      };
    }
    return () => { mountedRef.current = false; };
  }, []);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    utteranceRef.current = null;
    if (mountedRef.current) setState("idle");
  }, []);

  const speak = useCallback((text: string, voiceLang?: string) => {
    if (!supported || !text.trim()) return;

    // Cancel any current speech
    speechSynthesis.cancel();

    const resolvedLang = voiceLang || lang;
    const voices = speechSynthesis.getVoices();
    const voice = findBestVoice(voices, resolvedLang);

    const utt = new SpeechSynthesisUtterance(text);
    if (voice) {
      utt.voice = voice;
      utt.lang = voice.lang;
    } else {
      utt.lang = resolvedLang;
    }
    utt.rate = 0.95;
    utt.pitch = 1;

    utt.onstart = () => { if (mountedRef.current) setState("speaking"); };
    utt.onend = () => { if (mountedRef.current) setState("idle"); utteranceRef.current = null; };
    utt.onerror = (e) => {
      if (e.error === "canceled" || e.error === "interrupted") {
        if (mountedRef.current) setState("idle");
      } else {
        if (mountedRef.current) setState("error");
        console.warn("[TTS] error:", e.error);
      }
      utteranceRef.current = null;
    };

    utteranceRef.current = utt;
    setState("loading");
    speechSynthesis.speak(utt);
  }, [supported, lang]);

  return { speak, stop, state, supported };
}
