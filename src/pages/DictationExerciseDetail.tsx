import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Pause, CheckCircle, XCircle, RotateCcw, Volume2 } from "lucide-react";
import { dictationExercises } from "@/data/dictationExercises";

const DictationExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = dictationExercises.find(ex => ex.id === Number(id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

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

  const currentSentence = exercise.sentences[currentIndex];

  const speakSentence = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentSentence.text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const checkAnswer = () => {
    const isCorrect = userInput.trim().toLowerCase() === currentSentence.text.toLowerCase();
    setShowResult(true);
    if (isCorrect && !completed[currentIndex]) {
      setScore(prev => prev + 1);
    }
    setCompleted(prev => {
      const newCompleted = [...prev];
      newCompleted[currentIndex] = true;
      return newCompleted;
    });
  };

  const nextSentence = () => {
    if (currentIndex < exercise.sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserInput("");
      setShowResult(false);
    }
  };

  const resetExercise = () => {
    setCurrentIndex(0);
    setUserInput("");
    setShowResult(false);
    setScore(0);
    setCompleted([]);
  };

  const isFinished = completed.length === exercise.sentences.length && completed.every(Boolean);

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Dictée | Antony Music</title>
        <meta name="description" content={`Exercice de dictée: ${exercise.title}. ${exercise.description}`} />
      </Helmet>

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
              <Badge variant="secondary">{exercise.level}</Badge>
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
                  Score: {score} / {exercise.sentences.length}
                </span>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={isPlaying ? stopSpeaking : speakSentence}
                  className="gap-2"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Arrêter
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5" />
                      Écouter
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Tapez ce que vous entendez..."
                  className="text-lg"
                  disabled={showResult}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !showResult && userInput.trim()) {
                      checkAnswer();
                    }
                  }}
                />

                {!showResult ? (
                  <Button onClick={checkAnswer} disabled={!userInput.trim()} className="w-full">
                    Vérifier
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${
                      userInput.trim().toLowerCase() === currentSentence.text.toLowerCase()
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-red-500/10 border border-red-500/30'
                    }`}>
                      {userInput.trim().toLowerCase() === currentSentence.text.toLowerCase() ? (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Correct !</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-600">
                            <XCircle className="w-5 h-5" />
                            <span className="font-medium">Incorrect</span>
                          </div>
                          <p className="text-sm">
                            <strong>Réponse correcte:</strong> {currentSentence.text}
                          </p>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Traduction:</strong> {currentSentence.translation}
                      </p>
                    </div>

                    {currentIndex < exercise.sentences.length - 1 && (
                      <Button onClick={nextSentence} className="w-full">
                        Phrase suivante
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6 text-center space-y-6">
              <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
              <div>
                <h3 className="text-2xl font-bold">Exercice terminé !</h3>
                <p className="text-xl mt-2">
                  Score final: <span className="text-primary font-bold">{score}</span> / {exercise.sentences.length}
                </p>
                <p className="text-muted-foreground mt-2">
                  {score === exercise.sentences.length 
                    ? "Parfait ! Excellente écoute !" 
                    : score >= exercise.sentences.length * 0.7 
                    ? "Très bien ! Continuez ainsi !" 
                    : "Continuez à pratiquer !"}
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
              <Link to={`/exercices/dictation/${Number(id) - 1}`}>
                ← Exercice précédent
              </Link>
            </Button>
          )}
          {Number(id) < dictationExercises.length && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/dictation/${Number(id) + 1}`}>
                Exercice suivant →
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default DictationExerciseDetail;
