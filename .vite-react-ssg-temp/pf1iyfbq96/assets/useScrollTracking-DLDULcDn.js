import { useRef, useEffect } from "react";
import { t as trackEvent } from "../main.mjs";
const useScrollTracking = (pageName) => {
  const scrollDepth = useRef({
    25: false,
    50: false,
    75: false,
    100: false
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = scrolled / scrollHeight * 100;
      if (percentage >= 25 && !scrollDepth.current[25]) {
        scrollDepth.current[25] = true;
        trackEvent("scroll_depth", {
          page: pageName,
          depth: "25%"
        });
      }
      if (percentage >= 50 && !scrollDepth.current[50]) {
        scrollDepth.current[50] = true;
        trackEvent("scroll_depth", {
          page: pageName,
          depth: "50%"
        });
      }
      if (percentage >= 75 && !scrollDepth.current[75]) {
        scrollDepth.current[75] = true;
        trackEvent("scroll_depth", {
          page: pageName,
          depth: "75%"
        });
      }
      if (percentage >= 99 && !scrollDepth.current[100]) {
        scrollDepth.current[100] = true;
        trackEvent("scroll_depth", {
          page: pageName,
          depth: "100%"
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageName]);
};
const useTimeTracking = (pageName) => {
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1e3);
      trackEvent("time_on_page", {
        page: pageName,
        seconds: timeSpent
      });
    };
  }, [pageName]);
};
export {
  useTimeTracking as a,
  useScrollTracking as u
};
