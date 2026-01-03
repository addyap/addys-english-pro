import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Badge as BadgeType } from '@/hooks/useGamification';
import { Button } from '@/components/ui/button';

interface BadgeNotificationProps {
  badges: BadgeType[];
  onClose: () => void;
}

export function BadgeNotification({ badges, onClose }: BadgeNotificationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (badges.length === 0) return;

    // Auto-advance through badges
    if (currentIndex < badges.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // Auto close after showing all badges
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, badges.length, onClose]);

  if (badges.length === 0) return null;

  const currentBadge = badges[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 shadow-2xl text-primary-foreground min-w-[280px]">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <motion.div
              key={currentBadge.id}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="text-6xl mb-3"
            >
              {currentBadge.icon}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-medium opacity-80 mb-1">
                🎉 Nouveau badge!
              </p>
              <h3 className="text-xl font-bold mb-1">
                {currentBadge.nameFr}
              </h3>
              <p className="text-sm opacity-80">
                {currentBadge.descriptionFr}
              </p>
            </motion.div>

            {badges.length > 1 && (
              <div className="flex justify-center gap-1 mt-4">
                {badges.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? 'bg-primary-foreground' : 'bg-primary-foreground/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
