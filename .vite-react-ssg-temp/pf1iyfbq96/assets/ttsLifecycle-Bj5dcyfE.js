let installed = false;
function installTTSLifecycleGuards() {
  if (installed) return;
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;
  installed = true;
  const cancel = () => {
    try {
      window.speechSynthesis.cancel();
    } catch {
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") cancel();
  });
  window.addEventListener("pagehide", cancel);
  window.addEventListener("beforeunload", cancel);
}
export {
  installTTSLifecycleGuards
};
