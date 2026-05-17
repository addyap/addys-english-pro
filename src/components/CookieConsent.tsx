import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasSeenNotice, setHasSeenNotice] = useLocalStorage('cookie-notice-seen', false);

  useEffect(() => {
    // Show for 3 seconds after a 2s delay, then auto-dismiss
    if (!hasSeenNotice) {
      const showTimer = setTimeout(() => setShowBanner(true), 2000);
      const hideTimer = setTimeout(() => {
        setShowBanner(false);
        setHasSeenNotice(true);
      }, 5000); // 2s delay + 3s visible
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasSeenNotice, setHasSeenNotice]);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-2 left-2 z-40"
        >
          <a 
            href="/politique-confidentialite"
            className="text-xs text-foreground/80 hover:text-foreground underline-offset-2 hover:underline transition-colors"
          >
            🍪 cookies
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
