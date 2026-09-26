import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal — the site's signature scroll-in primitive.
 *
 * SSG / no-JS safe by construction: the reveal styles in index.css are scoped
 * to `html.js`, and that class is only added by an inline script once JS runs
 * (see index.html). So with JS disabled, broken, or still loading, the content
 * renders fully visible — nothing is ever hidden behind an animation that might
 * not fire. `prefers-reduced-motion` collapses the transform to a plain fade
 * (handled in CSS), and screen readers see the real DOM regardless.
 *
 * Usage:
 *   <Reveal>…</Reveal>                       // fade + rise
 *   <Reveal variant="scale" delay={80}>…</Reveal>
 *   <Reveal as="li" className="…">…</Reveal>
 *
 * For lists, wrap the container in <RevealStagger> and the children in
 * <Reveal> — the stagger index is injected automatically.
 */

type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Rendered element/component. Defaults to a div. */
  as?: React.ElementType;
  /** Motion flavour. Default "up". */
  variant?: RevealVariant;
  /** Extra delay in ms, added on top of any stagger index. */
  delay?: number;
  /** Re-trigger every time it enters (default: reveal once). */
  repeat?: boolean;
  /** Injected by <RevealStagger>; you rarely set this by hand. */
  index?: number;
  /**
   * Reveal is polymorphic via `as`, so it forwards element-specific props such
   * as `href` (anchor) or `to` (react-router Link). Those aren't on
   * HTMLAttributes, so allow extra props through to the rendered element.
   */
  [prop: string]: unknown;
}

/** Shared observer factory so we don't spin up one IO per element. */
function useInView(repeat: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true); // fail open: show it
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (!repeat) io.unobserve(entry.target);
          } else if (repeat) {
            setInView(false);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return { ref, inView };
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  as,
  variant = "up",
  delay = 0,
  repeat = false,
  index = 0,
  className = "",
  style,
  ...rest
}) => {
  const Tag = (as ?? "div") as React.ElementType;
  const { ref, inView } = useInView(repeat);

  // Stagger: 70ms per sibling, capped so long lists don't drag.
  const totalDelay = Math.min(index * 70, 560) + delay;

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-inview={inView ? "true" : "false"}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${totalDelay}ms`, ...style } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/**
 * RevealStagger — clones <Reveal> children with an incrementing `index` so a
 * row/grid animates in sequence. Non-Reveal children pass through untouched.
 */
interface RevealStaggerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const RevealStagger: React.FC<RevealStaggerProps> = ({
  children,
  as,
  ...rest
}) => {
  const Tag = (as ?? "div") as React.ElementType;
  let i = 0;
  const mapped = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Reveal) {
      return React.cloneElement(child as React.ReactElement<RevealProps>, {
        index: i++,
      });
    }
    return child;
  });
  return <Tag {...rest}>{mapped}</Tag>;
};

export default Reveal;
