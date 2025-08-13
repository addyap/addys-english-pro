
import { onCLS, onFID, onLCP, onINP, onTTFB } from "web-vitals";

function report(metric: any) {
  console.log("[WebVitals]", metric.name, Math.round(metric.value), metric);
  const id = (window as any).__GA_ID__ || import.meta.env.VITE_GA_ID;
  if (id && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      value: metric.value,
      event_category: "Web Vitals",
      non_interaction: true,
    });
  }
}

onCLS(report); onFID(report); onLCP(report); onINP(report); onTTFB(report);
