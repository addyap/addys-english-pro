import React, { useEffect } from 'react';
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

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // Only initialize once
    if (document.getElementById('google-translate-script')) return;

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

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group" title="Translate this page / Traduire cette page">
      <Globe className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
        Translate
      </span>
      <div id="google_translate_element" className="google-translate-container" />
    </div>
  );
};

export default GoogleTranslate;
