import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrefetchRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Define route prefetching based on current page
    const routeMap: Record<string, string[]> = {
      '/': ['/qui-je-suis', '/offres-de-formation', '/contact'],
      '/qui-je-suis': ['/offres-de-formation', '/contact', '/blog'],
      '/offres-de-formation': ['/contact', '/qui-je-suis', '/temoignages'],
      '/blog': ['/qui-je-suis', '/contact', '/offres-de-formation'],
      '/contact': ['/qui-je-suis', '/offres-de-formation'],
      '/temoignages': ['/contact', '/offres-de-formation'],
      '/anglaisadistance': ['/contact', '/offres-de-formation']
    };

    const routesToPrefetch = routeMap[location.pathname] || [];

    routesToPrefetch.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      link.as = 'document';
      document.head.appendChild(link);
    });

    // Cleanup function to remove prefetch links when component unmounts
    return () => {
      routesToPrefetch.forEach(route => {
        const existingLink = document.head.querySelector(`link[rel="prefetch"][href="${route}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, [location.pathname]);

  return null;
};

export default PrefetchRoutes;