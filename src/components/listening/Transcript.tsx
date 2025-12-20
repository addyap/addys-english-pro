import React, { useMemo } from 'react';
import TranscriptWord from './TranscriptWord';
import { GlossaryEntry } from '@/data/listeningExercises';

interface TranscriptProps {
  text: string;
  glossary: Record<string, GlossaryEntry>;
}

const Transcript: React.FC<TranscriptProps> = ({ text, glossary }) => {
  // Split text into lines (dialogues) first, then tokenize each line
  const lines = useMemo(() => {
    return text.split('\n').map(line => ({
      tokens: line.split(/\s+/).filter(Boolean)
    }));
  }, [text]);

  return (
    <div className="space-y-3 text-lg font-body text-foreground">
      {lines.map((line, lineIndex) => (
        <p key={lineIndex} className="leading-relaxed">
          {line.tokens.map((token, tokenIndex) => (
            <TranscriptWord key={`${lineIndex}-${token}-${tokenIndex}`} word={token} glossary={glossary} />
          ))}
        </p>
      ))}
    </div>
  );
};

export default Transcript;
