import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useLocalStorage('cookie-consent', null);

  useEffect(() => {
    // Show banner after 1 second if consent not given
    if (consent === null) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  const handleAccept = () => {
    setConsent('accepted');
    setShowBanner(false);

    // Trigger storage event for Analytics component
    window.dispatchEvent(new Event('storage'));

    // Enable analytics if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    setConsent('declined');
    setShowBanner(false);

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
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg"
        >
          <div className="max-w-6xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Cookies et confidentialité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site. 
                    En continuant, vous acceptez notre{' '}
                    <a 
                      href="/politique-confidentialite" 
                      className="text-primary hover:underline"
                    >
                      politique de confidentialité
                    </a>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="flex-1 md:flex-none"
                >
                  Refuser
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="flex-1 md:flex-none"
                >
                  Accepter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
