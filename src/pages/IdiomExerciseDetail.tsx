import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, BookOpen, Lightbulb, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getIdiomExerciseById } from '@/data/idiomExercises';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { shuffleArray } from '@/utils/shuffleArray';
import ExerciseNotAvailable from '@/components/exercise/ExerciseNotAvailable';

const IdiomExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = getIdiomExerciseById(Number(id));
  
  useScrollTracking(`idiom-exercise-${id}`);
  useTimeTracking(`idiom-exercise-${id}`);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);

  // Reset state when exercise ID changes
  React.useEffect(() => {
    setAnswers({});
    setShowResults(false);
  }, [id]);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const handleAnswer = (questionId: number, answer: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  // Shuffle options for each question once per exercise load
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    exercise.questions.forEach(q => {
      map[q.id] = shuffleArray(q.options);
    });
    return map;
  }, [id, exercise.questions]);

  const score = exercise.questions.filter(
    q => answers[q.id] === q.correctAnswer
  ).length;

  const allAnswered = exercise.questions.every(q => answers[q.id]);

  return (
    <>
      <SEOHead
        title={`${exercise.title} | Idioms & Expressions | Antony Addy`}
        description={exercise.description}
        canonicalUrl={`https://www.antonyaddy.com/exercices/idioms/${id}`}
        keywords={["english idioms", "expressions anglaises", "idioms exercise", exercise.title.toLowerCase()]}
      />

      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/exercices" 
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux Idioms
            </Link>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground font-heading">{exercise.title}</h1>
                <p className="text-muted-foreground mt-2">{exercise.description}</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                {exercise.idioms.length} expressions
              </Badge>
            </div>
          </div>

          {/* Idioms Learning Section */}
          <Card className="mb-8 border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Expressions à apprendre
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTranslations(!showTranslations)}
                  className="gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {showTranslations ? 'Masquer FR' : 'Afficher FR'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exercise.idioms.map((idiom) => (
                  <div key={idiom.id} className="p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {idiom.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-1">"{idiom.idiom}"</h3>
                        <p className="text-muted-foreground mb-2">{idiom.meaning}</p>
                        {showTranslations && (
                          <p className="text-primary/80 text-sm italic mb-2">🇫🇷 {idiom.meaningFr}</p>
                        )}
                        <div className="mt-3 p-3 bg-background rounded border border-border/50">
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Example:</span> {idiom.example}
                          </p>
                          {showTranslations && (
                            <p className="text-sm text-muted-foreground mt-1 italic">
                              {idiom.exampleFr}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                Testez vos connaissances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {exercise.questions.map((question, index) => {
                  const isAnswered = answers[question.id] !== undefined;
                  const isCorrect = answers[question.id] === question.correctAnswer;

                  return (
                    <div 
                      key={`${id}-${question.id}`} 
                      className={`p-4 rounded-lg border ${
                        showResults 
                          ? isCorrect 
                            ? 'border-green-500 bg-green-50 dark:bg-green-950/20' 
                            : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                          : 'border-border bg-card'
                      }`}
                    >
                      <p className="font-medium text-foreground mb-3">
                        <span className="text-primary font-bold mr-2">{index + 1}.</span>
                        {question.question}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {shuffledOptionsMap[question.id].map((option) => {
                          const isSelected = answers[question.id] === option;
                          const isCorrectOption = option === question.correctAnswer;

                          return (
                            <button
                              key={option}
                              onClick={() => handleAnswer(question.id, option)}
                              disabled={showResults}
                              className={`p-3 rounded-lg border text-left transition-all ${
                                showResults
                                  ? isCorrectOption
                                    ? 'border-green-500 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                    : isSelected
                                      ? 'border-red-500 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                                      : 'border-border bg-muted/50 text-muted-foreground'
                                  : isSelected
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {showResults && isCorrectOption && (
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                )}
                                {showResults && isSelected && !isCorrectOption && (
                                  <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                                )}
                                <span>{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {showResults && (
                        <p className={`mt-3 text-sm ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {showResults ? (
                  <>
                    <div className="text-center sm:text-left">
                      <p className="text-2xl font-bold text-foreground">
                        Score: {score}/{exercise.questions.length}
                      </p>
                      <p className="text-muted-foreground">
                        {score === exercise.questions.length 
                          ? "Parfait ! 🎉" 
                          : score >= exercise.questions.length * 0.7 
                            ? "Bien joué ! 👍" 
                            : "Continuez à pratiquer ! 💪"}
                      </p>
                    </div>
                    <Button onClick={handleReset} variant="outline" className="gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Recommencer
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!allAnswered}
                    className="w-full sm:w-auto"
                  >
                    Vérifier mes réponses
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            {exercise.id > 1 && (
              <Link to={`/exercices/idioms/${exercise.id - 1}`}>
                <Button variant="outline">← Exercice précédent</Button>
              </Link>
            )}
            <div className="flex-1" />
            {exercise.id < 6 && (
              <Link to={`/exercices/idioms/${exercise.id + 1}`}>
                <Button variant="outline">Exercice suivant →</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IdiomExerciseDetail;
