import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ReadingProgressProps {
  target?: React.RefObject<HTMLElement>;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ target }) => {
  const [readingTime, setReadingTime] = useState(0);
  const { scrollYProgress } = useScroll({
    target: target as any,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateReadingTime = () => {
      const progress = scrollYProgress.get();
      const estimatedTotalTime = 5; // minutes (adjust based on article)
      const currentTime = Math.round(progress * estimatedTotalTime);
      setReadingTime(estimatedTotalTime - currentTime);
    };

    const unsubscribe = scrollYProgress.on('change', updateReadingTime);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Reading Time Indicator */}
      <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hidden md:block z-40">
        {readingTime > 0 ? (
          <>
            <span className="text-blue-600">{readingTime} min</span> restantes
          </>
        ) : (
          <span className="text-green-600">✓ Lecture terminée</span>
        )}
      </div>
    </>
  );
};

export default ReadingProgress;
