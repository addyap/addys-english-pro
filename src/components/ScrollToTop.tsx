import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect fires synchronously before paint, preventing the flash of footer
  useIsomorphicLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;