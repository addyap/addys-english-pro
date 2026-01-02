
import React, { useState, useEffect, useCallback, memo } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
  /** Show full text immediately for better LCP - animation starts after */
  prioritizeLCP?: boolean;
}

export const TypingText = memo<TypingTextProps>(({
  texts,
  speed = 60,
  pause = 1200,
  className = "",
  prioritizeLCP = false,
}) => {
  const [displayedText, setDisplayedText] = useState(prioritizeLCP ? texts[0] : "");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(prioritizeLCP ? texts[0].length : 0);
  const [isAnimating, setIsAnimating] = useState(!prioritizeLCP);

  // Start animation after initial render for LCP optimization
  useEffect(() => {
    if (prioritizeLCP && !isAnimating) {
      // Wait for LCP to complete before starting animation cycle
      const lcpTimer = setTimeout(() => {
        setIsAnimating(true);
        setCharIndex(texts[0].length);
      }, 2500);
      return () => clearTimeout(lcpTimer);
    }
  }, [prioritizeLCP, isAnimating, texts]);

  useEffect(() => {
    if (!isAnimating) return;
    
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (texts.length > 1) {
      // Only cycle if there are multiple texts
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
        setDisplayedText("");
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, pause, isAnimating]);

  return (
    <span className={className}>
      {displayedText}
      <span className="blinking-cursor" aria-hidden="true">|</span>
    </span>
  );
});
