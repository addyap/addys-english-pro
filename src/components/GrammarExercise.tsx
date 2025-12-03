import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Exercise, Question } from '@/data/exercisesData';

interface GrammarExerciseProps {
  exercise: Exercise;
}

const GrammarExercise: React.FC<GrammarExerciseProps> = ({ exercise }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCheck = () => {
    let correctCount = 0;
    exercise.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = exercise.questions.every(q => answers[q.id]);

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-lg font-heading">{exercise.title}</CardTitle>
          {showResults && (
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              score >= 8 ? 'bg-green-100 text-green-700' : 
              score >= 5 ? 'bg-yellow-100 text-yellow-700' : 
              'bg-red-100 text-red-700'
            }`}>
              {score}/{exercise.questions.length}
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground font-body">{exercise.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {exercise.questions.map((question, index) => (
          <QuestionItem
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            showResults={showResults}
            onAnswerChange={(value) => handleAnswerChange(question.id, value)}
          />
        ))}

        <div className="flex gap-3 pt-4">
          {!showResults ? (
            <Button 
              onClick={handleCheck} 
              disabled={!allAnswered}
              className="font-body"
            >
              Check Answers
            </Button>
          ) : (
            <Button onClick={handleReset} variant="outline" className="font-body">
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface QuestionItemProps {
  question: Question;
  index: number;
  answer?: string;
  showResults: boolean;
  onAnswerChange: (value: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  index,
  answer,
  showResults,
  onAnswerChange
}) => {
  const isCorrect = answer === question.correctAnswer;

  return (
    <div className={`p-4 rounded-lg border ${
      showResults 
        ? isCorrect 
          ? 'border-green-300 bg-green-50' 
          : 'border-red-300 bg-red-50'
        : 'border-border bg-card'
    }`}>
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
          {index + 1}
        </span>
        <div className="flex-1 space-y-2">
          <p className="font-body text-foreground">{question.question}</p>
          
          <Select
            value={answer || ''}
            onValueChange={onAnswerChange}
            disabled={showResults}
          >
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select answer..." />
            </SelectTrigger>
            <SelectContent>
              {question.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {showResults && (
            <div className="flex items-start gap-2 mt-2">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              )}
              <div className="text-sm font-body">
                {!isCorrect && (
                  <p className="text-red-700">
                    Correct answer: <strong>{question.correctAnswer}</strong>
                  </p>
                )}
                {question.explanation && (
                  <p className="text-muted-foreground mt-1">{question.explanation}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrammarExercise;
