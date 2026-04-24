import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Trophy, RotateCcw, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { allExercisesData as exercisesData, allExercisesList as exercisesList } from '../data/allExercises';
import ExerciseQuestion from '../components/ExerciseQuestion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { useExerciseProgress } from '@/hooks/useExerciseProgress';
import RelatedExercises, { type RelatedExerciseItem } from '@/components/exercise/RelatedExercises';
import ExerciseConversionCTA from '@/components/exercise/ExerciseConversionCTA';
import { buildExerciseTitle, buildExerciseMetaTitle } from '@/utils/exerciseSeoTitle';

const ExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const exerciseId = parseInt(id || '0');
  const exercise = exercisesData.find(ex => ex.id === exerciseId);

  useScrollTracking(`exercise-${exerciseId}`);
  useTimeTracking(`exercise-${exerciseId}`);

  const { saveResult, getResult } = useExerciseProgress();
  const previousResult = getResult(exerciseId.toString(), 'vocabulary');

  const [completedQuestions, setCompletedQuestions] = useState<Map<number, boolean>>(new Map());

  const handleQuestionComplete = useCallback((questionId: number, isCorrect: boolean) => {
    setCompletedQuestions(prev => {
      const newMap = new Map(prev);
      newMap.set(questionId, isCorrect);
      return newMap;
    });
  }, []);

  // Save progress when all questions are completed
  useEffect(() => {
    if (exercise && completedQuestions.size === exercise.questions.length) {
      const correctCount = Array.from(completedQuestions.values()).filter(Boolean).length;
      saveResult({
        exerciseId: exerciseId.toString(),
        exerciseType: 'vocabulary',
        score: correctCount,
        totalQuestions: exercise.questions.length,
        title: exercise.title,
      });
    }
  }, [completedQuestions, exercise, exerciseId, saveResult]);

  // Reset state and scroll when exercise ID changes
  useEffect(() => {
    setCompletedQuestions(new Map());
    window.scrollTo(0, 0);
  }, [exerciseId]);

  // Build the related-exercises pool from the same data source.
  // Declared before any early return so hook order stays stable.
  const relatedPool: RelatedExerciseItem[] = useMemo(
    () =>
      exercisesData.map((ex) => ({
        id: ex.id,
        title: ex.title,
        description: ex.description,
        path: `/exercices/${ex.id}`,
      })),
    []
  );

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Exercice non disponible</h1>
          <p className="text-muted-foreground mb-8">
            Cet exercice n'est pas encore disponible ou n'existe pas.
          </p>
          <Link to="/exercices" className="text-primary hover:underline">
            Retour aux exercices
          </Link>
        </div>
      </div>
    );
  }

  const progress = (completedQuestions.size / exercise.questions.length) * 100;
  const correctCount = Array.from(completedQuestions.values()).filter(Boolean).length;
  const previousExercise = exercisesList.find(ex => ex.id === exerciseId - 1);
  const nextExercise = exercisesList.find(ex => ex.id === exerciseId + 1);

  const handleResetExercise = () => {
    setCompletedQuestions(new Map());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build SEO/H1 title with structured, keyword-rich format.
  const seoTitleParts = {
    categoryLabel: 'English Exercise',
    topic: exercise.title,
  };
  const h1Title = buildExerciseTitle(seoTitleParts);
  const metaTitle = buildExerciseMetaTitle(seoTitleParts);

  // Pick the most relevant AI trainer based on simple keyword matching
  // against the exercise title + description. Local to this page on purpose.
  const pickAiTrainer = (title: string, description: string) => {
    const haystack = `${title} ${description}`.toLowerCase();
    const hasAny = (words: string[]) => words.some((w) => haystack.includes(w));

    if (hasAny(['email', 'writing', 'write', 'letter', 'essay', 'écrire', 'écrit', 'rédaction', 'lettre'])) {
      return { path: '/writing-coach', label: 'Try the Writing Coach' };
    }
    if (hasAny(['speaking', 'pronunciation', 'pronounc', 'oral', 'interview', 'presentation', 'prononciation', 'entretien', 'présentation'])) {
      return { path: '/conversation-trainer', label: 'Try the Speaking Trainer' };
    }
    if (hasAny(['grammar', 'tense', 'preposition', 'article', 'modal', 'conditional', 'passive', 'grammaire', 'temps', 'préposition', 'conditionnel'])) {
      return { path: '/grammar-explainer', label: 'Try the Grammar Explainer' };
    }
    return { path: '/conversation-trainer', label: 'Try the AI Trainer' };
  };
  const aiTrainer = pickAiTrainer(exercise.title, exercise.description);

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={exercise.description}
        canonicalPath={`/exercices/${exerciseId}`}
        keywords={["English exercise", exercise.title, "Grammaire anglaise", "Antony Addy"]}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              to="/exercices" 
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold">{exercise.id}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-heading">
                  {h1Title}
                </h1>
                <p className="text-lg text-primary-foreground/90 font-body">
                  {exercise.description}
                </p>
                {previousResult && (
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Meilleur score: {previousResult.score}/{previousResult.totalQuestions}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progression</span>
                <span className="text-sm font-medium">
                  {completedQuestions.size} / {exercise.questions.length}
                  {completedQuestions.size === exercise.questions.length && (
                    <span className="ml-2">({correctCount} correct)</span>
                  )}
                </span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6">
              {exercise.questions.map((question, index) => (
                <ExerciseQuestion
                  key={`${exerciseId}-${question.id}`}
                  question={question}
                  questionNumber={index + 1}
                  exerciseId={exerciseId}
                  onComplete={(isCorrect) => handleQuestionComplete(question.id, isCorrect)}
                />
              ))}
            </div>

            {/* Completion Section */}
            {progress === 100 && (
              <div className="mt-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-8 text-center">
                <Trophy className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Exercice terminé !
                </h2>
                <p className="text-green-700 mb-6">
                  Félicitations ! Vous avez complété toutes les questions.
                </p>
                <Button
                  onClick={handleResetExercise}
                  variant="outline"
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer l'exercice
                </Button>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center gap-4">
              {previousExercise ? (
                exercisesData.find(ex => ex.id === previousExercise.id) ? (
                  <Button
                    onClick={() => navigate(`/exercices/${previousExercise.id}`)}
                    variant="outline"
                    className="gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Exercice précédent</span>
                    <span className="sm:hidden">Précédent</span>
                  </Button>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Exercice {previousExercise.id} bientôt disponible
                  </div>
                )
              ) : (
                <div />
              )}

              {nextExercise ? (
                exercisesData.find(ex => ex.id === nextExercise.id) ? (
                  <Button
                    onClick={() => navigate(`/exercices/${nextExercise.id}`)}
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <span className="hidden sm:inline">Exercice suivant</span>
                    <span className="sm:hidden">Suivant</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Exercice {nextExercise.id} bientôt disponible
                  </div>
                )
              ) : (
                <div />
              )}
            </div>

            {/* Related exercises (SEO + retention) */}
            <RelatedExercises
              pool={relatedPool}
              currentId={exerciseId}
              limit={4}
            />

            {/* Conversion bridge to AI tools / contact */}
            <ExerciseConversionCTA
              aiToolPath={aiTrainer.path}
              aiToolLabel={aiTrainer.label}
            />
          </div>
        </section>

        {/* Soft CTA Section */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4 font-body">
              Ces exercices gratuits vous permettent de progresser en autonomie. Si vous souhaitez un accompagnement structuré pour atteindre vos objectifs professionnels, je peux vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                En savoir plus sur les formations →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExerciseDetail;
