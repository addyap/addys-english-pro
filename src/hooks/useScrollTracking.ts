import { useEffect } from 'react';
import { initScrollTracking, initTimeTracking } from '@/lib/analytics';

/**
 * Hook to automatically track scroll depth and time on page
 */
export const useScrollTracking = (pagePath?: string) => {
  useEffect(() => {
    const cleanupScroll = initScrollTracking();
    const cleanupTime = pagePath ? initTimeTracking(pagePath) : () => {};

    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, [pagePath]);
};
