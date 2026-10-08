import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialCarousel.css';

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
  autoPlay = false,
  interval = 7000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef<number | null>(null);
  const dragOffset = useRef(0);

  const paginate = useCallback((direction: number) => {
    if (!testimonials.length) return;
    setCurrentIndex(index => (index + direction + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay || isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => paginate(1), interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, isPaused, interval, paginate]);

  if (!testimonials.length) return null;

  const finishDrag = (cancelled = false) => {
    if (startX.current === null) return;
    startX.current = null;
    if (!cancelled && Math.abs(dragOffset.current) >= 60) {
      paginate(dragOffset.current > 0 ? -1 : 1);
    }
    dragOffset.current = 0;
    setDragX(0);
  };

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          paginate(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
    >
      <span className="testimonial-source"><Quote size={16} aria-hidden="true" />Recommandation LinkedIn</span>
      {/* Grid overlap reserves the tallest quote's height, including long roles.
          Inactive slides retain layout space but are hidden visually and from AT. */}
      <div className="testimonial-stage" aria-live={autoPlay && !isPaused ? 'off' : 'polite'} aria-atomic="true">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className="testimonial-slide"
            data-active={index === currentIndex}
            aria-hidden={index !== currentIndex}
            aria-roledescription="diapositive"
            aria-label={`Témoignage ${index + 1} sur ${testimonials.length}`}
            style={index === currentIndex ? { transform: `translateX(${dragX}px)` } : undefined}
            onPointerDown={(event) => {
              if (event.button !== 0) return;
              startX.current = event.clientX;
              dragOffset.current = 0;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (startX.current === null) return;
              dragOffset.current = event.clientX - startX.current;
              setDragX(dragOffset.current);
            }}
            onPointerUp={() => finishDrag()}
            onPointerCancel={() => finishDrag(true)}
          >
            <blockquote>«&nbsp;{testimonial.quote}&nbsp;»</blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <p>{testimonial.role}</p>
              {testimonial.company && <p>{testimonial.company}</p>}
            </footer>
          </article>
        ))}
      </div>
      <div className="testimonial-controls">
        <button type="button" onClick={() => paginate(-1)} aria-label="Témoignage précédent"><ChevronLeft size={20} aria-hidden="true" /></button>
        <span className="testimonial-counter">{currentIndex + 1} / {testimonials.length}</span>
        <button type="button" onClick={() => paginate(1)} aria-label="Témoignage suivant"><ChevronRight size={20} aria-hidden="true" /></button>
      </div>
      <div className="testimonial-dots" role="group" aria-label="Sélectionner un témoignage">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-pressed={index === currentIndex}
            aria-label={`Aller au témoignage ${index + 1}`}
          ><span aria-hidden="true" /></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
