import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Clock,
  Award,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { getCloeExerciseById, cloeExercises, CloeQuestion } from '@/data/cloeExercises';
import { useCLOEProgress } from '@/hooks/useCLOEProgress';
import { seededShuffle } from '@/utils/shuffleArray';

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'A1': return 'bg-emerald-100 text-emerald-700';
    case 'A2': return 'bg-teal-100 text-teal-700';
    case 'B1': return 'bg-blue-100 text-blue-700';
    case 'B2': return 'bg-indigo-100 text-indigo-700';
    case 'C1': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

interface QuestionState {
  answered: boolean;
  correct: boolean | null;
  userAnswer: string;
  showExplanation: boolean;
}

const CLOEExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = getCloeExerciseById(id || '');
  const { saveResult } = useCLOEProgress();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [showResults, setShowResults] = useState(false);
  const [resultSaved, setResultSaved] = useState(false);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercice non trouvé</h1>
          <Link to="/exercices/cloe-preparation">
            <Button>Retour aux exercices CLOE</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = exercise.questions[currentQuestionIndex];
  const totalQuestions = exercise.questions.length;
  const answeredCount = Object.keys(questionStates).length;
  const correctCount = Object.values(questionStates).filter(s => s.correct).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    if (questionStates[currentQuestion.id]?.answered) return;

    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.some(a => a.toLowerCase() === answer.toLowerCase())
      : currentQuestion.correctAnswer.toLowerCase() === answer.toLowerCase();

    setQuestionStates(prev => ({
      ...prev,
      [currentQuestion.id]: {
        answered: true,
        correct: isCorrect,
        userAnswer: answer,
        showExplanation: true
      }
    }));
  };

  const toggleExplanation = (questionId: number) => {
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        showExplanation: !prev[questionId]?.showExplanation
      }
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setQuestionStates({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setResultSaved(false);
  };

  const currentState = questionStates[currentQuestion.id];

  // Find next/prev exercises
  const currentExerciseIndex = cloeExercises.findIndex(ex => ex.id === id);
  const prevExercise = currentExerciseIndex > 0 ? cloeExercises[currentExerciseIndex - 1] : null;
  const nextExercise = currentExerciseIndex < cloeExercises.length - 1 ? cloeExercises[currentExerciseIndex + 1] : null;

  // Save result when showing results
  useEffect(() => {
    if (showResults && !resultSaved && exercise) {
      saveResult({
        exerciseId: exercise.id,
        category: exercise.category,
        difficulty: exercise.difficulty,
        score: correctCount,
        totalQuestions: totalQuestions,
        title: exercise.title,
      });
      setResultSaved(true);
    }
  }, [showResults, resultSaved, exercise, correctCount, totalQuestions, saveResult]);

  if (showResults) {
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    return (
      <>
        <Helmet>
          <title>Résultats - {exercise.title} | Préparation CLOE</title>
        </Helmet>

        <div className="min-h-screen bg-background">

          <div className="max-w-3xl mx-auto px-4 py-10">
            <Card className="text-center">
              <CardHeader>
                <Award className={`h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-green-500' : percentage >= 50 ? 'text-amber-500' : 'text-red-500'}`} />
                <CardTitle className="text-2xl font-heading">
                  {percentage >= 70 ? 'Excellent travail !' : percentage >= 50 ? 'Bien joué !' : 'Continuez à pratiquer !'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-primary">{correctCount}/{totalQuestions}</div>
                <p className="text-muted-foreground">
                  Vous avez obtenu {percentage}% de bonnes réponses.
                </p>
                
                <Progress value={percentage} className="h-3" />

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button onClick={handleReset} variant="outline" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Recommencer
                  </Button>
                  <Link to="/exercices/cloe-preparation">
                    <Button className="gap-2">
                      Autres exercices
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Navigation to other exercises */}
                <div className="flex justify-between pt-6 border-t">
                  {prevExercise ? (
                    <Link to={`/exercices/cloe/${prevExercise.id}`}>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ArrowLeft className="h-4 w-4" />
                        Précédent
                      </Button>
                    </Link>
                  ) : <div />}
                  {nextExercise ? (
                    <Link to={`/exercices/cloe/${nextExercise.id}`}>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Suivant
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : <div />}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Préparation CLOE | Antony Addy</title>
        <meta name="description" content={exercise.description} />
        <link rel="canonical" href={`https://www.antonyaddy.com/exercices/cloe/${exercise.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* Header */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-6 border-b">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between mb-2">
              <Link to="/exercices/cloe-preparation" className="text-primary hover:underline flex items-center gap-1 text-sm">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Link>
              <Badge className={getDifficultyColor(exercise.difficulty)}>
                Niveau {exercise.difficulty}
              </Badge>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground font-heading mb-1">
              {exercise.title}
            </h1>
            <p className="text-muted-foreground text-sm">{exercise.titleFr}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-card border-b py-3">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Question {currentQuestionIndex + 1} sur {totalQuestions}
              </span>
              <span className="font-medium text-primary">
                {correctCount} correct{correctCount > 1 ? 's' : ''}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Content */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Badge variant="outline" className="capitalize">{currentQuestion.type.replace('-', ' ')}</Badge>
              </div>
              <CardTitle className="text-lg font-heading">
                {currentQuestion.question}
              </CardTitle>
              {currentQuestion.context && (
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
                  <p className="text-foreground font-mono text-sm whitespace-pre-wrap">
                    {currentQuestion.context}
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* MCQ Type */}
              {currentQuestion.type === 'mcq' && currentQuestion.options && (() => {
                // Shuffle options using question ID as seed for consistency
                const shuffledOptions = seededShuffle(currentQuestion.options, currentQuestion.id);
                return (
                  <RadioGroup 
                    value={currentState?.userAnswer || ''} 
                    onValueChange={handleAnswer}
                    disabled={currentState?.answered}
                  >
                    {shuffledOptions.map((option, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                          currentState?.answered
                            ? option === currentQuestion.correctAnswer
                              ? 'bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700'
                              : currentState.userAnswer === option
                                ? 'bg-red-50 border-red-300 dark:bg-red-900/20 dark:border-red-700'
                                : 'opacity-50'
                            : 'hover:bg-muted cursor-pointer'
                        }`}
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                        {currentState?.answered && option === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {currentState?.answered && currentState.userAnswer === option && option !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                );
              })()}

              {/* Fill-in-blank Type */}
              {currentQuestion.type === 'fill-blank' && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Tapez votre réponse..."
                      disabled={currentState?.answered}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAnswer((e.target as HTMLInputElement).value);
                        }
                      }}
                      className={currentState?.answered 
                        ? currentState.correct 
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : ''
                      }
                    />
                    {!currentState?.answered && (
                      <Button onClick={(e) => {
                        const input = (e.target as HTMLElement).parentElement?.querySelector('input');
                        if (input) handleAnswer(input.value);
                      }}>
                        Vérifier
                      </Button>
                    )}
                  </div>
                  {currentState?.answered && !currentState.correct && (
                    <p className="text-sm text-muted-foreground">
                      Réponse correcte : <span className="font-semibold text-green-600">{currentQuestion.correctAnswer}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Word Bank Type */}
              {currentQuestion.type === 'word-bank' && currentQuestion.options && (() => {
                // Shuffle word bank options using question ID as seed
                const shuffledWords = seededShuffle(currentQuestion.options, currentQuestion.id + 1000);
                return (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {shuffledWords.map((word, index) => (
                        <Button 
                          key={index}
                          variant="outline"
                          size="sm"
                          disabled={currentState?.answered}
                          onClick={() => handleAnswer(word)}
                          className={currentState?.answered 
                            ? Array.isArray(currentQuestion.correctAnswer) && currentQuestion.correctAnswer.includes(word)
                              ? 'bg-green-100 border-green-300 text-green-700'
                              : 'opacity-50'
                            : 'hover:bg-primary hover:text-primary-foreground'
                          }
                        >
                          {word}
                        </Button>
                      ))}
                    </div>
                    {currentState?.answered && (
                      <p className="text-sm text-muted-foreground">
                        Réponses : <span className="font-semibold text-green-600">
                          {Array.isArray(currentQuestion.correctAnswer) 
                            ? currentQuestion.correctAnswer.join(', ')
                            : currentQuestion.correctAnswer
                          }
                        </span>
                      </p>
                    )}
                  </div>
                );
              })()}

              {/* Explanation */}
              {currentState?.answered && (
                <div className="mt-6 pt-4 border-t">
                  <button 
                    onClick={() => toggleExplanation(currentQuestion.id)}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Info className="h-4 w-4" />
                    {currentState.showExplanation ? 'Masquer' : 'Voir'} l'explication
                    {currentState.showExplanation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  
                  {currentState.showExplanation && (
                    <div className="mt-3 p-4 bg-muted/50 rounded-lg space-y-2">
                      <p className="text-sm text-foreground">{currentQuestion.explanation}</p>
                      <p className="text-sm text-muted-foreground italic">{currentQuestion.explanationFr}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Précédent
                </Button>
                
                {currentState?.answered ? (
                  <Button onClick={handleNext} className="gap-1">
                    {currentQuestionIndex === totalQuestions - 1 ? 'Voir les résultats' : 'Suivant'}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" onClick={handleNext} className="gap-1">
                    Passer
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Question Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {exercise.questions.map((q, index) => {
              const state = questionStates[q.id];
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                    index === currentQuestionIndex
                      ? 'bg-primary text-primary-foreground'
                      : state?.answered
                        ? state.correct
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-red-100 text-red-700 border border-red-300'
                        : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Soft CTA */}
        <section className="py-8 bg-muted/30 border-t">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ces exercices sont inspirés du format CLOE. 
              <Link to="/exercices/cloe-preparation/overview" className="text-primary hover:underline ml-1">
                En savoir plus sur la certification
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/exercices/cloe-preparation" className="text-primary hover:underline">
                Tous les exercices CLOE
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/exercices" className="text-primary hover:underline">
                Grammaire et vocabulaire
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/offres-de-formation" className="text-primary hover:underline">
                Formations personnalisées
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CLOEExerciseDetail;
