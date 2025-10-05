import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Hook to monitor Core Web Vitals
 */
export const usePerformanceMonitor = (reportCallback?: (metrics: PerformanceMetrics) => void) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          console.log('[Performance] FCP:', entry.startTime);
          reportCallback?.(metrics);
        }
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Paint timing not supported
    }

    // Measure LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
      console.log('[Performance] LCP:', metrics.lcp);
      reportCallback?.(metrics);
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // Measure FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid = (entry as any).processingStart - entry.startTime;
        console.log('[Performance] FID:', metrics.fid);
        reportCallback?.(metrics);
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      console.log('[Performance] CLS:', clsValue);
      reportCallback?.(metrics);
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }

    // Measure TTFB (Time to First Byte)
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
      metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
      console.log('[Performance] TTFB:', metrics.ttfb);
      reportCallback?.(metrics);
    }

    // Send to analytics if available
    if (window.gtag && Object.keys(metrics).length > 0) {
      window.gtag('event', 'web_vitals', metrics);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [reportCallback]);
};

/**
 * Hook to track long tasks (performance bottlenecks)
 */
export const useLongTaskMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn('[Performance] Long task detected:', {
          duration: entry.duration,
          startTime: entry.startTime,
        });

        // Track in analytics
        if (window.gtag) {
          window.gtag('event', 'long_task', {
            duration: entry.duration,
            start_time: entry.startTime,
          });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long tasks not supported
    }

    return () => observer.disconnect();
  }, []);
};
