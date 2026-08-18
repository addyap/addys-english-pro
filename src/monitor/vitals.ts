import { onCLS, onFID, onLCP, onINP, onTTFB, type Metric } from "web-vitals";
import { trackEvent } from "@/lib/analytics";

/**
 * Core Web Vitals reporting.
 *
 * Reports to Umami. This previously sent to `window.gtag`, gated on a
 * `VITE_GA_ID` that is not set and a Google Analytics snippet that this site
 * never loads — so every measurement was collected and then thrown away.
 * `trackEvent` is a no-op until Umami is configured, so the same "silent when
 * unconfigured" behaviour is preserved without pretending to use GA.
 */
function report(metric: Metric) {
  trackEvent("web_vital", {
    category: "engagement",
    label: metric.name,
    value: Math.round(metric.value),
    rating: metric.rating,
  });
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
