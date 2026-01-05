import React, { useEffect, useRef, useCallback } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (config: object, elementId: string) => void;
      };
    };
  }
}

// Singleton: only one translate element across all instances
let isInitialized = false;

const GoogleTranslate: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize once globally
    if (isInitialized || document.getElementById('google-translate-script')) return;
    isInitialized = true;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'fr',
            includedLanguages: 'en,es,de,it,pt,nl,pl,ru,zh-CN,ja,ar,uk',
            layout: (window.google.translate as any).TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Handle click/tap to trigger the Google Translate dropdown
  const handleClick = useCallback(() => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      // Focus and trigger dropdown on mobile
      selectElement.focus();
      // Create and dispatch a mouse event to open dropdown
      const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      selectElement.dispatchEvent(event);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={handleClick}
      onTouchEnd={handleClick}
      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group min-h-[44px] min-w-[44px] touch-manipulation" 
      title="Translate this page / Traduire cette page"
      role="button"
      tabIndex={0}
      aria-label="Translate page"
    >
      <Globe className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        Translate
      </span>
      <div id="google_translate_element" className="google-translate-container" />
    </div>
  );
};

export default GoogleTranslate;
