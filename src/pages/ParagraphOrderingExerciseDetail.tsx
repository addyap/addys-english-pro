import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, GripVertical, ArrowUp, ArrowDown } from "lucide-react";
import { paragraphOrderingExercises } from "@/data/paragraphOrderingExercises";

const ParagraphOrderingExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = paragraphOrderingExercises.find(ex => ex.id === Number(id));
  
  const [orderedParagraphs, setOrderedParagraphs] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Reset and shuffle on exercise ID change
  useEffect(() => {
    if (exercise) {
      // Shuffle paragraphs on load
      const shuffled = [...exercise.paragraphs]
        .map(p => ({ ...p, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(p => p.id);
      setOrderedParagraphs(shuffled);
      setSubmitted(false);
    }
  }, [id, exercise]);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const moveParagraph = (index: number, direction: 'up' | 'down') => {
    if (submitted) return;
    const newOrder = [...orderedParagraphs];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newOrder.length) return;
    [newOrder[index], newOrder[newIndex]] = [newOrder[newIndex], newOrder[index]];
    setOrderedParagraphs(newOrder);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const resetExercise = () => {
    const shuffled = [...exercise.paragraphs]
      .map(p => ({ ...p, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(p => p.id);
    setOrderedParagraphs(shuffled);
    setSubmitted(false);
  };

  const correctOrder = exercise.correctOrder;
  const isCorrect = submitted && JSON.stringify(orderedParagraphs) === JSON.stringify(correctOrder);
  const score = submitted 
    ? orderedParagraphs.filter((id, index) => id === correctOrder[index]).length 
    : 0;

  const getParagraphById = (id: string) => 
    exercise.paragraphs.find(p => p.id === id);

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Organisation de paragraphes | Antony Addy</title>
        <meta name="description" content={`Exercice d'organisation: ${exercise.title}. ${exercise.description}`} />
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

        <p className="text-sm text-muted-foreground mb-4">
          Réorganisez les paragraphes dans l'ordre logique en utilisant les flèches.
        </p>

        <div className="space-y-3">
          {orderedParagraphs.map((paragraphId, index) => {
            const paragraph = getParagraphById(paragraphId);
            if (!paragraph) return null;

            const correctIndex = correctOrder.indexOf(paragraphId);
            const isInCorrectPosition = submitted && index === correctIndex;

            return (
              <Card 
                key={paragraphId} 
                className={`transition-all ${
                  submitted
                    ? isInCorrectPosition
                      ? 'border-green-500/50 bg-green-500/5'
                      : 'border-red-500/50 bg-red-500/5'
                    : ''
                }`}
              >
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <GripVertical className="w-5 h-5 text-muted-foreground" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => moveParagraph(index, 'up')}
                        disabled={submitted || index === 0}
                      >
                        <ArrowUp className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => moveParagraph(index, 'down')}
                        disabled={submitted || index === orderedParagraphs.length - 1}
                      >
                        <ArrowDown className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Position {index + 1}
                        </Badge>
                        {submitted && (
                          isInCorrectPosition ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <span className="text-xs text-red-500">
                              (devrait être position {correctIndex + 1})
                            </span>
                          )
                        )}
                      </div>
                      <p className="text-sm leading-relaxed">{paragraph.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6">
          {!submitted ? (
            <Button onClick={handleSubmit} className="w-full">
              Vérifier l'ordre
            </Button>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                {isCorrect ? (
                  <CheckCircle className="w-12 h-12 mx-auto text-green-500" />
                ) : (
                  <XCircle className="w-12 h-12 mx-auto text-red-500" />
                )}
                <div>
                  <p className="text-xl font-bold">
                    Score: <span className="text-primary">{score}</span> / {exercise.paragraphs.length}
                  </p>
                  <p className="text-muted-foreground">
                    {isCorrect 
                      ? "Parfait ! Ordre logique impeccable !" 
                      : score >= exercise.paragraphs.length * 0.7 
                      ? "Presque ! Quelques ajustements nécessaires." 
                      : "Relisez les paragraphes pour trouver les liens logiques."}
                  </p>
                </div>
                <Button onClick={resetExercise} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Recommencer
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default ParagraphOrderingExerciseDetail;
