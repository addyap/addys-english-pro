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

// High-quality voice name hints (premium / neural / enhanced)
const PREMIUM_HINTS = [
  "natural", "neural", "premium", "enhanced", "online",
  "google", "microsoft", "apple", "samantha", "daniel",
  "karen", "moira", "tessa", "serena", "kate", "oliver",
  "aria", "guy", "jenny", "ryan", "sonia",
];

const PREFS_KEY_VOICE = "tts.voiceURI";
const PREFS_KEY_RATE = "tts.rate";

function scoreVoice(v: SpeechSynthesisVoice, locales: string[]): number {
  let score = 0;
  const lang = v.lang.toLowerCase();
  // Locale match priority
  for (let i = 0; i < locales.length; i++) {
    if (lang.startsWith(locales[i].toLowerCase())) {
      score += (locales.length - i) * 100;
      break;
    }
  }
  // Local voices generally sound better and work offline
  if (v.localService) score += 30;
  // Premium / neural hints
  const name = v.name.toLowerCase();
  if (PREMIUM_HINTS.some(h => name.includes(h))) score += 40;
  // Default voice gets a small bump
  if (v.default) score += 5;
  return score;
}

function findBestVoice(
  voices: SpeechSynthesisVoice[],
  lang: string,
  preferredURI?: string | null
): SpeechSynthesisVoice | null {
  if (!voices.length) return null;
  if (preferredURI) {
    const p = voices.find(v => v.voiceURI === preferredURI);
    if (p) return p;
  }
  const candidates = LOCALE_MAP[lang] || [lang];
  const baseLang = lang.slice(0, 2).toLowerCase();
  const filtered = voices.filter(v =>
    candidates.some(c => v.lang.toLowerCase().startsWith(c.toLowerCase())) ||
    v.lang.toLowerCase().startsWith(baseLang)
  );
  const pool = filtered.length ? filtered : voices;
  return pool
    .map(v => ({ v, s: scoreVoice(v, candidates) }))
    .sort((a, b) => b.s - a.s)[0]?.v ?? null;
}

function readStoredRate(): number {
  if (typeof window === "undefined") return 0.95;
  const raw = window.localStorage.getItem(PREFS_KEY_RATE);
  const n = raw ? parseFloat(raw) : NaN;
  return Number.isFinite(n) && n >= 0.5 && n <= 1.5 ? n : 0.95;
}

function readStoredVoiceURI(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(PREFS_KEY_VOICE);
}

export function useBrowserTTS(lang: string = "en") {
  const [state, setState] = useState<TTSState>("idle");
  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | null>(null);
  const [rate, setRateState] = useState<number>(0.95);

  // Hydrate from localStorage after mount (SSR-safe)
  useEffect(() => {
    const v = readStoredVoiceURI();
    if (v) setSelectedVoiceURI(v);
    const r = readStoredRate();
    if (r !== 0.95) setRateState(r);
  }, []);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const hasTTS = typeof window !== "undefined" && "speechSynthesis" in window;
    setSupported(hasTTS);
    if (!hasTTS) return () => { mountedRef.current = false; };

    const refresh = () => {
      const list = speechSynthesis.getVoices();
      if (mountedRef.current) setVoices(list);
    };
    refresh();
    speechSynthesis.addEventListener?.("voiceschanged", refresh);

    // Hard cancel on tab hide / unload to avoid stuck audio
    const onHide = () => speechSynthesis.cancel();
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onHide);

    return () => {
      mountedRef.current = false;
      speechSynthesis.cancel();
      speechSynthesis.removeEventListener?.("voiceschanged", refresh);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onHide);
    };
  }, []);

  const stop = useCallback(() => {
    if (!supported) return;
    speechSynthesis.cancel();
    utteranceRef.current = null;
    if (mountedRef.current) setState("idle");
  }, [supported]);

  const speak = useCallback((text: string, voiceLang?: string) => {
    if (!supported || !text.trim()) return;

    // Always cancel before speaking — prevents overlap
    speechSynthesis.cancel();

    const resolvedLang = voiceLang || lang;
    const list = speechSynthesis.getVoices();
    const voice = findBestVoice(list, resolvedLang, selectedVoiceURI);

    const utt = new SpeechSynthesisUtterance(text);
    if (voice) {
      utt.voice = voice;
      utt.lang = voice.lang;
    } else {
      utt.lang = resolvedLang;
    }
    utt.rate = rate;
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
  }, [supported, lang, selectedVoiceURI, rate]);

  const setVoice = useCallback((voiceURI: string | null) => {
    setSelectedVoiceURI(voiceURI);
    try {
      if (voiceURI) window.localStorage.setItem(PREFS_KEY_VOICE, voiceURI);
      else window.localStorage.removeItem(PREFS_KEY_VOICE);
    } catch {/* ignore */}
  }, []);

  const setRate = useCallback((r: number) => {
    const clamped = Math.min(1.5, Math.max(0.5, r));
    setRateState(clamped);
    try { window.localStorage.setItem(PREFS_KEY_RATE, String(clamped)); } catch {/* ignore */}
  }, []);

  // Voices filtered & sorted for the active language — useful for UI pickers
  const englishVoices = (() => {
    if (!voices.length) return [] as SpeechSynthesisVoice[];
    const candidates = LOCALE_MAP[lang] || [lang];
    const base = lang.slice(0, 2).toLowerCase();
    return voices
      .filter(v => v.lang.toLowerCase().startsWith(base))
      .map(v => ({ v, s: scoreVoice(v, candidates) }))
      .sort((a, b) => b.s - a.s)
      .map(x => x.v);
  })();

  return {
    speak,
    stop,
    state,
    supported,
    voices,
    languageVoices: englishVoices,
    selectedVoiceURI,
    setVoice,
    rate,
    setRate,
  };
}
