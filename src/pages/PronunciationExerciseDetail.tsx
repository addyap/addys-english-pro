import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Volume2, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { pronunciationExercises } from "@/data/pronunciationExercises";
import { SimilarExercises, SimilarExercise } from "@/components/SimilarExercises";
import QuizJsonLd from "@/components/QuizJsonLd";

const PronunciationExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = pronunciationExercises.find(ex => ex.id === Number(id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  // Similar exercises
  const similarExercises = useMemo((): SimilarExercise[] => {
    return pronunciationExercises.map(ex => ({
      id: ex.id,
      title: ex.title,
      description: ex.description,
      type: 'pronunciation',
      path: `/exercices/pronunciation/${ex.id}`
    }));
  }, []);

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">Exercice non trouvé</p>
        <Link to="/exercices" className="text-primary hover:underline block text-center mt-4">
          Retour aux exercices
        </Link>
      </div>
    );
  }

  const currentQuestion = exercise.questions[currentIndex];

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const checkAnswer = () => {
    setShowResult(true);
    if (selectedAnswer === currentQuestion.correctWord && !completed.includes(currentIndex)) {
      setScore(prev => prev + 1);
    }
    setCompleted(prev => [...prev, currentIndex]);
  };

  const nextQuestion = () => {
    if (currentIndex < exercise.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetExercise = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted([]);
  };

  const isFinished = completed.length === exercise.questions.length;
  const canonicalUrl = `https://www.antonyaddy.com/exercices/pronunciation/${id}`;

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Prononciation | Antony Addy</title>
        <meta name="description" content={`Exercice de prononciation: ${exercise.title}. ${exercise.description}`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <QuizJsonLd
        name={exercise.title}
        description={exercise.description}
        about="English Pronunciation - Minimal Pairs"
        numberOfQuestions={exercise.questions.length}
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
            </div>
          </CardHeader>
        </Card>

        {/* Minimal Pairs Reference */}
        <Card className="mb-6">
          <CardContent className="pt-4">
            <h3 className="font-semibold mb-3">Paires minimales de référence:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {exercise.pairs.slice(0, 5).map((pair) => (
                <div key={pair.id} className="flex items-center gap-2 text-sm">
                  <Button variant="ghost" size="sm" onClick={() => speakWord(pair.word1)} className="p-1 h-auto">
                    <Volume2 className="w-3 h-3" />
                  </Button>
                  <span>{pair.word1}</span>
                  <span className="text-muted-foreground">vs</span>
                  <span>{pair.word2}</span>
                  <Button variant="ghost" size="sm" onClick={() => speakWord(pair.word2)} className="p-1 h-auto">
                    <Volume2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {!isFinished ? (
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Question {currentIndex + 1} / {exercise.questions.length}
                </span>
                <span className="text-sm font-medium">
                  Score: {score} / {exercise.questions.length}
                </span>
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg font-medium">Choisissez le mot correct:</p>
                <p className="text-xl p-4 bg-muted/50 rounded-lg">{currentQuestion.sentence}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <Button
                    key={option}
                    variant={
                      showResult
                        ? option === currentQuestion.correctWord
                          ? "default"
                          : selectedAnswer === option
                            ? "destructive"
                            : "outline"
                        : selectedAnswer === option
                          ? "default"
                          : "outline"
                    }
                    size="lg"
                    className="h-16 text-lg gap-2"
                    onClick={() => !showResult && setSelectedAnswer(option)}
                    disabled={showResult}
                  >
                    <Volume2 className="w-4 h-4" onClick={(e) => { e.stopPropagation(); speakWord(option); }} />
                    {option}
                    {showResult && option === currentQuestion.correctWord && (
                      <CheckCircle className="w-5 h-5 ml-2" />
                    )}
                    {showResult && selectedAnswer === option && option !== currentQuestion.correctWord && (
                      <XCircle className="w-5 h-5 ml-2" />
                    )}
                  </Button>
                ))}
              </div>

              {!showResult ? (
                <Button onClick={checkAnswer} disabled={!selectedAnswer} className="w-full">
                  Vérifier
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg text-center ${
                    selectedAnswer === currentQuestion.correctWord
                      ? 'bg-green-500/10 border border-green-500/30'
                      : 'bg-red-500/10 border border-red-500/30'
                  }`}>
                    {selectedAnswer === currentQuestion.correctWord ? (
                      <p className="text-green-600 font-medium">Correct ! Bonne oreille !</p>
                    ) : (
                      <p className="text-red-600">
                        Le mot correct était: <strong>{currentQuestion.correctWord}</strong>
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{currentQuestion.explanation}</p>
                  </div>

                  {currentIndex < exercise.questions.length - 1 && (
                    <Button onClick={nextQuestion} className="w-full">
                      Question suivante
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
                <p className="text-xl mt-2">
                  Score final: <span className="text-primary font-bold">{score}</span> / {exercise.questions.length}
                </p>
                <p className="text-muted-foreground mt-2">
                  {score === exercise.questions.length 
                    ? "Parfait ! Excellente discrimination auditive !" 
                    : score >= exercise.questions.length * 0.7 
                    ? "Très bien ! Continuez à pratiquer !" 
                    : "Travaillez les paires minimales !"}
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
              <Link to={`/exercices/pronunciation/${Number(id) - 1}`}>
                ← Exercice précédent
              </Link>
            </Button>
          )}
          {Number(id) < pronunciationExercises.length && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/pronunciation/${Number(id) + 1}`}>
                Exercice suivant →
              </Link>
            </Button>
          )}
        </div>

        {/* Similar Exercises */}
        <SimilarExercises
          exercises={similarExercises}
          currentId={Number(id)}
          title="Autres exercices de prononciation"
        />
      </div>
    </>
  );
};

export default PronunciationExerciseDetail;
