import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID || "G-DNSN8DZTZV";

    // Check for existing consent from localStorage
    const getConsent = (): string | null => {
      try {
        const raw = localStorage.getItem('cookie-consent');
        if (!raw) return null;
        // The useLocalStorage hook JSON.stringify the value
        try {
          return JSON.parse(raw);
        } catch {
          return raw;
        }
      } catch {
        return null;
      }
    };

    const initGtag = () => {
      if (window.gtag) return;
      
      window.dataLayer = window.dataLayer || [];
      
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer!.push(arguments);
      };
    };

    const loadAnalytics = () => {
      const consent = getConsent();
      
      // Don't load if consent is explicitly declined
      if (consent === 'declined') {
        console.log('[GA4] User declined cookies');
        return;
      }

      // Don't load if no consent given yet
      if (consent !== 'accepted') {
        console.log('[GA4] Waiting for cookie consent');
        return;
      }

      if (hasLoadedRef.current) return;
      hasLoadedRef.current = true;

      // Initialize gtag
      initGtag();
      
      // Set initial consent state
      window.gtag!('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });

      // Configure GA
      window.gtag!('js', new Date());
      window.gtag!('config', id, {
        anonymize_ip: true,
        send_page_view: false, // We'll send manually after script loads
        debug_mode: import.meta.env.DEV,
      });

      // Check if script already exists
      if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) {
        console.log('[GA4] Script already loaded');
        return;
      }

      // Load the GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      
      script.onload = () => {
        console.log('[GA4] Script loaded successfully');
        
        // Grant consent after script loads
        window.gtag!('consent', 'update', {
          analytics_storage: 'granted',
        });
        
        // Send initial page view
        window.gtag!('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      };
      
      script.onerror = () => {
        console.error('[GA4] Failed to load script');
        hasLoadedRef.current = false;
      };
      
      document.head.appendChild(script);
    };

    // Listen for consent changes
    const handleConsentChange = (event?: Event) => {
      const consent = getConsent();
      console.log('[GA4] Consent status:', consent);
      
      if (consent === 'accepted' && !hasLoadedRef.current) {
        loadAnalytics();
      } else if (consent === 'declined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    };

    // Check consent on mount
    handleConsentChange();

    // Listen for storage changes (consent updates)
    window.addEventListener('storage', handleConsentChange);
    window.addEventListener('cookie-consent-changed', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, []);

  return null;
}
