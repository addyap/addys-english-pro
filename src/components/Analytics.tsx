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

    // Check if user has explicitly opted out
    const hasOptedOut = (): boolean => {
      try {
        const raw = localStorage.getItem('cookie-consent');
        if (!raw) return false; // No preference = allow tracking (notice-only model)
        try {
          return JSON.parse(raw) === 'declined';
        } catch {
          return raw === 'declined';
        }
      } catch {
        return false;
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
      // Only skip if user has explicitly opted out
      if (hasOptedOut()) {
        console.log('[GA4] User opted out of cookies');
        return;
      }

      if (hasLoadedRef.current) return;
      hasLoadedRef.current = true;

      // Initialize gtag
      initGtag();
      
      // Set consent state - granted by default (notice-only model)
      window.gtag!('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      });

      // Configure GA
      window.gtag!('js', new Date());
      window.gtag!('config', id, {
        anonymize_ip: true,
        send_page_view: false,
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

    // Listen for opt-out changes
    const handleConsentChange = () => {
      if (hasOptedOut() && window.gtag) {
        console.log('[GA4] User opted out');
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    };

    // Load immediately (notice-only model)
    loadAnalytics();

    // Listen for storage changes (if user opts out later)
    window.addEventListener('storage', handleConsentChange);
    window.addEventListener('cookie-consent-changed', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, []);

  return null;
}
