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
    <div className="space-y-2 text-lg font-body text-foreground">
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className={`flex items-start gap-3 py-2 px-3 rounded-lg transition-colors ${
            lineIndex % 2 === 0 
              ? 'bg-muted/30' 
              : 'bg-transparent'
          }`}
        >
          <span className="text-primary font-medium select-none mt-0.5">—</span>
          <p className="leading-relaxed flex-1">
            {line.tokens.map((token, tokenIndex) => (
              <TranscriptWord key={`${lineIndex}-${token}-${tokenIndex}`} word={token} glossary={glossary} />
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Transcript;
