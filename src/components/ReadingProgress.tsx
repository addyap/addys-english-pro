import React, { useState, useEffect } from 'react';

/**
 * Reading Progress Bar — scroll progress at the top of the page.
 * Vanilla (was framer-motion); RAF-throttled, passive listener.
 */
const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? Math.min((window.scrollY / scrollHeight) * 100, 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50" aria-hidden="true">
      <div
        className="h-full bg-primary origin-left will-change-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
