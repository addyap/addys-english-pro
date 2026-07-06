import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlay = true,
  interval = 7000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 8000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  }, [testimonials.length]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(() => paginate(1), interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isPaused, paginate]);

  // Keyboard navigation — only when carousel is focused/hovered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.matches(':hover, :focus-within')) return;
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const current = testimonials[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
      aria-live="polite"
    >
      {/* Decorative quote icon */}
      <div className="absolute top-6 left-6 opacity-10 pointer-events-none" aria-hidden="true">
        <Quote className="w-20 h-20 md:w-24 md:h-24 text-blue-600" />
      </div>

      {/* "Avis client" badge */}
      <div className="relative flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wide">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
          Avis client
        </span>
      </div>

      {/* Stable-height carousel content */}
      <div
        className="relative min-h-[340px] sm:min-h-[300px] md:min-h-[280px] flex items-center"
        aria-atomic="true"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.article
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 260, damping: 28 },
              opacity: { duration: 0.35 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            className="absolute inset-0 w-full px-2 sm:px-6 flex flex-col justify-center text-center"
            aria-roledescription="diapositive"
            aria-label={`Témoignage ${currentIndex + 1} sur ${testimonials.length}`}
          >
            {/* 5-star rating */}
            <div className="flex justify-center gap-1 mb-4 text-amber-500" aria-label="Note 5 sur 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" aria-hidden="true" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg md:text-2xl text-gray-800 italic mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-3xl mx-auto px-2">
              «&nbsp;{current.quote}&nbsp;»
            </blockquote>

            <footer className="space-y-1">
              <p className="font-bold text-base md:text-lg text-gray-900">{current.name}</p>
              <p className="text-sm md:text-base text-gray-600">{current.role}</p>
              {current.company && (
                <p className="text-sm text-blue-700 font-medium">{current.company}</p>
              )}
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Navigation buttons — hidden on small screens (swipe instead) */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => paginate(1)}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" aria-hidden="true" />
      </button>

      {/* Counter + dots */}
      <div className="relative flex flex-col items-center gap-3 mt-6">
        <span className="text-xs font-medium text-gray-600 tabular-nums" aria-live="polite">
          {currentIndex + 1} / {testimonials.length}
        </span>
        <div className="flex justify-center gap-2" role="tablist" aria-label="Sélectionner un témoignage">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Aller au témoignage ${index + 1}`}
              className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-blue-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
