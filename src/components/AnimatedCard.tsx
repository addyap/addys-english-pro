import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  hoverScale?: number;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  onClick,
  href,
  hoverScale = 1.02,
  delay = 0,
}) => {
  const baseClasses = 'block rounded-lg transition-shadow';
  const classes = `${baseClasses} ${className}`;

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, delay },
    whileHover: { scale: hoverScale },
    whileTap: onClick || href ? { scale: 0.98 } : {},
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      className={classes}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
