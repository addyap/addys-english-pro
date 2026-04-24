import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Check, X, Lightbulb, RefreshCw, Eye, EyeOff } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { fillInTypingExercises, FillInTypingSentence } from '@/data/fillInTypingExercises';
import { TimedChallengeMode } from '@/components/TimedChallengeMode';
import { QuizTimer } from '@/components/QuizTimer';
import { GamificationStats } from '@/components/GamificationStats';
import { BadgeNotification } from '@/components/BadgeNotification';
import { useQuizTimer } from '@/hooks/useQuizTimer';
import { useGamification } from '@/hooks/useGamification';

interface AnswerState {
  [key: number]: {
    userAnswer: string;
    isSubmitted: boolean;
    isCorrect: boolean;
    showHint: boolean;
  };
}

const FillInTypingExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = fillInTypingExercises.find(e => e.id === id);

  const [answers, setAnswers] = useState<AnswerState>({});
  const [showTranslations, setShowTranslations] = useState(false);
  const [isTimedMode, setIsTimedMode] = useState(false);
  const [timedModeSeconds, setTimedModeSeconds] = useState(0);

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setIsTimedMode(false);
    setTimedModeSeconds(0);
  }, [id]);
  
  const { recordExerciseCompletion, newBadges, clearNewBadges } = useGamification();
  
  const handleTimeUp = useCallback(() => {
    // Auto-submit remaining answers when time is up
  }, []);

  const timer = useQuizTimer({ 
    totalSeconds: timedModeSeconds, 
    onTimeUp: handleTimeUp 
  });

  const handleInputChange = useCallback((sentenceId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [sentenceId]: {
        ...prev[sentenceId],
        userAnswer: value,
        isSubmitted: false,
        isCorrect: false,
        showHint: prev[sentenceId]?.showHint || false
      }
    }));
  }, []);

  const checkAnswer = useCallback((sentence: FillInTypingSentence) => {
    const userAnswer = answers[sentence.id]?.userAnswer?.trim().toLowerCase() || '';
    const correctAnswer = sentence.answer.toLowerCase();
    const acceptableAnswers = sentence.acceptableAnswers?.map(a => a.toLowerCase()) || [];
    
    const isCorrect = userAnswer === correctAnswer || acceptableAnswers.includes(userAnswer);

    setAnswers(prev => ({
      ...prev,
      [sentence.id]: {
        ...prev[sentence.id],
        isSubmitted: true,
        isCorrect
      }
    }));
  }, [answers]);

  const toggleHint = useCallback((sentenceId: number) => {
    setAnswers(prev => ({
      ...prev,
      [sentenceId]: {
        ...prev[sentenceId],
        showHint: !prev[sentenceId]?.showHint,
        userAnswer: prev[sentenceId]?.userAnswer || '',
        isSubmitted: prev[sentenceId]?.isSubmitted || false,
        isCorrect: prev[sentenceId]?.isCorrect || false
      }
    }));
  }, []);

  const handleReset = useCallback(() => {
    setAnswers({});
    setIsTimedMode(false);
    timer.reset();
  }, [timer]);

  const startTimedMode = useCallback((seconds: number) => {
    setAnswers({});
    setTimedModeSeconds(seconds);
    setIsTimedMode(true);
    setTimeout(() => timer.start(), 100);
  }, [timer]);

  const stats = useMemo(() => {
    if (!exercise) return { correct: 0, total: 0, percentage: 0, answered: 0 };
    const submitted = Object.values(answers).filter(a => a.isSubmitted);
    const correct = submitted.filter(a => a.isCorrect).length;
    return {
      correct,
      total: exercise.sentences.length,
      answered: submitted.length,
      percentage: Math.round((correct / exercise.sentences.length) * 100)
    };
  }, [answers, exercise]);

  // Record completion when all answered
  useEffect(() => {
    if (exercise && stats.answered === stats.total && stats.total > 0) {
      recordExerciseCompletion(stats.correct, stats.total, isTimedMode);
      if (isTimedMode) {
        timer.stop();
      }
    }
  }, [stats.answered, stats.total, stats.correct, exercise, isTimedMode, recordExerciseCompletion, timer]);

  const renderSentenceWithBlank = (sentence: FillInTypingSentence) => {
    const parts = sentence.sentence.split('___');
    const state = answers[sentence.id];
    const isSubmitted = state?.isSubmitted;
    const isCorrect = state?.isCorrect;

    return (
      <div className="flex flex-wrap items-center gap-1 text-lg">
        <span>{parts[0]}</span>
        <div className="inline-flex items-center">
          <Input
            className={`w-32 inline-block mx-1 text-center font-medium ${
              isSubmitted
                ? isCorrect
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-red-500 bg-red-50 text-red-700'
                : ''
            }`}
            value={state?.userAnswer || ''}
            onChange={(e) => handleInputChange(sentence.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isSubmitted) {
                checkAnswer(sentence);
              }
            }}
            disabled={isSubmitted && isCorrect}
            placeholder="..."
          />
          {isSubmitted && (
            <span className="ml-1">
              {isCorrect ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
            </span>
          )}
        </div>
        <span>{parts[1]}</span>
      </div>
    );
  };

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const difficultyColor = {
    easy: 'bg-green-500/10 text-green-700',
    medium: 'bg-amber-500/10 text-amber-700',
    hard: 'bg-red-500/10 text-red-700'
  };

  return (
    <>
      <SEOHead
        title={`${exercise.title} - Exercices à Taper | Antony Addy`}
        description={exercise.description}
        canonicalUrl={`https://www.antonyaddy.com/exercices/fill-in-typing/${id}`}
      />

      <div className="min-h-screen bg-background py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link to="/exercices" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold font-heading">{exercise.title}</h1>
              <Badge className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
            </div>
            <p className="text-muted-foreground">{exercise.descriptionFr}</p>
          </div>

          {/* Timer for Timed Mode */}
          {isTimedMode && timer.isRunning && (
            <div className="mb-6 flex justify-center">
              <QuizTimer
                formattedTime={timer.formattedTime}
                progress={timer.progress}
                isRunning={timer.isRunning}
                isPaused={timer.isPaused}
                isLow={timer.isLow}
                isCritical={timer.isCritical}
                isTimeUp={timer.isTimeUp}
                showControls={true}
                onPause={timer.pause}
                onResume={timer.resume}
              />
            </div>
          )}

          {/* Progress & Controls */}
          <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex-1 min-w-48">
              <div className="flex justify-between text-sm mb-2">
                <span>Progression</span>
                <span className="text-green-600">{stats.correct} / {stats.total} correct</span>
              </div>
              <Progress value={stats.percentage} className="h-2" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {!isTimedMode && stats.answered === 0 && (
                <TimedChallengeMode
                  questionCount={exercise.sentences.length}
                  onStart={startTimedMode}
                />
              )}
              <Button variant="outline" size="sm" onClick={() => setShowTranslations(!showTranslations)}>
                {showTranslations ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                Traductions
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Recommencer
              </Button>
            </div>
          </div>

          {/* Gamification Stats (compact) */}
          <div className="mb-6">
            <GamificationStats compact />
          </div>

          {/* Sentences */}
          <div className="space-y-4">
            {exercise.sentences.map((sentence, index) => {
              const state = answers[sentence.id];
              const isSubmitted = state?.isSubmitted;
              const isCorrect = state?.isCorrect;

              return (
                <Card key={sentence.id} className={`transition-colors ${
                  isSubmitted ? (isCorrect ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50') : ''
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                      <div className="flex-1 space-y-3">
                        {renderSentenceWithBlank(sentence)}

                        {/* Hint */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleHint(sentence.id)}
                            className="text-muted-foreground"
                          >
                            <Lightbulb className="h-4 w-4 mr-1" />
                            {state?.showHint ? 'Masquer l\'indice' : 'Voir l\'indice'}
                          </Button>
                          {!isSubmitted && (
                            <Button
                              size="sm"
                              onClick={() => checkAnswer(sentence)}
                              disabled={!state?.userAnswer?.trim()}
                            >
                              Vérifier
                            </Button>
                          )}
                        </div>

                        {state?.showHint && (
                          <p className="text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                            💡 {sentence.hint} / {sentence.hintFr}
                          </p>
                        )}

                        {/* Feedback */}
                        {isSubmitted && !isCorrect && (
                          <p className="text-sm text-red-600">
                            La bonne réponse est : <strong>{sentence.answer}</strong>
                            {sentence.acceptableAnswers && sentence.acceptableAnswers.length > 0 && (
                              <span className="text-muted-foreground"> (ou : {sentence.acceptableAnswers.join(', ')})</span>
                            )}
                          </p>
                        )}

                        {/* Translation */}
                        {showTranslations && (
                          <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-3">
                            {sentence.translation}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Completion */}
          {stats.answered === stats.total && (
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  {stats.percentage >= 80 ? 'Excellent travail ! 🎉' : stats.percentage >= 50 ? 'Bien joué ! 👍' : 'Continuez à pratiquer ! 💪'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  Score : {stats.correct} / {stats.total} ({stats.percentage}%)
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleReset}>
                    Recommencer
                  </Button>
                  <Link to="/exercices">
                    <Button>Autres exercices</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other Exercises */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Autres exercices de saisie</h3>
            <div className="grid gap-3">
              {fillInTypingExercises.filter(e => e.id !== id).slice(0, 3).map(ex => (
                <Link key={ex.id} to={`/exercices/fill-in-typing/${ex.id}`}>
                  <Card className="hover:bg-accent/5 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">{ex.title}</p>
                        <p className="text-sm text-muted-foreground">{ex.sentences.length} phrases</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Badge Notification */}
      <BadgeNotification badges={newBadges} onClose={clearNewBadges} />
    </>
  );
};

export default FillInTypingExerciseDetail;
