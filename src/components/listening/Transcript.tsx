import React, { useMemo } from 'react';
import TranscriptWord from './TranscriptWord';
import { GlossaryEntry } from '@/data/listeningExercises';

interface TranscriptProps {
  text: string;
  glossary: Record<string, GlossaryEntry>;
}

const Transcript: React.FC<TranscriptProps> = ({ text, glossary }) => {
  // Memoize tokenization for performance
  const tokens = useMemo(() => {
    // Split by spaces but preserve punctuation attached to words
    return text.split(/\s+/).filter(Boolean);
  }, [text]);

  return (
    <div className="leading-relaxed text-lg font-body text-foreground">
      {tokens.map((token, index) => (
        <TranscriptWord key={`${token}-${index}`} word={token} glossary={glossary} />
      ))}
    </div>
  );
};

export default Transcript;
