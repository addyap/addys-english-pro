import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  callback: () => void;
}

/**
 * Hook for keyboard shortcuts
 */
export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      shortcuts.forEach((shortcut) => {
        const ctrlMatch = shortcut.ctrl ? e.ctrlKey || e.metaKey : !e.ctrlKey && !e.metaKey;
        const shiftMatch = shortcut.shift ? e.shiftKey : !e.shiftKey;
        const altMatch = shortcut.alt ? e.altKey : !e.altKey;

        if (
          e.key.toLowerCase() === shortcut.key.toLowerCase() &&
          ctrlMatch &&
          shiftMatch &&
          altMatch
        ) {
          e.preventDefault();
          shortcut.callback();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

/**
 * Hook for common navigation shortcuts
 */
export const useNavigationShortcuts = () => {
  const navigate = useNavigate();

  useKeyboardShortcuts([
    {
      key: 'h',
      alt: true,
      callback: () => navigate('/'),
    },
    {
      key: 'b',
      alt: true,
      callback: () => navigate('/blog'),
    },
    {
      key: 'c',
      alt: true,
      callback: () => navigate('/contact'),
    },
    {
      key: 'f',
      ctrl: true,
      callback: () => {
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        searchInput?.focus();
      },
    },
  ]);
};

/**
 * Hook for arrow key navigation in lists
 */
export const useArrowNavigation = (itemsRef: React.RefObject<HTMLElement[]>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!itemsRef.current || itemsRef.current.length === 0) return;

      const activeElement = document.activeElement as HTMLElement;
      const currentIndex = itemsRef.current.indexOf(activeElement);

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = Math.min(currentIndex + 1, itemsRef.current.length - 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = itemsRef.current.length - 1;
          break;
        default:
          return;
      }

      itemsRef.current[nextIndex]?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [itemsRef]);
};
