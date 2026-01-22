import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { wordFormationExercises } from "@/data/wordFormationExercises";
import { SimilarExercises, SimilarExercise } from "@/components/SimilarExercises";
import QuizJsonLd from "@/components/QuizJsonLd";

const WordFormationExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = wordFormationExercises.find(ex => ex.id === Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Similar exercises
  const similarExercises = useMemo((): SimilarExercise[] => {
    return wordFormationExercises.map(ex => ({
      id: ex.id,
      title: ex.title,
      description: ex.description,
      type: 'word-formation',
      path: `/exercices/word-formation/${ex.id}`
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

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = submitted 
    ? exercise.questions.filter((q, i) => 
        answers[i]?.trim().toLowerCase() === q.answer.toLowerCase()
      ).length 
    : 0;

  const canonicalUrl = `https://www.antonyaddy.com/exercices/word-formation/${id}`;

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Formation de mots | Antony Addy</title>
        <meta name="description" content={`Exercice de formation de mots: ${exercise.title}. ${exercise.description}`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <QuizJsonLd
        name={exercise.title}
        description={exercise.description}
        about="English Word Formation"
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

        <Card>
          <CardContent className="pt-6 space-y-6">
            {exercise.questions.map((question, index) => {
              const userAnswer = answers[index] || "";
              const isCorrect = submitted && userAnswer.trim().toLowerCase() === question.answer.toLowerCase();
              const isIncorrect = submitted && userAnswer.trim().toLowerCase() !== question.answer.toLowerCase();

              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-muted-foreground mt-2">
                      {index + 1}.
                    </span>
                    <div className="flex-1 space-y-2">
                      <p className="text-foreground">
                        {question.sentence.split('___')[0]}
                        <Input
                          value={userAnswer}
                          onChange={(e) => setAnswers(prev => ({ ...prev, [index]: e.target.value }))}
                          className={`inline-block w-40 mx-1 ${
                            isCorrect ? 'border-green-500 bg-green-500/10' : 
                            isIncorrect ? 'border-red-500 bg-red-500/10' : ''
                          }`}
                          disabled={submitted}
                          placeholder="..."
                        />
                        {question.sentence.split('___')[1]}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        (Base word: <strong>{question.baseWord}</strong> → {question.targetForm})
                      </p>
                      {submitted && (
                        <div className={`flex items-center gap-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              <span>Correct: <strong>{question.answer}</strong></span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
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
                        ? "Parfait ! Excellent travail !" 
                        : score >= exercise.questions.length * 0.7 
                        ? "Très bien ! Continuez ainsi !" 
                        : "Continuez à pratiquer !"}
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

        {/* Navigation between exercises */}
        <div className="mt-8 flex justify-center gap-4">
          {Number(id) > 1 && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/word-formation/${Number(id) - 1}`}>
                ← Exercice précédent
              </Link>
            </Button>
          )}
          {Number(id) < wordFormationExercises.length && (
            <Button variant="outline" asChild>
              <Link to={`/exercices/word-formation/${Number(id) + 1}`}>
                Exercice suivant →
              </Link>
            </Button>
          )}
        </div>

        {/* Similar Exercises */}
        <SimilarExercises
          exercises={similarExercises}
          currentId={Number(id)}
          title="Autres exercices de formation de mots"
        />
      </div>
    </>
  );
};

export default WordFormationExerciseDetail;
