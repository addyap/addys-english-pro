import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Check, X, HelpCircle, RotateCcw, Eye, Puzzle } from 'lucide-react';
import { getCrosswordExerciseById, CrosswordClue } from '@/data/crosswordExercises';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Breadcrumbs from '@/components/Breadcrumbs';

const CrosswordExerciseDetail = () => {
  const { id } = useParams();
  const exercise = getCrosswordExerciseById(Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [showHints, setShowHints] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  // Reset state when exercise ID changes
  useEffect(() => {
    if (exercise) {
      const initialAnswers: Record<number, string> = {};
      exercise.clues.forEach(clue => {
        initialAnswers[clue.id] = '';
      });
      setAnswers(initialAnswers);
      setRevealed(new Set());
      setShowHints(new Set());
      setSubmitted(false);
    }
  }, [id, exercise]);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground">Exercice non trouvé</h1>
          <Link to="/exercices" className="text-primary hover:underline mt-4 inline-block">
            Retour aux exercices
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (clueId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [clueId]: value.toUpperCase()
    }));
  };

  const toggleHint = (clueId: number) => {
    setShowHints(prev => {
      const newSet = new Set(prev);
      if (newSet.has(clueId)) {
        newSet.delete(clueId);
      } else {
        newSet.add(clueId);
      }
      return newSet;
    });
  };

  const revealAnswer = (clue: CrosswordClue) => {
    setAnswers(prev => ({
      ...prev,
      [clue.id]: clue.answer
    }));
    setRevealed(prev => new Set([...prev, clue.id]));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = exercise.clues.filter(clue => 
      answers[clue.id]?.toUpperCase() === clue.answer.toUpperCase()
    ).length;
    
    if (correct === exercise.clues.length) {
      toast.success('Parfait ! Toutes les réponses sont correctes !');
    } else {
      toast.info(`${correct}/${exercise.clues.length} réponses correctes`);
    }
  };

  const resetExercise = () => {
    const initialAnswers: Record<number, string> = {};
    exercise.clues.forEach(clue => {
      initialAnswers[clue.id] = '';
    });
    setAnswers(initialAnswers);
    setRevealed(new Set());
    setShowHints(new Set());
    setSubmitted(false);
  };

  const score = submitted 
    ? exercise.clues.filter(clue => answers[clue.id]?.toUpperCase() === clue.answer.toUpperCase()).length 
    : 0;

  const acrossClues = exercise.clues.filter(c => c.direction === 'across');
  const downClues = exercise.clues.filter(c => c.direction === 'down');

  return (
    <div className="min-h-screen bg-background py-8">

      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs customTitle={exercise.title} customSection={{ label: 'Mots croisés', path: '/exercices' }} />
        
        <Link to="/exercices" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux exercices
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Puzzle className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-primary font-heading">{exercise.title}</h1>
            <p className="text-muted-foreground">{exercise.description}</p>
          </div>
          <Badge variant={exercise.difficulty === 'easy' ? 'secondary' : exercise.difficulty === 'hard' ? 'destructive' : 'default'} className="ml-auto">
            {exercise.difficulty}
          </Badge>
        </div>

        {submitted && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">
                  Score: {score}/{exercise.clues.length}
                </p>
                <p className="text-muted-foreground">
                  {score === exercise.clues.length 
                    ? 'Excellent ! Puzzle complet !' 
                    : score >= exercise.clues.length / 2 
                      ? 'Bien joué ! Continuez !' 
                      : 'Continuez à pratiquer !'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Across Clues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">→</span> Horizontal (Across)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {acrossClues.map((clue) => {
                const isCorrect = submitted && answers[clue.id]?.toUpperCase() === clue.answer.toUpperCase();
                const isWrong = submitted && answers[clue.id] && !isCorrect;
                
                return (
                  <div key={clue.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : isWrong ? 'bg-red-50 border-red-200' : 'bg-card'}`}>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary">{clue.id}.</span>
                      <div className="flex-1">
                        <p className="mb-2">{clue.clue}</p>
                        {showHints.has(clue.id) && clue.hint && (
                          <p className="text-sm text-muted-foreground italic mb-2">💡 {clue.hint}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <Input
                            value={answers[clue.id] || ''}
                            onChange={(e) => handleAnswerChange(clue.id, e.target.value)}
                            className={`font-mono uppercase ${isCorrect ? 'border-green-500' : isWrong ? 'border-red-500' : ''}`}
                            maxLength={clue.answer.length}
                            placeholder={`${clue.answer.length} letters`}
                            disabled={revealed.has(clue.id)}
                          />
                          {isCorrect && <Check className="h-5 w-5 text-green-600" />}
                          {isWrong && <X className="h-5 w-5 text-red-600" />}
                        </div>
                        {submitted && isWrong && (
                          <p className="text-sm text-green-600 mt-1">Réponse: {clue.answer}</p>
                        )}
                        {clue.translationFr && (
                          <p className="text-xs text-muted-foreground mt-1">🇫🇷 {clue.translationFr}</p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <Button variant="ghost" size="sm" onClick={() => toggleHint(clue.id)}>
                            <HelpCircle className="h-4 w-4 mr-1" />
                            Indice
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => revealAnswer(clue)} disabled={revealed.has(clue.id)}>
                            <Eye className="h-4 w-4 mr-1" />
                            Révéler
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Down Clues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">↓</span> Vertical (Down)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {downClues.map((clue) => {
                const isCorrect = submitted && answers[clue.id]?.toUpperCase() === clue.answer.toUpperCase();
                const isWrong = submitted && answers[clue.id] && !isCorrect;
                
                return (
                  <div key={clue.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : isWrong ? 'bg-red-50 border-red-200' : 'bg-card'}`}>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary">{clue.id}.</span>
                      <div className="flex-1">
                        <p className="mb-2">{clue.clue}</p>
                        {showHints.has(clue.id) && clue.hint && (
                          <p className="text-sm text-muted-foreground italic mb-2">💡 {clue.hint}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <Input
                            value={answers[clue.id] || ''}
                            onChange={(e) => handleAnswerChange(clue.id, e.target.value)}
                            className={`font-mono uppercase ${isCorrect ? 'border-green-500' : isWrong ? 'border-red-500' : ''}`}
                            maxLength={clue.answer.length}
                            placeholder={`${clue.answer.length} letters`}
                            disabled={revealed.has(clue.id)}
                          />
                          {isCorrect && <Check className="h-5 w-5 text-green-600" />}
                          {isWrong && <X className="h-5 w-5 text-red-600" />}
                        </div>
                        {submitted && isWrong && (
                          <p className="text-sm text-green-600 mt-1">Réponse: {clue.answer}</p>
                        )}
                        {clue.translationFr && (
                          <p className="text-xs text-muted-foreground mt-1">🇫🇷 {clue.translationFr}</p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <Button variant="ghost" size="sm" onClick={() => toggleHint(clue.id)}>
                            <HelpCircle className="h-4 w-4 mr-1" />
                            Indice
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => revealAnswer(clue)} disabled={revealed.has(clue.id)}>
                            <Eye className="h-4 w-4 mr-1" />
                            Révéler
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {!submitted ? (
            <Button onClick={handleSubmit} size="lg" className="gap-2">
              <Check className="h-5 w-5" />
              Vérifier mes réponses
            </Button>
          ) : (
            <Button onClick={resetExercise} variant="outline" size="lg" className="gap-2">
              <RotateCcw className="h-5 w-5" />
              Recommencer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrosswordExerciseDetail;
