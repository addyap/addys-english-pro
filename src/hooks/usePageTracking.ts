import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Generate or retrieve session ID
const getSessionId = (): string => {
  const key = "page_tracking_session";
  let sessionId = sessionStorage.getItem(key);
  
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(key, sessionId);
  }
  
  return sessionId;
};

export function usePageTracking() {
  const location = useLocation();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Avoid duplicate tracking for the same path
    if (lastPathRef.current === currentPath) {
      return;
    }
    
    lastPathRef.current = currentPath;

    // Track page view via edge function (bypasses ad blockers)
    const trackPageView = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        
        if (!supabaseUrl) {
          console.warn("[PageTracking] Missing VITE_SUPABASE_URL");
          return;
        }

        const response = await fetch(`${supabaseUrl}/functions/v1/track-pageview`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: currentPath,
            referrer: document.referrer || null,
            sessionId: getSessionId(),
          }),
        });

        if (!response.ok) {
          console.warn("[PageTracking] Failed to track:", response.status);
        }
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.warn("[PageTracking] Error:", error);
      }
    };

    // Small delay to not block initial render
    const timer = setTimeout(trackPageView, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
