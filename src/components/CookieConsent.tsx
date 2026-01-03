import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-3 left-3 z-50"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/80 backdrop-blur-sm rounded-full text-xs text-muted-foreground border border-border/50 shadow-sm">
            <span>🍪</span>
            <span>Cookies analytics</span>
            <a 
              href="/politique-confidentialite" 
              className="text-primary/70 hover:text-primary hover:underline"
            >
              info
            </a>
            <span className="text-border">|</span>
            <button
              onClick={handleOptOut}
              className="hover:text-foreground transition-colors"
            >
              non
            </button>
            <button
              onClick={handleDismiss}
              className="hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
