
import { useEffect } from "react";

declare global { 
  interface Window { 
    dataLayer?: any[]; 
    gtag?: (command: string, ...args: any[]) => void;
  } 
}

export default function Analytics() {
  useEffect(() => {
    const isDev =
      (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env.DEV) ||
      process.env.NODE_ENV === "development";

    const id = "G-DNSN8DZZTV"; // Your specific GA4 Measurement ID

    window.dataLayer = window.dataLayer || [];
    function gtag(command: string, ...args: any[]){ 
      window.dataLayer!.push([command, ...args]); 
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });

    // Debug logging - only in development
    if (isDev) {
      console.log("[GA4] gtag loaded with Measurement ID: G-DNSN8DZZTV");
      gtag('event', 'debug_event', { debug: true });
    }

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
  }, []);
  return null;
}
