import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pointer-drag (replaces framer-motion's drag). Refs drive the gesture so it
  // is frame-independent — the guard and offset never depend on async state
  // that hasn't flushed between pointerdown and the first move. State mirrors
  // them only for rendering: `dragX` for the live transform, `dragging` to
  // suspend the slide-in animation, `snapBack` to ease home under threshold.
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [snapBack, setSnapBack] = useState(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const dxRef = useRef(0);
  const SWIPE_THRESHOLD = 60; // px

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  }, [testimonials.length]);

  const onPointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
    dxRef.current = 0;
    draggingRef.current = true;
    setDragging(true);
    setSnapBack(false);
    setIsPaused(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    dxRef.current = e.clientX - startXRef.current;
    setDragX(dxRef.current);
  };
  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    setIsPaused(false);
    const dx = dxRef.current;
    setDragX(0);
    if (dx <= -SWIPE_THRESHOLD) {
      paginate(1);
    } else if (dx >= SWIPE_THRESHOLD) {
      paginate(-1);
    } else {
      // Below threshold: ease back to centre.
      setSnapBack(true);
      window.setTimeout(() => setSnapBack(false), 300);
    }
  };

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
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm"
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
        <Quote className="w-20 h-20 md:w-24 md:h-24 text-accent" />
      </div>

      {/* "Avis client" badge */}
      <div className="relative flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
          <Quote className="w-3.5 h-3.5" aria-hidden="true" />
          Recommandation LinkedIn
        </span>
      </div>

      {/* Stable-height carousel content */}
      <div
        className="relative min-h-[340px] sm:min-h-[300px] md:min-h-[280px] flex items-center"
        aria-atomic="true"
      >
        <article
          key={currentIndex}
          className="carousel-slide absolute inset-0 w-full px-2 sm:px-6 flex flex-col justify-center text-center cursor-grab active:cursor-grabbing select-none"
          data-dir={direction}
          data-dragging={dragging ? 'true' : 'false'}
          style={{
            transform: dragX ? `translateX(${dragX}px)` : undefined,
            transition: snapBack ? 'transform .3s cubic-bezier(.16,1,.3,1)' : undefined,
            touchAction: 'pan-y',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-roledescription="diapositive"
          aria-label={`Témoignage ${currentIndex + 1} sur ${testimonials.length}`}
        >
          {/* No star row here. These quotes are LinkedIn recommendations, which
              carry no rating — painting five stars on each one invents a score
              the author never gave. See the note in src/pages/Testimonials.tsx. */}
          <blockquote className="text-base sm:text-lg md:text-2xl text-foreground italic mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-3xl mx-auto px-2">
            «&nbsp;{current.quote}&nbsp;»
          </blockquote>

          <footer className="space-y-1">
            <p className="font-bold text-base md:text-lg text-foreground">{current.name}</p>
            <p className="text-sm md:text-base text-muted-foreground">{current.role}</p>
            {current.company && (
              <p className="text-sm text-accent font-medium">{current.company}</p>
            )}
          </footer>
        </article>
      </div>

      {/* Navigation buttons — hidden on small screens (swipe instead) */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent items-center justify-center"
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => paginate(1)}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent items-center justify-center"
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" aria-hidden="true" />
      </button>

      {/* Counter + dots */}
      <div className="relative flex flex-col items-center gap-3 mt-6">
        <span className="text-xs font-medium text-muted-foreground tabular-nums" aria-live="polite">
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
              className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-accent ${
                index === currentIndex
                  ? 'w-8 h-2 bg-accent'
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
