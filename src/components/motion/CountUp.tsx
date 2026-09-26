import React, { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a number from 0 to `value` when it scrolls into view.
 *
 * SSG / no-JS safe: the final formatted value is the element's initial text
 * content, so it renders correctly in the static HTML and for users without
 * JS. The animation is pure progressive enhancement and is skipped entirely
 * under `prefers-reduced-motion`.
 */
interface CountUpProps {
  value: number;
  /** Text before the number, e.g. "€". */
  prefix?: string;
  /** Text after the number, e.g. "+" or " h". */
  suffix?: string;
  /** Animation length in ms. Default 1400. */
  duration?: number;
  className?: string;
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CountUp: React.FC<CountUpProps> = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value); // start at final: SSG-correct
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined" || prefersReduced()) {
      return; // leave the final value in place
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || done.current) return;
        done.current = true;
        io.disconnect();

        const start = performance.now();
        setDisplay(0);
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutExpo — fast then settles, feels premium
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
};

export default CountUp;
