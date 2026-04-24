import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Check, X, RotateCcw, MapPin, ChevronRight } from 'lucide-react';
import { getPrepositionExerciseById } from '@/data/prepositionExercises';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Breadcrumbs from '@/components/Breadcrumbs';
import { shuffleArray } from '@/utils/shuffleArray';
import ExerciseNotAvailable from "@/components/exercise/ExerciseNotAvailable";

const PrepositionExerciseDetail = () => {
  const { id } = useParams();
  const exercise = getPrepositionExerciseById(Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
    setShowExplanations(false);
  }, [id]);

  if (!exercise) {
    return <ExerciseNotAvailable />;
  }

  const handleAnswerSelect = (questionId: number, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = exercise.questions.filter(q => answers[q.id] === q.correctAnswer).length;
    
    if (correct === exercise.questions.length) {
      toast.success('Parfait ! Toutes les réponses sont correctes !');
    } else {
      toast.info(`${correct}/${exercise.questions.length} réponses correctes`);
    }
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Shuffle options for each question once per exercise load
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    exercise.questions.forEach(q => {
      map[q.id] = shuffleArray(q.options);
    });
    return map;
  }, [id, exercise.questions]);

  const score = submitted 
    ? exercise.questions.filter(q => answers[q.id] === q.correctAnswer).length 
    : 0;

  const renderSentenceWithBlank = (sentence: string, questionId: number) => {
    const parts = sentence.split('___');
    const answer = answers[questionId];
    const isCorrect = submitted && answer === exercise.questions.find(q => q.id === questionId)?.correctAnswer;
    const isWrong = submitted && answer && !isCorrect;
    
    return (
      <span>
        {parts[0]}
        <span className={`px-2 py-1 mx-1 rounded font-bold ${
          isCorrect 
            ? 'bg-green-200 text-green-800' 
            : isWrong 
              ? 'bg-red-200 text-red-800'
              : answer
                ? 'bg-primary/20 text-primary'
                : 'bg-muted text-muted-foreground'
        }`}>
          {answer || '___'}
        </span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background py-8">

      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs customTitle={exercise.title} customSection={{ label: 'Prépositions', path: '/exercices' }} />
        
        <Link to="/exercices" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux exercices
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <MapPin className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-primary font-heading">{exercise.title}</h1>
            <p className="text-muted-foreground">{exercise.description}</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Badge variant="outline">{exercise.theme}</Badge>
            <Badge variant={exercise.difficulty === 'easy' ? 'secondary' : exercise.difficulty === 'hard' ? 'destructive' : 'default'}>
              {exercise.difficulty}
            </Badge>
          </div>
        </div>

        {submitted && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">
                  Score: {score}/{exercise.questions.length}
                </p>
                <p className="text-muted-foreground">
                  {score === exercise.questions.length 
                    ? 'Excellent ! Maîtrise parfaite des prépositions !' 
                    : score >= exercise.questions.length / 2 
                      ? 'Bien joué ! Continuez !' 
                      : 'Continuez à pratiquer !'}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowExplanations(!showExplanations)}
                  className="mt-4"
                >
                  {showExplanations ? 'Masquer les explications' : 'Afficher les explications'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Choisissez la bonne préposition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exercise.questions.map((question, index) => {
              const isCorrect = submitted && answers[question.id] === question.correctAnswer;
              const isWrong = submitted && answers[question.id] && !isCorrect;
              
              return (
                <div 
                  key={`${id}-${question.id}`} 
                  className={`p-4 rounded-lg border ${
                    isCorrect 
                      ? 'bg-green-50 border-green-200' 
                      : isWrong 
                        ? 'bg-red-50 border-red-200'
                        : 'bg-card border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary w-6">{index + 1}.</span>
                    <div className="flex-1">
                      <p className="text-lg mb-3">
                        {renderSentenceWithBlank(question.sentence, question.id)}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {shuffledOptionsMap[question.id].map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswerSelect(question.id, option)}
                            disabled={submitted}
                            className={`px-4 py-2 rounded-lg border transition-all ${
                              answers[question.id] === option
                                ? submitted && option === question.correctAnswer
                                  ? 'bg-green-500 text-white border-green-600'
                                  : submitted && option !== question.correctAnswer
                                    ? 'bg-red-500 text-white border-red-600'
                                    : 'bg-primary text-primary-foreground border-primary'
                                : submitted && option === question.correctAnswer
                                  ? 'bg-green-100 border-green-300 text-green-800'
                                  : 'bg-card hover:bg-accent/10 border-border'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>

                      {submitted && (
                        <div className="flex items-center gap-2 text-sm">
                          {isCorrect && (
                            <span className="flex items-center gap-1 text-green-600">
                              <Check className="h-4 w-4" /> Correct !
                            </span>
                          )}
                          {isWrong && (
                            <span className="flex items-center gap-1 text-red-600">
                              <X className="h-4 w-4" /> La bonne réponse est: <strong>{question.correctAnswer}</strong>
                            </span>
                          )}
                        </div>
                      )}

                      {submitted && showExplanations && (
                        <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                          <p className="text-sm">{question.explanation}</p>
                          <p className="text-xs text-muted-foreground mt-1">🇫🇷 {question.explanationFr}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4 mt-8">
          {!submitted ? (
            <Button 
              onClick={handleSubmit} 
              size="lg" 
              className="gap-2"
              disabled={Object.keys(answers).length < exercise.questions.length}
            >
              <Check className="h-5 w-5" />
              Vérifier ({Object.keys(answers).length}/{exercise.questions.length})
            </Button>
          ) : (
            <Button onClick={resetExercise} variant="outline" size="lg" className="gap-2">
              <RotateCcw className="h-5 w-5" />
              Recommencer
            </Button>
          )}
        </div>

        {/* Next Exercise Navigation */}
        {submitted && id && Number(id) < 6 && (
          <div className="flex justify-center mt-4">
            <Link to={`/exercices/prepositions/${Number(id) + 1}`}>
              <Button variant="ghost" className="gap-2">
                Exercice suivant <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepositionExerciseDetail;
