
export function deferScript(src: string, attrs: Record<string,string|boolean> = {}) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    for (const [k,v] of Object.entries(attrs)) {
      if (typeof v === "boolean") { if (v) (s as any)[k] = true; }
      else s.setAttribute(k, v);
    }
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

export function onIdle(cb: () => void) {
  if ("requestIdleCallback" in window) (window as any).requestIdleCallback(cb, { timeout: 2000 });
  else setTimeout(cb, 0);
}

export function afterFirstInteraction(cb: () => void) {
  const handler = () => { window.removeEventListener("pointerdown", handler, { capture:true } as any); cb(); };
  window.addEventListener("pointerdown", handler, { once: true, capture: true } as any);
}
