import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Eye } from "lucide-react";
import { translationExercises } from "@/data/translationExercises";
import { SimilarExercises, SimilarExercise } from "@/components/SimilarExercises";
import QuizJsonLd from "@/components/QuizJsonLd";
import ExerciseNotAvailable from "@/components/exercise/ExerciseNotAvailable";

const TranslationExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = translationExercises.find(ex => ex.id === Number(id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userTranslation, setUserTranslation] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [selfScores, setSelfScores] = useState<Record<number, 'correct' | 'partial' | 'incorrect'>>({});
  const [completed, setCompleted] = useState<number[]>([]);

  // Reset state when exercise ID changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserTranslation("");
    setShowAnswer(false);
    setSelfScores({});
    setCompleted([]);
  }, [id]);

  // Similar exercises
  const similarExercises = useMemo((): SimilarExercise[] => {
    return translationExercises.map(ex => ({
      id: ex.id,
      title: ex.title,
      description: ex.description,
      level: ex.level,
      type: 'translation',
      path: `/exercices/translation/${ex.id}`
    }));
  }, []);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const currentSentence = exercise.sentences[currentIndex];

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleSelfScore = (score: 'correct' | 'partial' | 'incorrect') => {
    setSelfScores(prev => ({ ...prev, [currentIndex]: score }));
    setCompleted(prev => [...prev, currentIndex]);
  };

  const nextSentence = () => {
    if (currentIndex < exercise.sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserTranslation("");
      setShowAnswer(false);
    }
  };

  const resetExercise = () => {
    setCurrentIndex(0);
    setUserTranslation("");
    setShowAnswer(false);
    setSelfScores({});
    setCompleted([]);
  };

  const isFinished = completed.length === exercise.sentences.length;
  const correctCount = Object.values(selfScores).filter(s => s === 'correct').length;
  const partialCount = Object.values(selfScores).filter(s => s === 'partial').length;
  const canonicalUrl = `https://www.antonyaddy.com/exercices/translation/${id}`;

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Traduction | Antony Addy</title>
        <meta name="description" content={`Exercice de traduction: ${exercise.title}. ${exercise.description}`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <QuizJsonLd
        name={exercise.title}
        description={exercise.description}
        educationalLevel={exercise.level}
        about="English-French Translation"
        numberOfQuestions={exercise.sentences.length}
        url={canonicalUrl}
      />

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/exercices" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux exercices
        </Link>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl">{exercise.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{exercise.description}</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">{exercise.level}</Badge>
                <Badge variant="outline">
                  {exercise.direction === 'en-fr' ? 'EN → FR' : 'FR → EN'}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {!isFinished ? (
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Phrase {currentIndex + 1} / {exercise.sentences.length}
                </span>
                <span className="text-sm font-medium">
                  Correct: {correctCount} | Partiel: {partialCount}
                </span>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  {exercise.direction === 'fr-en' ? 'Français:' : 'Anglais:'}
                </p>
                <p className="text-lg font-medium">{currentSentence.source}</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Votre traduction ({exercise.direction === 'fr-en' ? 'anglais' : 'français'}):
                </label>
                <Textarea
                  value={userTranslation}
                  onChange={(e) => setUserTranslation(e.target.value)}
                  placeholder="Tapez votre traduction ici..."
                  className="min-h-[100px]"
                  disabled={showAnswer}
                />
              </div>

              {!showAnswer ? (
                <Button 
                  onClick={handleShowAnswer} 
                  disabled={!userTranslation.trim()} 
                  className="w-full gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Voir la réponse
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Traduction correcte:</p>
                    <p className="font-medium">{currentSentence.answer}</p>
                    {currentSentence.alternatives && currentSentence.alternatives.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Alternatives: {currentSentence.alternatives.join(', ')}
                      </p>
                    )}
                    {currentSentence.explanation && (
                      <p className="text-sm text-muted-foreground mt-2 italic">
                        Note: {currentSentence.explanation}
                      </p>
                    )}
                  </div>

                  {!completed.includes(currentIndex) && (
                    <div className="space-y-2">
                      <p className="text-sm text-center text-muted-foreground">
                        Comment évaluez-vous votre traduction ?
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button 
                          variant="outline" 
                          className="border-green-500 text-green-600 hover:bg-green-500/10"
                          onClick={() => handleSelfScore('correct')}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Correct
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-yellow-500 text-yellow-600 hover:bg-yellow-500/10"
                          onClick={() => handleSelfScore('partial')}
                        >
                          Partiel
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-red-500 text-red-600 hover:bg-red-500/10"
                          onClick={() => handleSelfScore('incorrect')}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Incorrect
                        </Button>
                      </div>
                    </div>
                  )}

                  {completed.includes(currentIndex) && currentIndex < exercise.sentences.length - 1 && (
                    <Button onClick={nextSentence} className="w-full">
                      Phrase suivante
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6 text-center space-y-6">
              <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
              <div>
                <h3 className="text-2xl font-bold">Exercice terminé !</h3>
                <div className="mt-4 space-y-2">
                  <p className="text-lg">
                    <span className="text-green-600 font-bold">{correctCount}</span> correct
                    {correctCount !== 1 ? 's' : ''}
                  </p>
                  <p className="text-lg">
                    <span className="text-yellow-600 font-bold">{partialCount}</span> partiel
                    {partialCount !== 1 ? 's' : ''}
                  </p>
                  <p className="text-lg">
                    <span className="text-red-600 font-bold">
                      {exercise.sentences.length - correctCount - partialCount}
                    </span> à revoir
                  </p>
                </div>
                <p className="text-muted-foreground mt-4">
                  {correctCount === exercise.sentences.length 
                    ? "Parfait ! Excellente maîtrise de la traduction !" 
                    : correctCount >= exercise.sentences.length * 0.7 
                    ? "Très bien ! Continuez ainsi !" 
                    : "Continuez à pratiquer la traduction !"}
                </p>
              </div>
              <Button onClick={resetExercise} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Recommencer
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Navigation between exercises */}
        <div className="mt-8 flex justify-center gap-4">
          {Number(id) > 1 && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/translation/${Number(id) - 1}`}>
                ← Exercice précédent
              </Link>
            </Button>
          )}
          {Number(id) < translationExercises.length && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/translation/${Number(id) + 1}`}>
                Exercice suivant →
              </Link>
            </Button>
          )}
        </div>

        {/* Similar Exercises */}
        <SimilarExercises
          exercises={similarExercises}
          currentId={Number(id)}
          title="Autres exercices de traduction"
        />
      </div>
    </>
  );
};

export default TranslationExerciseDetail;
