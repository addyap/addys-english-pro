
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    const id = (window as any).__GA_ID__ || import.meta.env.VITE_GA_ID || "G-DNSN8DZTZV";
    let hasLoaded = false;

    // Check for existing consent
    const getConsent = () => {
      try {
        return localStorage.getItem('cookie-consent');
      } catch {
        return null;
      }
    };

    const loadAnalytics = () => {
      const consent = getConsent();
      
      // Don't load if consent is declined or not given
      if (consent !== 'accepted') {
        console.log('[GA4] Waiting for cookie consent');
        return;
      }

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
      
      // Set default consent to denied
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });

      // Configure gtag
      gtag('js', new Date());
      gtag('config', id, {
        anonymize_ip: true,
        send_page_view: true,
        debug_mode: import.meta.env.DEV || Boolean((window as any).__GA_DEBUG__),
      });

      // Load the GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      
      script.onload = () => {
        console.log('[GA4] Script loaded with user consent');
        // Grant consent after script loads
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        });
      };
      
      document.head.appendChild(script);
    };

    // Listen for consent changes
    const handleConsentChange = () => {
      const consent = getConsent();
      if (consent === 'accepted' && !hasLoaded) {
        loadAnalytics();
      }
    };

    // Check consent on mount
    handleConsentChange();

    // Listen for storage changes (consent updates)
    window.addEventListener('storage', handleConsentChange);
    window.addEventListener('cookie-consent-changed', handleConsentChange as EventListener);

    // Load on first user interaction if consent already given
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    const handler = () => {
      loadAnalytics();
      events.forEach(event => window.removeEventListener(event, handler));
    };

    events.forEach(event => window.addEventListener(event, handler, { once: true, passive: true }));

    // Fallback: load after 5 seconds if no interaction and consent given
    const timeout = setTimeout(loadAnalytics, 5000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookie-consent-changed', handleConsentChange as EventListener);
      events.forEach(event => window.removeEventListener(event, handler));
      const existingScript = document.querySelector(`script[src*="${id}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
