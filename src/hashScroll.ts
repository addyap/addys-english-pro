
export function initHashScroll(offsetPx = 88) {
  function jump() {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    el.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    window.scrollBy({ top: -offsetPx, left: 0 });
  }
  window.addEventListener("load", () => setTimeout(jump, 50));
  window.addEventListener("hashchange", () => setTimeout(jump, 0));
}
