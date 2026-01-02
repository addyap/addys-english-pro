import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X, BookOpen, RotateCcw, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phrasalVerbExercises } from "@/data/phrasalVerbExercises";
import SEOHead from "@/components/SEOHead";

const PhrasalVerbExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = phrasalVerbExercises.find((e) => e.id === id);
  
  const [showFrench, setShowFrench] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [showVerbList, setShowVerbList] = useState(true);

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercise not found</h1>
          <Link to="/exercices">
            <Button>Back to Exercises</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentExerciseIndex = phrasalVerbExercises.findIndex((e) => e.id === id);
  const prevExercise = currentExerciseIndex > 0 ? phrasalVerbExercises[currentExerciseIndex - 1] : null;
  const nextExercise = currentExerciseIndex < phrasalVerbExercises.length - 1 ? phrasalVerbExercises[currentExerciseIndex + 1] : null;

  const question = exercise.questions[currentQuestion];

  const handleAnswerSelect = (answer: string) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    
    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < exercise.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
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
    setAnsweredQuestions([]);
  };

  const isQuizComplete = answeredQuestions.length === exercise.questions.length;

  return (
    <>
      <SEOHead
        title={`${exercise.title} - Phrasal Verbs | Antony Music`}
        description={exercise.description}
        canonical={`https://www.antonyaddy.com/exercices/phrasal-verbs/${exercise.id}`}
      />
      
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {showFrench ? exercise.themeFr : exercise.theme}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold">
                {showFrench ? exercise.titleFr : exercise.title}
              </h1>
              <p className="text-muted-foreground mt-1">
                {showFrench ? exercise.descriptionFr : exercise.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFrench(!showFrench)}
              className="flex items-center gap-2 shrink-0"
            >
              <Globe className="h-4 w-4" />
              {showFrench ? "English" : "Français"}
            </Button>
          </div>

          {/* Toggle Verb List / Quiz */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={showVerbList ? "default" : "outline"}
              onClick={() => setShowVerbList(true)}
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              {showFrench ? "Liste des verbes" : "Verb List"}
            </Button>
            <Button
              variant={!showVerbList ? "default" : "outline"}
              onClick={() => setShowVerbList(false)}
              className="flex items-center gap-2"
            >
              {showFrench ? "Quiz" : "Quiz"}
            </Button>
          </div>

          {showVerbList ? (
            /* Phrasal Verb List */
            <div className="grid gap-4 mb-8">
              {exercise.phrasalVerbs.map((verb, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary">{verb.verb}</h3>
                        <p className="text-foreground font-medium">
                          {showFrench ? verb.meaningFr : verb.meaning}
                        </p>
                      </div>
                      <div className="flex-1 bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm italic">
                          "{showFrench ? verb.exampleFr : verb.example}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Quiz Section */
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Question {currentQuestion + 1} / {exercise.questions.length}
                  </CardTitle>
                  <Badge variant="outline">
                    Score: {score} / {answeredQuestions.length}
                  </Badge>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${(answeredQuestions.length / exercise.questions.length) * 100}%` }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{question.sentence}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {question.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option === question.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;
                    
                    return (
                      <Button
                        key={option}
                        variant="outline"
                        className={`h-auto py-3 px-4 text-left justify-start ${
                          showCorrect ? "border-green-500 bg-green-50 dark:bg-green-950" :
                          showIncorrect ? "border-red-500 bg-red-50 dark:bg-red-950" :
                          isSelected ? "border-primary" : ""
                        }`}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={answeredQuestions.includes(currentQuestion)}
                      >
                        <span className="flex items-center gap-2">
                          {showCorrect && <Check className="h-4 w-4 text-green-600" />}
                          {showIncorrect && <X className="h-4 w-4 text-red-600" />}
                          {option}
                        </span>
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    selectedAnswer === question.correctAnswer 
                      ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800" 
                      : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
                  }`}>
                    <p className="font-medium mb-1">
                      {selectedAnswer === question.correctAnswer 
                        ? (showFrench ? "Correct !" : "Correct!") 
                        : (showFrench ? "Incorrect" : "Incorrect")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {showFrench ? question.explanationFr : question.explanation}
                    </p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {showFrench ? "Précédent" : "Previous"}
                  </Button>
                  
                  {isQuizComplete ? (
                    <Button onClick={resetQuiz} className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      {showFrench ? "Recommencer" : "Restart"}
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNextQuestion}
                      disabled={currentQuestion === exercise.questions.length - 1}
                    >
                      {showFrench ? "Suivant" : "Next"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>

                {/* Final Score */}
                {isQuizComplete && (
                  <div className="mt-6 p-6 bg-primary/10 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">
                      {showFrench ? "Quiz terminé !" : "Quiz Complete!"}
                    </h3>
                    <p className="text-3xl font-bold text-primary">
                      {score} / {exercise.questions.length}
                    </p>
                    <p className="text-muted-foreground mt-2">
                      {score === exercise.questions.length 
                        ? (showFrench ? "Parfait ! Excellent travail !" : "Perfect! Excellent work!")
                        : score >= exercise.questions.length * 0.7
                        ? (showFrench ? "Très bien ! Continuez comme ça !" : "Great job! Keep it up!")
                        : (showFrench ? "Continuez à pratiquer !" : "Keep practicing!")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation between exercises */}
          <div className="flex items-center justify-between pt-4 border-t">
            {prevExercise ? (
              <Link to={`/exercices/phrasal-verbs/${prevExercise.id}`}>
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {showFrench ? prevExercise.titleFr : prevExercise.title}
                </Button>
              </Link>
            ) : <div />}
            
            {nextExercise && (
              <Link to={`/exercices/phrasal-verbs/${nextExercise.id}`}>
                <Button variant="ghost" className="flex items-center gap-2">
                  {showFrench ? nextExercise.titleFr : nextExercise.title}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhrasalVerbExerciseDetail;
