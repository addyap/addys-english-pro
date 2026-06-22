import { onCLS, onFID, onLCP, onINP, onTTFB, type Metric } from "web-vitals";

type GtagWindow = Window & {
  __GA_ID__?: string;
  gtag?: (...args: unknown[]) => void;
};

function report(metric: Metric) {
  console.log("[WebVitals]", metric.name, Math.round(metric.value), metric);
  const w = window as GtagWindow;
  const id = w.__GA_ID__ || import.meta.env.VITE_GA_ID;
  if (id && w.gtag) {
    w.gtag("event", metric.name, {
      value: metric.value,
      event_category: "Web Vitals",
      non_interaction: true,
    });
  }
}

// Only register in the browser; web-vitals reads `performance` / `PerformanceObserver`
// which do not exist during static site generation.
if (typeof window !== "undefined") {
  onCLS(report);
  onFID(report);
  onLCP(report);
  onINP(report);
  onTTFB(report);
}
