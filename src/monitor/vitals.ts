import { onCLS, onFID, onLCP, onINP, onTTFB, type Metric } from "web-vitals";
import { trackEvent } from "@/lib/analytics";

/**
 * Core Web Vitals reporting.
 *
 * Reports through `trackEvent`, which is a no-op while the site has no
 * analytics provider (see src/lib/analytics.ts). This previously sent to
 * `window.gtag`, which this site never loads.
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
