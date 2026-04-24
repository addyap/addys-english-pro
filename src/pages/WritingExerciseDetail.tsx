import { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RotateCcw, Languages, Lightbulb, PenLine } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import { 
  sentenceTransformExercises, 
  errorCorrectionExercises, 
  fillParagraphExercises 
} from '@/data/writingExercises';

// Sentence Transformation Component
function SentenceTransformExercise({ exerciseId }: { exerciseId: number }) {
  const exercise = sentenceTransformExercises.find(e => e.id === exerciseId);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setShowResults(false);
    setShowHints({});
  }, [exerciseId]);

  if (!exercise) return <ExerciseNotAvailable />;

  const checkAnswer = (userAnswer: string, correctAnswer: string) => {
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  };

  const handleCheck = () => setShowResults(true);
  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setShowHints({});
  };

  const score = exercise.sentences.filter(s => checkAnswer(answers[s.id] || '', s.answer)).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{exercise.title}</CardTitle>
        <CardDescription>{exercise.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {exercise.sentences.map((sentence, idx) => {
          const isCorrect = checkAnswer(answers[sentence.id] || '', sentence.answer);
          return (
            <div key={`${exerciseId}-${sentence.id}`} className={cn(
              "p-4 rounded-lg border-2 transition-all",
              showResults && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950/20",
              showResults && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950/20",
              !showResults && "border-border"
            )}>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{idx + 1}</Badge>
                <Badge className="bg-primary/10 text-primary">{sentence.instruction}</Badge>
                {showResults && (isCorrect ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />)}
              </div>
              <p className="font-medium mb-3">{sentence.original}</p>
              <Input
                placeholder="Votre réponse..."
                value={answers[sentence.id] || ''}
                onChange={(e) => setAnswers(prev => ({ ...prev, [sentence.id]: e.target.value }))}
                disabled={showResults}
                className={cn(showResults && isCorrect && "border-green-500", showResults && !isCorrect && "border-red-500")}
              />
              {showResults && !isCorrect && (
                <div className="mt-2 text-sm">
                  <p className="text-green-700 dark:text-green-400 font-medium">{sentence.answer}</p>
                  <p className="text-muted-foreground mt-1">{sentence.explanation}</p>
                </div>
              )}
            </div>
          );
        })}

        {showResults && (
          <div className={cn("p-4 rounded-lg text-center", score === exercise.sentences.length ? "bg-green-100 dark:bg-green-950/30" : "bg-amber-100 dark:bg-amber-950/30")}>
            <p className="text-lg font-semibold">Score : {score} / {exercise.sentences.length}</p>
          </div>
        )}

        <div className="flex gap-3">
          {!showResults ? (
            <Button onClick={handleCheck} className="flex-1"><Check className="h-4 w-4 mr-2" />Vérifier</Button>
          ) : (
            <Button onClick={handleReset} variant="outline" className="flex-1"><RotateCcw className="h-4 w-4 mr-2" />Recommencer</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Error Correction Component
function ErrorCorrectionExercise({ exerciseId }: { exerciseId: number }) {
  const exercise = errorCorrectionExercises.find(e => e.id === exerciseId);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setShowResults(false);
  }, [exerciseId]);

  if (!exercise) return <div>Exercise not found</div>;

  const checkAnswer = (userAnswer: string, correctAnswer: string) => {
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  };

  const handleCheck = () => setShowResults(true);
  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const score = exercise.sentences.filter(s => checkAnswer(answers[s.id] || '', s.correct)).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{exercise.title}</CardTitle>
        <CardDescription>{exercise.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {exercise.sentences.map((sentence, idx) => {
          const isCorrect = checkAnswer(answers[sentence.id] || '', sentence.correct);
          return (
            <div key={`${exerciseId}-${sentence.id}`} className={cn(
              "p-4 rounded-lg border-2 transition-all",
              showResults && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950/20",
              showResults && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950/20",
              !showResults && "border-border"
            )}>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{idx + 1}</Badge>
                <Badge variant="destructive" className="text-xs">{sentence.errorType}</Badge>
                {showResults && (isCorrect ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />)}
              </div>
              <p className="font-medium mb-3 text-red-600 dark:text-red-400 line-through decoration-2">{sentence.incorrect}</p>
              <Input
                placeholder="Écrivez la phrase corrigée..."
                value={answers[sentence.id] || ''}
                onChange={(e) => setAnswers(prev => ({ ...prev, [sentence.id]: e.target.value }))}
                disabled={showResults}
              />
              {showResults && !isCorrect && (
                <div className="mt-2 text-sm">
                  <p className="text-green-700 dark:text-green-400 font-medium">{sentence.correct}</p>
                  <p className="text-muted-foreground mt-1">{sentence.explanation}</p>
                </div>
              )}
            </div>
          );
        })}

        {showResults && (
          <div className={cn("p-4 rounded-lg text-center", score === exercise.sentences.length ? "bg-green-100 dark:bg-green-950/30" : "bg-amber-100 dark:bg-amber-950/30")}>
            <p className="text-lg font-semibold">Score : {score} / {exercise.sentences.length}</p>
          </div>
        )}

        <div className="flex gap-3">
          {!showResults ? (
            <Button onClick={handleCheck} className="flex-1"><Check className="h-4 w-4 mr-2" />Vérifier</Button>
          ) : (
            <Button onClick={handleReset} variant="outline" className="flex-1"><RotateCcw className="h-4 w-4 mr-2" />Recommencer</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Fill Paragraph Component  
function FillParagraphExercise({ exerciseId }: { exerciseId: number }) {
  const exercise = fillParagraphExercises.find(e => e.id === exerciseId);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setShowResults(false);
    setShowTranslation(false);
    setShowHints(false);
  }, [exerciseId]);

  if (!exercise) return <div>Exercise not found</div>;

  const checkAnswer = (userAnswer: string, blank: { answer: string; alternatives?: string[] }) => {
    const normalizedUser = userAnswer.toLowerCase().trim();
    if (normalizedUser === blank.answer.toLowerCase()) return true;
    if (blank.alternatives?.some(alt => normalizedUser === alt.toLowerCase())) return true;
    return false;
  };

  const handleCheck = () => setShowResults(true);
  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const score = exercise.blanks.filter(b => checkAnswer(answers[b.id] || '', b)).length;

  // Render paragraph with inputs
  const renderParagraph = () => {
    const parts = exercise.paragraph.split(/\[(\d+)\]/);
    return parts.map((part, idx) => {
      const blankNum = parseInt(part);
      if (!isNaN(blankNum)) {
        const blank = exercise.blanks.find(b => b.id === blankNum);
        if (!blank) return null;
        const isCorrect = checkAnswer(answers[blankNum] || '', blank);
        return (
          <span key={`${exerciseId}-blank-${idx}`} className="inline-flex items-center mx-1">
            <Input
              className={cn(
                "w-32 h-8 text-center inline-block",
                showResults && isCorrect && "border-green-500 bg-green-50",
                showResults && !isCorrect && "border-red-500 bg-red-50"
              )}
              placeholder={showHints && blank.hint ? blank.hint : `(${blankNum})`}
              value={answers[blankNum] || ''}
              onChange={(e) => setAnswers(prev => ({ ...prev, [blankNum]: e.target.value }))}
              disabled={showResults}
            />
            {showResults && !isCorrect && (
              <span className="text-xs text-green-600 ml-1">({blank.answer})</span>
            )}
          </span>
        );
      }
      return <span key={`${exerciseId}-text-${idx}`}>{part}</span>;
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <CardTitle>{exercise.title}</CardTitle>
            <CardDescription>{exercise.description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowHints(!showHints)}>
              <Lightbulb className="h-4 w-4 mr-1" />
              {showHints ? 'Masquer' : 'Indices'}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowTranslation(!showTranslation)}>
              <Languages className="h-4 w-4 mr-1" />
              {showTranslation ? 'Masquer' : 'Traduction'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg leading-relaxed p-4 bg-muted/50 rounded-lg">
          {renderParagraph()}
        </div>

        {showTranslation && (
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-muted-foreground italic">{exercise.translation}</p>
          </div>
        )}

        {showResults && (
          <div className={cn("p-4 rounded-lg text-center", score === exercise.blanks.length ? "bg-green-100 dark:bg-green-950/30" : "bg-amber-100 dark:bg-amber-950/30")}>
            <p className="text-lg font-semibold">Score : {score} / {exercise.blanks.length}</p>
          </div>
        )}

        <div className="flex gap-3">
          {!showResults ? (
            <Button onClick={handleCheck} className="flex-1"><Check className="h-4 w-4 mr-2" />Vérifier</Button>
          ) : (
            <Button onClick={handleReset} variant="outline" className="flex-1"><RotateCcw className="h-4 w-4 mr-2" />Recommencer</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Main Page Component
export default function WritingExerciseDetail() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const exerciseId = parseInt(id || '1', 10);

  const getExercise = () => {
    switch (type) {
      case 'transform':
        return sentenceTransformExercises.find(e => e.id === exerciseId);
      case 'error':
        return errorCorrectionExercises.find(e => e.id === exerciseId);
      case 'fill':
        return fillParagraphExercises.find(e => e.id === exerciseId);
      default:
        return null;
    }
  };

  const exercise = getExercise();
  const getExerciseList = () => {
    switch (type) {
      case 'transform': return sentenceTransformExercises;
      case 'error': return errorCorrectionExercises;
      case 'fill': return fillParagraphExercises;
      default: return [];
    }
  };
  const exerciseList = getExerciseList();

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercice non trouvé</h1>
          <Button asChild>
            <Link to="/exercices">Retour aux exercices</Link>
          </Button>
        </div>
      </div>
    );
  }

  const typeLabels: Record<string, string> = {
    transform: 'Transformation',
    error: 'Correction',
    fill: 'Texte à trous'
  };

  return (
    <>
      <SEOHead
        title={`${exercise.title} | Exercice d'écriture | Antony Addy`}
        description={exercise.description}
        canonicalPath={`/exercices/writing/${type}/${exerciseId}`}
      />
      
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/exercices" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
          </Button>

          {/* Use key prop to force remount on exercise change */}
          {type === 'transform' && <SentenceTransformExercise key={`transform-${exerciseId}`} exerciseId={exerciseId} />}
          {type === 'error' && <ErrorCorrectionExercise key={`error-${exerciseId}`} exerciseId={exerciseId} />}
          {type === 'fill' && <FillParagraphExercise key={`fill-${exerciseId}`} exerciseId={exerciseId} />}

          <div className="mt-8 flex justify-center gap-4">
            {exerciseId > 1 && (
              <Button variant="outline" asChild>
                <Link to={`/exercices/writing/${type}/${exerciseId - 1}`}>
                  ← Exercice précédent
                </Link>
              </Button>
            )}
            {exerciseId < exerciseList.length && (
              <Button variant="outline" asChild>
                <Link to={`/exercices/writing/${type}/${exerciseId + 1}`}>
                  Exercice suivant →
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
