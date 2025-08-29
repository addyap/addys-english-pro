
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
      console.log('[GA4] Script loaded successfully');
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${id}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
