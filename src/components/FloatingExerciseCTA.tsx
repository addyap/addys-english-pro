import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X } from 'lucide-react';

export default function FloatingExerciseCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after scrolling past hero section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      
      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  // Only show on mobile
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null;
  }

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-4 z-50 md:hidden animate-fade-in">
      <Link
        to="/exercices"
        className="group flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Sparkles className="h-5 w-5 animate-pulse" />
        <span className="font-semibold">Essayer gratuit</span>
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute -top-2 -right-2 bg-white text-gray-600 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Fermer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
