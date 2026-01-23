import React, { useState, useMemo } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Question } from '@/data/exercisesData';
import { shuffleArray } from '@/utils/shuffleArray';

interface ExerciseQuestionProps {
  question: Question;
  questionNumber: number;
  exerciseId?: number | string; // Add exerciseId to ensure unique memoization
  onComplete?: (isCorrect: boolean) => void;
}

const ExerciseQuestion: React.FC<ExerciseQuestionProps> = ({ question, questionNumber, exerciseId, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Reset state when question or exercise changes
  React.useEffect(() => {
    setSelectedAnswer('');
    setShowResult(false);
    setShowExplanation(false);
  }, [question.id, exerciseId]);
  
  // Shuffle options once when question or exercise changes - use question.options as dependency 
  // to ensure new options are shuffled when the actual question content changes
  const shuffledOptions = useMemo(() => shuffleArray(question.options), [question.options, exerciseId]);

  const handleCheck = () => {
    if (selectedAnswer) {
      setShowResult(true);
      const correct = selectedAnswer === question.correctAnswer;
      onComplete?.(correct);
    }
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setShowExplanation(false);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{questionNumber}</span>
        </div>
        
        <div className="flex-1">
          <p className="text-base font-medium text-foreground mb-4">{question.question}</p>
          
          <div className="space-y-4">
            <Select value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={showResult}>
              <SelectTrigger className="w-full max-w-xs bg-background">
                <SelectValue placeholder="Choisissez une réponse..." />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                {shuffledOptions.map((option, index) => (
                  <SelectItem key={index} value={option} className="cursor-pointer">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex flex-wrap gap-2">
              {!showResult && (
                <Button
                  onClick={handleCheck}
                  disabled={!selectedAnswer}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Vérifier
                </Button>
              )}
              
              {showResult && (
                <>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                  >
                    Réessayer
                  </Button>
                  
                  {question.explanation && (
                    <Button
                      onClick={() => setShowExplanation(!showExplanation)}
                      variant="outline"
                      className="gap-2"
                    >
                      <HelpCircle className="h-4 w-4" />
                      {showExplanation ? 'Masquer' : 'Explication'}
                    </Button>
                  )}
                </>
              )}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Correct !</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-800">
                        Incorrect. La bonne réponse est : <strong>{question.correctAnswer}</strong>
                      </span>
                    </>
                  )}
                </div>
                
                {showExplanation && question.explanation && (
                  <p className="text-sm text-muted-foreground mt-2 pl-7">
                    {question.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseQuestion;
