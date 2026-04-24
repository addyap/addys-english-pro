import { useParams, Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { collocationExercises } from "@/data/collocationExercises";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, RotateCcw, Check, X, ChevronLeft, Languages, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { shuffleArray } from "@/utils/shuffleArray";

const CollocationExerciseDetail = () => {
  const { id } = useParams();
  const exerciseId = parseInt(id || "1");
  const exercise = collocationExercises.find((ex) => ex.id === exerciseId);

  const [showEnglish, setShowEnglish] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "quiz">("list");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    setViewMode("list");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  }, [id]);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const prevExercise = collocationExercises.find((ex) => ex.id === exerciseId - 1);
  const nextExercise = collocationExercises.find((ex) => ex.id === exerciseId + 1);

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === exercise.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < exercise.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  // Shuffle options for each question once per exercise load
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    exercise.questions.forEach((q, index) => {
      map[index] = shuffleArray(q.options);
    });
    return map;
  }, [id, exercise.questions]);

  return (
    <>
      <SEOHead
        title={`${exercise.title} - Collocations anglaises`}
        description={`Apprenez les collocations anglaises sur le thème ${exercise.titleFr}. ${exercise.collocations.length} combinaisons de mots avec quiz interactif.`}
        keywords={["collocations anglais", exercise.theme, "combinaisons de mots", "vocabulaire anglais", "exercice anglais"]}
        canonicalPath={`/exercices/collocations/${exercise.id}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="outline" className="text-primary">
                <Link2 className="h-3 w-3 mr-1" />
                Collocations
              </Badge>
              <Badge variant="secondary">{exercise.collocations.length} expressions</Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{exercise.title}</h1>
            <p className="text-muted-foreground">{exercise.titleFr}</p>
          </div>

          {/* Language Toggle */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={showEnglish ? "default" : "outline"}
              size="sm"
              onClick={() => setShowEnglish(true)}
            >
              <Languages className="h-4 w-4 mr-1" />
              English
            </Button>
            <Button
              variant={!showEnglish ? "default" : "outline"}
              size="sm"
              onClick={() => setShowEnglish(false)}
            >
              <Languages className="h-4 w-4 mr-1" />
              Français
            </Button>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
            >
              Collocation List
            </Button>
            <Button
              variant={viewMode === "quiz" ? "default" : "outline"}
              onClick={() => {
                setViewMode("quiz");
                resetQuiz();
              }}
            >
              Quiz
            </Button>
          </div>

          {/* Collocation List View */}
          {viewMode === "list" && (
            <div className="space-y-4">
              {exercise.collocations.map((collocation, index) => (
                <Card key={`${id}-${index}`} className="overflow-hidden">
                  <CardHeader className="pb-2 bg-primary/5">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-primary font-bold">{collocation.collocation}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Meaning:</p>
                      <p className="font-medium">
                        {showEnglish ? collocation.meaning : collocation.meaningFr}
                      </p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Example:</p>
                      <p className="italic">
                        {showEnglish ? collocation.example : collocation.exampleFr}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Quiz View */}
          {viewMode === "quiz" && !quizComplete && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    Question {currentQuestion + 1} / {exercise.questions.length}
                  </CardTitle>
                  <Badge variant="secondary">Score: {score}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg font-medium">{exercise.questions[currentQuestion].question}</p>

                <div className="grid gap-3">
                  {shuffledOptionsMap[currentQuestion].map((option, index) => {
                    const isCorrect = option === exercise.questions[currentQuestion].correctAnswer;
                    const isSelected = option === selectedAnswer;

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={cn(
                          "justify-start h-auto py-3 px-4 text-left",
                          showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950",
                          showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950"
                        )}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={showResult}
                      >
                        <span className="flex items-center gap-2">
                          {showResult && isCorrect && <Check className="h-4 w-4 text-green-600" />}
                          {showResult && isSelected && !isCorrect && <X className="h-4 w-4 text-red-600" />}
                          {option}
                        </span>
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium mb-1">
                      {selectedAnswer === exercise.questions[currentQuestion].correctAnswer
                        ? "✅ Correct!"
                        : "❌ Incorrect"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exercise.questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button onClick={handleNextQuestion} disabled={!showResult}>
                    {currentQuestion < exercise.questions.length - 1 ? (
                      <>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      "Finish"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quiz Complete */}
          {viewMode === "quiz" && quizComplete && (
            <Card className="text-center py-8">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold">Quiz Complete! 🎉</h2>
                <p className="text-xl">
                  Your score: <span className="text-primary font-bold">{score}</span> / {exercise.questions.length}
                </p>
                <p className="text-muted-foreground">
                  {score === exercise.questions.length
                    ? "Perfect! You've mastered these collocations!"
                    : score >= exercise.questions.length * 0.7
                    ? "Great job! Keep practicing to perfect your skills."
                    : "Keep learning! Review the collocations and try again."}
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Button onClick={resetQuiz}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  <Button variant="outline" onClick={() => setViewMode("list")}>
                    Review Collocations
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {prevExercise ? (
              <Link to={`/exercices/collocations/${prevExercise.id}`}>
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {prevExercise.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextExercise ? (
              <Link to={`/exercices/collocations/${nextExercise.id}`}>
                <Button variant="outline">
                  {nextExercise.title}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollocationExerciseDetail;
