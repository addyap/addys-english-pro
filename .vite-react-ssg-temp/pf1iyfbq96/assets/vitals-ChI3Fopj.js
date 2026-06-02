import { onCLS, onFID, onLCP, onINP, onTTFB } from "web-vitals";
function report(metric) {
  console.log("[WebVitals]", metric.name, Math.round(metric.value), metric);
  const id = window.__GA_ID__ || "G-DNSN8DZTZV";
  if (id && window.gtag) {
    window.gtag("event", metric.name, {
      value: metric.value,
      event_category: "Web Vitals",
      non_interaction: true
    });
  }
}
if (typeof window !== "undefined") {
  onCLS(report);
  onFID(report);
  onLCP(report);
  onINP(report);
  onTTFB(report);
}
