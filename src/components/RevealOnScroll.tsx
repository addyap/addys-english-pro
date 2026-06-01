import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps children with a fade-in + slide-up animation triggered when
 * the element enters the viewport. Respects prefers-reduced-motion.
 */
const RevealOnScroll = ({ children, className = '', delay = 0, as: Tag = 'div' }: RevealOnScrollProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default RevealOnScroll;
