import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { conditionalExercises } from "@/data/conditionalExercises";
import { shuffleArray } from "@/utils/shuffleArray";
import ExerciseNotAvailable from "@/components/exercise/ExerciseNotAvailable";

const ConditionalExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = conditionalExercises.find(ex => ex.id === Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
  }, [id]);

  // Shuffle options for each question once per exercise load (hook must run before early returns)
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    exercise?.questions.forEach((q, index) => {
      map[index] = shuffleArray(q.options);
    });
    return map;
  }, [id, exercise?.questions]);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = submitted 
    ? exercise.questions.filter((q, i) => answers[i] === q.answer).length 
    : 0;

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Conditionnels | Antony Addy</title>
        <meta name="description" content={`Exercice sur les conditionnels: ${exercise.title}. ${exercise.description}`} />
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
              <Badge variant="outline">{exercise.conditionalType}</Badge>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {exercise.questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = submitted && userAnswer === question.answer;
              const isIncorrect = submitted && userAnswer !== question.answer;

              return (
                <div key={`${id}-${index}`} className={`p-4 rounded-lg border ${
                  isCorrect ? 'border-green-500/50 bg-green-500/5' :
                  isIncorrect ? 'border-red-500/50 bg-red-500/5' :
                  'border-border'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {index + 1}.
                    </span>
                    <p className="flex-1 font-medium">{question.sentence}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-6">
                    {shuffledOptionsMap[index].map((option) => (
                      <Button
                        key={option}
                        variant={
                          submitted 
                            ? option === question.answer 
                              ? "default" 
                              : userAnswer === option 
                                ? "destructive" 
                                : "outline"
                            : userAnswer === option 
                              ? "default" 
                              : "outline"
                        }
                        size="sm"
                        className="justify-start text-left h-auto py-2"
                        onClick={() => !submitted && setAnswers(prev => ({ ...prev, [index]: option }))}
                        disabled={submitted}
                      >
                        {option}
                        {submitted && option === question.answer && (
                          <CheckCircle className="w-4 h-4 ml-auto flex-shrink-0" />
                        )}
                        {submitted && userAnswer === option && option !== question.answer && (
                          <XCircle className="w-4 h-4 ml-auto flex-shrink-0" />
                        )}
                      </Button>
                    ))}
                  </div>

                  {submitted && (
                    <p className="text-sm text-muted-foreground mt-3 ml-6">
                      {question.explanation}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="pt-4 border-t">
              {!submitted ? (
                <Button 
                  onClick={handleSubmit} 
                  className="w-full"
                  disabled={Object.keys(answers).length < exercise.questions.length}
                >
                  Vérifier les réponses
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-xl font-bold">
                      Score: <span className="text-primary">{score}</span> / {exercise.questions.length}
                    </p>
                    <p className="text-muted-foreground">
                      {score === exercise.questions.length 
                        ? "Parfait ! Maîtrise des conditionnels !" 
                        : score >= exercise.questions.length * 0.7 
                        ? "Très bien ! Continuez ainsi !" 
                        : "Revoyez les règles des conditionnels !"}
                    </p>
                  </div>
                  <Button onClick={resetExercise} className="w-full gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ConditionalExerciseDetail;
