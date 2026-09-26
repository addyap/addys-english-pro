import React from 'react';
import { Reveal } from '@/components/motion/Reveal';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  hoverScale?: number;
  delay?: number;
}

/**
 * AnimatedCard — scroll-reveal entrance + a subtle lift/scale on hover.
 *
 * Reimplemented on the SSG-safe `Reveal` primitive (was framer-motion): Reveal
 * handles the entrance (no-JS-safe, reduced-motion aware) and the `.hover-lift`
 * utility adds the hover transform, driven by the `--hover-scale` custom
 * property so callers keep the same `hoverScale` prop. Same element, same
 * classes — layout is unchanged.
 */
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  onClick,
  href,
  hoverScale = 1.02,
  delay = 0,
}) => {
  const classes = `block rounded-lg hover-lift ${className}`;
  const style = { '--hover-scale': String(hoverScale) } as React.CSSProperties;

  if (href) {
    return (
      <Reveal as="a" href={href} className={classes} style={style} delay={delay}>
        {children}
      </Reveal>
    );
  }

  return (
    <Reveal
      as="div"
      onClick={onClick}
      className={classes}
      style={{ ...style, cursor: onClick ? 'pointer' : 'default' }}
      delay={delay}
    >
      {children}
    </Reveal>
  );
};

export default AnimatedCard;
