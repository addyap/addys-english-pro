import React, { useEffect, useId, useMemo } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    __gtInitFns?: Set<() => void>;
    google?: {
      translate: {
        TranslateElement: new (config: object, elementId: string) => void;
      };
    };
  }
}

const GoogleTranslate: React.FC = () => {
  const reactId = useId();
  const elementId = useMemo(
    () => `google_translate_${reactId.replace(/[:]/g, '')}`,
    [reactId]
  );

  useEffect(() => {
    const init = () => {
      const mount = document.getElementById(elementId) as HTMLElement | null;
      if (!mount) return;
      if (mount.dataset.gtInitialized === 'true') return;
      if (!window.google?.translate?.TranslateElement) return;

      const layout = (window.google as any)?.translate?.TranslateElement?.InlineLayout?.SIMPLE;

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'fr',
            includedLanguages: 'en,es,de,it,pt,nl,pl,ru,zh-CN,ja,ar,uk',
            ...(layout ? { layout } : {}),
            autoDisplay: false,
          },
          elementId
        );
        mount.dataset.gtInitialized = 'true';
      } catch {
        // noop
      }
    };

    window.__gtInitFns = window.__gtInitFns ?? new Set();
    window.__gtInitFns.add(init);

    // Single global callback used by Google's script
    window.googleTranslateElementInit = () => {
      window.__gtInitFns?.forEach((fn) => fn());
    };

    const existingScript = document.getElementById('google-translate-script') as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // If the API is already available, initialize immediately.
    init();

    return () => {
      window.__gtInitFns?.delete(init);
    };
  }, [elementId]);

  return (
    <div
      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
      title="Translate this page / Traduire cette page"
    >
      <Globe className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
        Translate
      </span>
      <div id={elementId} className="google-translate-container" />
    </div>
  );
};

export default GoogleTranslate;
