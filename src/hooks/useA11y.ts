import { useEffect } from 'react';

/**
 * Hook to announce dynamic content changes to screen readers
 */
export const useAriaLive = (
  message: string,
  politeness: 'polite' | 'assertive' = 'polite'
) => {
  useEffect(() => {
    if (!message) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', politeness);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Clean up after announcement
    const timer = setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    };
  }, [message, politeness]);
};

/**
 * Hook to manage focus trap in modals/dialogs
 */
export const useA11yDialog = (
  isOpen: boolean,
  dialogRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const previousActiveElement = document.activeElement as HTMLElement;

    // Focus first focusable element
    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Trap focus within dialog
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    dialog.addEventListener('keydown', handleTabKey);

    // Restore focus on close
    return () => {
      dialog.removeEventListener('keydown', handleTabKey);
      previousActiveElement?.focus();
    };
  }, [isOpen, dialogRef]);
};

/**
 * Hook to skip to main content
 */
export const useSkipToContent = () => {
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded';
    
    document.body.prepend(skipLink);

    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);
};

/**
 * Hook to handle reduced motion preference
 */
export const useReducedMotion = () => {
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }
  }, [prefersReducedMotion]);

  return prefersReducedMotion;
};
