import { useEffect } from 'react';

/**
 * Warms the JS chunks of the most-visited pages once the browser is idle, so
 * in-app navigation to them is instant.
 *
 * Navigation is client-side, so it needs the route's JS chunk — never the
 * prerendered HTML. This used to inject <link rel="prefetch"> for five full
 * HTML documents on every route change, which in-app navigation never used.
 * These dynamic imports resolve to the same chunks the router's lazy routes
 * load, so the router later finds them already in the module cache.
 */
const PREFETCH = [
  () => import('@/pages/Contact'),
  () => import('@/pages/Training'),
  () => import('@/pages/About'),
  () => import('@/pages/Blog'),
];

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

const PrefetchRoutes = () => {
  useEffect(() => {
    if (!('requestIdleCallback' in window)) return;
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? '')) return;

    const id = window.requestIdleCallback(
      () => PREFETCH.forEach((load) => load().catch(() => undefined)),
      { timeout: 4000 },
    );
    return () => window.cancelIdleCallback(id);
  }, []);

  return null;
};

export default PrefetchRoutes;
