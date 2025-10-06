import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Routes that should be prefetched for faster navigation
 */
const PREFETCH_ROUTES = [
  '/qui-je-suis',
  '/offres-de-formation',
  '/blog',
  '/contact',
  '/temoignages',
];

/**
 * Component to prefetch important routes on idle
 */
const PrefetchRoutes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('requestIdleCallback' in window)) {
      return;
    }

    const prefetchRoute = (route: string) => {
      // Create a link element to trigger prefetch
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      link.as = 'document';
      document.head.appendChild(link);
    };

    const handleIdle = () => {
      // Prefetch routes that aren't the current route
      PREFETCH_ROUTES.forEach((route) => {
        if (route !== location.pathname) {
          prefetchRoute(route);
        }
      });
    };

    // Use requestIdleCallback to prefetch during idle time
    const idleCallback = window.requestIdleCallback(handleIdle, { timeout: 2000 });

    return () => {
      if (idleCallback) {
        window.cancelIdleCallback(idleCallback);
      }
    };
  }, [location.pathname]);

  return null;
};

export default PrefetchRoutes;
