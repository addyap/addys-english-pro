/**
 * Global TTS safety net.
 *
 * Browsers (especially mobile Safari) will keep speaking via SpeechSynthesis
 * after the user navigates away, switches tabs, or locks the screen. This
 * module installs one-time global listeners that cancel any ongoing speech on:
 *   - visibilitychange → hidden
 *   - pagehide
 *   - beforeunload
 *
 * Idempotent: safe to import from multiple entrypoints.
 */
let installed = false;

export function installTTSLifecycleGuards() {
  if (installed) return;
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;
  installed = true;

  const cancel = () => {
    try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") cancel();
  });
  window.addEventListener("pagehide", cancel);
  window.addEventListener("beforeunload", cancel);
}
