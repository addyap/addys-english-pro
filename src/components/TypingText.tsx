
import React, { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 60,
  pause = 1200,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
        setDisplayedText("");
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, pause]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};
