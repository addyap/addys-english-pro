import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasSeenNotice, setHasSeenNotice] = useLocalStorage('cookie-notice-seen', false);
  const [, setConsent] = useLocalStorage('cookie-consent', 'accepted'); // Default to accepted

  useEffect(() => {
    // Show banner after 2 seconds if user hasn't seen the notice yet
    if (!hasSeenNotice) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasSeenNotice]);

  const handleDismiss = () => {
    setHasSeenNotice(true);
    setShowBanner(false);
  };

  const handleOptOut = () => {
    setConsent('declined');
    setHasSeenNotice(true);
    setShowBanner(false);

    // Notify listeners (Analytics) about consent change
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'declined' }));

    // Disable analytics if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg"
        >
          <div className="p-4">
            <div className="flex items-start gap-3">
              <Cookie className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">
                  Ce site utilise des cookies pour analyser le trafic.{' '}
                  <a 
                    href="/politique-confidentialite" 
                    className="text-primary hover:underline"
                  >
                    En savoir plus
                  </a>
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex gap-2 mt-3 justify-end">
              <Button
                onClick={handleOptOut}
                variant="ghost"
                size="sm"
                className="text-xs"
              >
                Refuser les cookies
              </Button>
              <Button
                onClick={handleDismiss}
                size="sm"
                className="text-xs"
              >
                OK
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
