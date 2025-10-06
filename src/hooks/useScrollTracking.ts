import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface ScrollDepth {
  25: boolean;
  50: boolean;
  75: boolean;
  100: boolean;
}

/**
 * Hook to track scroll depth for analytics
 */
export const useScrollTracking = (pageName: string) => {
  const scrollDepth = useRef<ScrollDepth>({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;

      // Track 25% depth
      if (percentage >= 25 && !scrollDepth.current[25]) {
        scrollDepth.current[25] = true;
        trackEvent('scroll_depth', {
          page: pageName,
          depth: '25%',
        });
      }

      // Track 50% depth
      if (percentage >= 50 && !scrollDepth.current[50]) {
        scrollDepth.current[50] = true;
        trackEvent('scroll_depth', {
          page: pageName,
          depth: '50%',
        });
      }

      // Track 75% depth
      if (percentage >= 75 && !scrollDepth.current[75]) {
        scrollDepth.current[75] = true;
        trackEvent('scroll_depth', {
          page: pageName,
          depth: '75%',
        });
      }

      // Track 100% depth
      if (percentage >= 99 && !scrollDepth.current[100]) {
        scrollDepth.current[100] = true;
        trackEvent('scroll_depth', {
          page: pageName,
          depth: '100%',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
};

/**
 * Hook to track time spent on page
 */
export const useTimeTracking = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      trackEvent('time_on_page', {
        page: pageName,
        seconds: timeSpent,
      });
    };
  }, [pageName]);
};
