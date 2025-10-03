
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    const id = "G-DNSN8DZZTV";
    let hasLoaded = false;

    const loadAnalytics = () => {
      if (hasLoaded) return;
      hasLoaded = true;

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      
      // Define gtag function
      function gtag(...args: any[]) {
        window.dataLayer!.push(arguments);
      }
      
      // Make gtag globally available
      window.gtag = gtag;
      
      // Configure gtag
      gtag('js', new Date());
      gtag('config', id, {
        anonymize_ip: true,
        send_page_view: true
      });

      // Load the GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      
      script.onload = () => {
        console.log('[GA4] Script loaded after user interaction');
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        });
      };
      
      document.head.appendChild(script);
    };

    // Load on first user interaction (optimized for performance)
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    const handler = () => {
      loadAnalytics();
      events.forEach(event => window.removeEventListener(event, handler));
    };

    events.forEach(event => window.addEventListener(event, handler, { once: true, passive: true }));

    // Fallback: load after 5 seconds if no interaction
    const timeout = setTimeout(loadAnalytics, 5000);

    return () => {
      clearTimeout(timeout);
      events.forEach(event => window.removeEventListener(event, handler));
      const existingScript = document.querySelector(`script[src*="${id}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
