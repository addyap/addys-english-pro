import React, { useMemo } from 'react';
import { useListeningLanguage } from '@/contexts/ListeningLanguageContext';
import { GlossaryEntry } from '@/data/listeningExercises';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TranscriptWordProps {
  word: string;
  glossary: Record<string, GlossaryEntry>;
}

// Normalize a word for glossary lookup: lowercase, strip punctuation
const normalizeWord = (word: string): string => {
  return word.toLowerCase().replace(/[.,!?;:'"()\-–—]/g, '');
};

const TranscriptWord: React.FC<TranscriptWordProps> = ({ word, glossary }) => {
  const { language } = useListeningLanguage();
  
  const normalizedWord = useMemo(() => normalizeWord(word), [word]);
  const glossaryEntry = glossary[normalizedWord];
  
  if (!glossaryEntry) {
    return <span>{word} </span>;
  }

  const translation = glossaryEntry[language];

  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <span
          className="underline decoration-dotted decoration-primary/60 underline-offset-2 cursor-help hover:bg-primary/10 transition-colors rounded px-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
          tabIndex={0}
          role="button"
          aria-label={`${word}: ${translation}`}
        >
          {word}{' '}
        </span>
      </TooltipTrigger>
      <TooltipContent 
        className="bg-popover text-popover-foreground border border-border shadow-lg z-tooltip"
        sideOffset={5}
      >
        <p className="font-medium">{translation}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TranscriptWord;
