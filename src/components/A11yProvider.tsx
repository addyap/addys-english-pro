import React, { useEffect } from 'react';
import { useSkipToContent, useReducedMotion } from '@/hooks/useA11y';

interface A11yProviderProps {
  children: React.ReactNode;
}

/**
 * Accessibility Provider Component
 * Sets up global accessibility features
 */
const A11yProvider: React.FC<A11yProviderProps> = ({ children }) => {
  useSkipToContent();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Add lang attribute if missing
    if (!document.documentElement.lang) {
      document.documentElement.lang = 'fr';
    }

    // Add reduced motion class for CSS
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, [prefersReducedMotion]);

  return <>{children}</>;
};

export default A11yProvider;
