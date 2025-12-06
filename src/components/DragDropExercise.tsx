import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, RotateCcw, GripVertical, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DragDropExercise } from '@/data/dragDropExercises';

interface DragDropExerciseProps {
  exercise: DragDropExercise;
  onComplete?: (score: number, total: number) => void;
}

interface SentenceItemProps {
  sentence: DragDropExercise['sentences'][0];
  index: number;
  showResult: boolean;
  isCorrect: boolean;
  currentOrder: number[];
  onReorder: (newOrder: number[]) => void;
  showTranslation: boolean;
}

function SentenceItem({ sentence, index, showResult, isCorrect, currentOrder, onReorder, showTranslation }: SentenceItemProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (wordIndex: number) => (e: React.DragEvent) => {
    setDraggedIndex(wordIndex);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (targetIndex: number) => (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newOrder = [...currentOrder];
    const [removed] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, removed);
    onReorder(newOrder);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const orderedWords = currentOrder.map(i => sentence.words[i]);

  return (
    <div className={cn(
      "p-4 rounded-lg border-2 transition-all",
      showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950/20",
      showResult && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950/20",
      !showResult && "border-border bg-card"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="outline" className="text-xs">{index + 1}</Badge>
        {showResult && (
          isCorrect 
            ? <Check className="h-4 w-4 text-green-600" />
            : <X className="h-4 w-4 text-red-600" />
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 min-h-[48px]">
        {orderedWords.map((word, idx) => (
          <div
            key={`${idx}-${word}`}
            draggable={!showResult}
            onDragStart={handleDragStart(idx)}
            onDragOver={handleDragOver}
            onDrop={handleDrop(idx)}
            onDragEnd={handleDragEnd}
            className={cn(
              "px-3 py-2 rounded-md border font-medium transition-all select-none",
              !showResult && "cursor-grab active:cursor-grabbing hover:border-primary hover:bg-primary/5",
              showResult && "cursor-default",
              draggedIndex === idx && "opacity-50 scale-95",
              "bg-background flex items-center gap-1"
            )}
          >
            {!showResult && <GripVertical className="h-3 w-3 text-muted-foreground" />}
            {word}
          </div>
        ))}
      </div>

      {showResult && !isCorrect && (
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-1">Bonne réponse :</p>
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            {sentence.correctOrder.map(i => sentence.words[i]).join(' ')}
          </p>
        </div>
      )}

      {showTranslation && (
        <p className="mt-2 text-sm text-muted-foreground italic">
          {sentence.translation}
        </p>
      )}
    </div>
  );
}

export function DragDropExerciseComponent({ exercise, onComplete }: DragDropExerciseProps) {
  const [answers, setAnswers] = useState<number[][]>(() => 
    exercise.sentences.map((s) => s.words.map((_, i) => i))
  );
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showTranslations, setShowTranslations] = useState(false);

  const checkAnswers = useCallback(() => {
    let correct = 0;
    exercise.sentences.forEach((sentence, idx) => {
      const isCorrect = answers[idx].every((val, i) => val === sentence.correctOrder[i]);
      if (isCorrect) correct++;
    });
    setScore(correct);
    setShowResults(true);
    onComplete?.(correct, exercise.sentences.length);
  }, [answers, exercise.sentences, onComplete]);

  const resetExercise = useCallback(() => {
    setAnswers(exercise.sentences.map((s) => s.words.map((_, i) => i)));
    setShowResults(false);
    setScore(0);
  }, [exercise.sentences]);

  const updateOrder = (sentenceIndex: number) => (newOrder: number[]) => {
    setAnswers(prev => {
      const updated = [...prev];
      updated[sentenceIndex] = newOrder;
      return updated;
    });
  };

  const isCorrect = (sentenceIndex: number) => {
    const sentence = exercise.sentences[sentenceIndex];
    return answers[sentenceIndex].every((val, i) => val === sentence.correctOrder[i]);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <CardTitle className="text-xl">{exercise.title}</CardTitle>
            <CardDescription className="mt-1">{exercise.description}</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTranslations(!showTranslations)}
            className="gap-2"
          >
            <Languages className="h-4 w-4" />
            {showTranslations ? 'Masquer' : 'Traductions'}
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Glissez-déposez les mots pour former des phrases correctes.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {exercise.sentences.map((sentence, idx) => (
          <SentenceItem
            key={sentence.id}
            sentence={sentence}
            index={idx}
            showResult={showResults}
            isCorrect={isCorrect(idx)}
            currentOrder={answers[idx]}
            onReorder={updateOrder(idx)}
            showTranslation={showTranslations}
          />
        ))}

        {showResults && (
          <div className={cn(
            "p-4 rounded-lg text-center",
            score === exercise.sentences.length 
              ? "bg-green-100 dark:bg-green-950/30" 
              : "bg-amber-100 dark:bg-amber-950/30"
          )}>
            <p className="text-lg font-semibold">
              Score : {score} / {exercise.sentences.length}
            </p>
            <p className="text-sm text-muted-foreground">
              {score === exercise.sentences.length 
                ? "Parfait ! Toutes les phrases sont correctes !" 
                : `${exercise.sentences.length - score} phrase(s) à revoir.`}
            </p>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {!showResults ? (
            <Button onClick={checkAnswers} className="flex-1">
              <Check className="h-4 w-4 mr-2" />
              Vérifier
            </Button>
          ) : (
            <Button onClick={resetExercise} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
