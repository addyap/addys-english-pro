import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Check, X, RotateCcw, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { errorCorrectionExercises, getErrorCorrectionExerciseById } from '@/data/errorCorrectionExercises';

const ErrorCorrectionExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = getErrorCorrectionExerciseById(Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">Exercise not found.</p>
        <Link to="/exercices" className="text-primary hover:underline block text-center mt-4">
          Return to exercises
        </Link>
      </div>
    );
  }

  const currentIndex = errorCorrectionExercises.findIndex(ex => ex.id === exercise.id);
  const prevExercise = currentIndex > 0 ? errorCorrectionExercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < errorCorrectionExercises.length - 1 ? errorCorrectionExercises[currentIndex + 1] : null;

  const handleAnswerChange = (sentenceId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [sentenceId]: value }));
  };

  const handleSubmit = (sentenceId: number) => {
    setSubmitted(prev => ({ ...prev, [sentenceId]: true }));
  };

  const toggleHint = (sentenceId: number) => {
    setShowHints(prev => ({ ...prev, [sentenceId]: !prev[sentenceId] }));
  };

  const isCorrect = (sentenceId: number, correctSentence: string) => {
    const userAnswer = answers[sentenceId]?.trim().toLowerCase();
    const correct = correctSentence.trim().toLowerCase();
    return userAnswer === correct;
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted({});
    setShowHints({});
  };

  const completedCount = Object.keys(submitted).length;
  const correctCount = exercise.sentences.filter(s => 
    submitted[s.id] && isCorrect(s.id, s.correctSentence)
  ).length;

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700'
  };

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Error Correction | Antony Music English</title>
        <meta name="description" content={exercise.description} />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs 
          customTitle={exercise.title}
          customSection={{ label: 'Correction d\'erreurs', path: '/exercices' }}
        />

        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              {showTranslation ? exercise.titleFr : exercise.title}
            </h1>
            <div className="flex items-center gap-2">
              <Badge className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
              <Badge variant="outline">{exercise.theme}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground font-body">
            {showTranslation ? exercise.descriptionFr : exercise.description}
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTranslation(!showTranslation)}
            >
              {showTranslation ? 'English' : 'Français'}
            </Button>
            
            {completedCount > 0 && (
              <span className="text-sm text-muted-foreground">
                Score: {correctCount}/{completedCount}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {exercise.sentences.map((sentence, index) => (
            <Card key={sentence.id} className={`border-border ${
              submitted[sentence.id] 
                ? isCorrect(sentence.id, sentence.correctSentence)
                  ? 'border-green-300 bg-green-50/50'
                  : 'border-red-300 bg-red-50/50'
                : ''
            }`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">
                    Question {index + 1}
                  </CardTitle>
                  {!submitted[sentence.id] && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleHint(sentence.id)}
                      className="text-muted-foreground"
                    >
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {showHints[sentence.id] ? 'Hide hint' : 'Show hint'}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Find and correct the error:</p>
                  <p className="font-body text-foreground font-medium">
                    {sentence.incorrectSentence}
                  </p>
                </div>

                {showHints[sentence.id] && !submitted[sentence.id] && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Hint:</strong> {sentence.errorType}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Input
                    value={answers[sentence.id] || ''}
                    onChange={(e) => handleAnswerChange(sentence.id, e.target.value)}
                    placeholder="Type the corrected sentence..."
                    disabled={submitted[sentence.id]}
                    className="flex-1"
                  />
                  {!submitted[sentence.id] && (
                    <Button 
                      onClick={() => handleSubmit(sentence.id)}
                      disabled={!answers[sentence.id]?.trim()}
                    >
                      Check
                    </Button>
                  )}
                </div>

                {submitted[sentence.id] && (
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      {isCorrect(sentence.id, sentence.correctSentence) ? (
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        {!isCorrect(sentence.id, sentence.correctSentence) && (
                          <p className="text-sm">
                            <span className="text-red-700">Your answer:</span>{' '}
                            <span className="line-through">{answers[sentence.id]}</span>
                          </p>
                        )}
                        <p className="text-sm">
                          <span className="text-green-700">Correct answer:</span>{' '}
                          <strong>{sentence.correctSentence}</strong>
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      <p className="font-medium text-foreground mb-1">
                        Error type: {sentence.errorType}
                      </p>
                      <p className="text-muted-foreground">
                        {showTranslation ? sentence.explanationFr : sentence.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {completedCount === exercise.sentences.length && (
          <Card className="mt-8 border-primary bg-primary/5">
            <CardContent className="py-6 text-center">
              <h3 className="text-xl font-heading font-bold mb-2">
                Exercise Complete!
              </h3>
              <p className="text-lg mb-4">
                Your score: <strong className="text-primary">{correctCount}</strong> / {exercise.sentences.length}
              </p>
              <Button onClick={resetExercise} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          {prevExercise ? (
            <Link to={`/exercices/error-correction/${prevExercise.id}`}>
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                {prevExercise.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {nextExercise ? (
            <Link to={`/exercices/error-correction/${nextExercise.id}`}>
              <Button variant="outline">
                {nextExercise.title}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Link to="/exercices">
              <Button variant="outline">
                Back to Exercises
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ErrorCorrectionExerciseDetail;
