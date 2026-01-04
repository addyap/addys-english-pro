import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Check, X, RotateCcw, Shuffle, Link2 } from 'lucide-react';
import { getMatchingExerciseById, MatchingPair } from '@/data/matchingExercises';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Breadcrumbs from '@/components/Breadcrumbs';

const MatchingExerciseDetail = () => {
  const { id } = useParams();
  const exercise = getMatchingExerciseById(Number(id));
  
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [shuffledDefinitions, setShuffledDefinitions] = useState<MatchingPair[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (exercise) {
      // Shuffle definitions for the exercise
      const shuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
      setShuffledDefinitions(shuffled);
    }
  }, [exercise]);

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

  const handleWordClick = (pairId: number) => {
    if (submitted) return;
    
    if (selectedWord === pairId) {
      setSelectedWord(null);
    } else {
      setSelectedWord(pairId);
    }
  };

  const handleDefinitionClick = (pairId: number) => {
    if (submitted || selectedWord === null) return;
    
    // Create the match
    setMatches(prev => ({
      ...prev,
      [selectedWord]: pairId
    }));
    setSelectedWord(null);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = Object.entries(matches).filter(
      ([wordId, defId]) => Number(wordId) === Number(defId)
    ).length;
    
    if (correct === exercise.pairs.length) {
      toast.success('Parfait ! Tous les appariements sont corrects !');
    } else {
      toast.info(`${correct}/${exercise.pairs.length} appariements corrects`);
    }
  };

  const resetExercise = () => {
    setSelectedWord(null);
    setMatches({});
    setSubmitted(false);
    const shuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
    setShuffledDefinitions(shuffled);
  };

  const removeMatch = (wordId: number) => {
    if (submitted) return;
    const newMatches = { ...matches };
    delete newMatches[wordId];
    setMatches(newMatches);
  };

  const score = submitted 
    ? Object.entries(matches).filter(([wordId, defId]) => Number(wordId) === Number(defId)).length 
    : 0;

  const matchedDefinitions = new Set(Object.values(matches));

  return (
    <div className="min-h-screen bg-background py-8">

      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs customTitle={exercise.title} customSection={{ label: 'Appariement', path: '/exercices' }} />
        
        <Link to="/exercices" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux exercices
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Link2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-primary font-heading">{exercise.title}</h1>
            <p className="text-muted-foreground">{exercise.description}</p>
          </div>
          <Badge variant={exercise.difficulty === 'easy' ? 'secondary' : exercise.difficulty === 'hard' ? 'destructive' : 'default'} className="ml-auto">
            {exercise.difficulty}
          </Badge>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Cliquez sur un mot à gauche, puis sur sa définition correspondante à droite pour créer un appariement.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Appariements réalisés: {Object.keys(matches).length}/{exercise.pairs.length}
            </p>
          </CardContent>
        </Card>

        {submitted && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">
                  Score: {score}/{exercise.pairs.length}
                </p>
                <p className="text-muted-foreground">
                  {score === exercise.pairs.length 
                    ? 'Excellent ! Tous les appariements sont corrects !' 
                    : score >= exercise.pairs.length / 2 
                      ? 'Bien joué ! Continuez !' 
                      : 'Continuez à pratiquer !'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Words Column */}
          <Card>
            <CardHeader>
              <CardTitle>Mots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {exercise.pairs.map((pair) => {
                const isMatched = matches[pair.id] !== undefined;
                const isSelected = selectedWord === pair.id;
                const isCorrect = submitted && matches[pair.id] === pair.id;
                const isWrong = submitted && isMatched && matches[pair.id] !== pair.id;
                
                return (
                  <button
                    key={pair.id}
                    onClick={() => isMatched ? removeMatch(pair.id) : handleWordClick(pair.id)}
                    disabled={submitted}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      isCorrect 
                        ? 'bg-green-50 border-green-300 text-green-800' 
                        : isWrong 
                          ? 'bg-red-50 border-red-300 text-red-800'
                          : isSelected 
                            ? 'bg-primary/10 border-primary ring-2 ring-primary'
                            : isMatched
                              ? 'bg-accent/20 border-accent'
                              : 'bg-card hover:bg-accent/10 border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{pair.word}</span>
                      {isMatched && !submitted && <X className="h-4 w-4 text-muted-foreground" />}
                      {isCorrect && <Check className="h-5 w-5 text-green-600" />}
                      {isWrong && <X className="h-5 w-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Definitions Column */}
          <Card>
            <CardHeader>
              <CardTitle>Définitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {shuffledDefinitions.map((pair) => {
                const isMatched = matchedDefinitions.has(pair.id);
                const matchedByWord = Object.entries(matches).find(([_, defId]) => defId === pair.id);
                const isCorrect = submitted && matchedByWord && Number(matchedByWord[0]) === pair.id;
                const isWrong = submitted && matchedByWord && Number(matchedByWord[0]) !== pair.id;
                
                return (
                  <button
                    key={pair.id}
                    onClick={() => handleDefinitionClick(pair.id)}
                    disabled={submitted || isMatched || selectedWord === null}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      isCorrect 
                        ? 'bg-green-50 border-green-300 text-green-800' 
                        : isWrong 
                          ? 'bg-red-50 border-red-300 text-red-800'
                          : isMatched
                            ? 'bg-accent/20 border-accent opacity-60'
                            : selectedWord !== null
                              ? 'bg-card hover:bg-primary/10 border-border cursor-pointer'
                              : 'bg-card border-border opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{pair.definition}</span>
                      {isCorrect && <Check className="h-5 w-5 text-green-600" />}
                      {isWrong && <X className="h-5 w-5 text-red-600" />}
                    </div>
                    {pair.translationFr && submitted && (
                      <p className="text-xs text-muted-foreground mt-1">🇫🇷 {pair.translationFr}</p>
                    )}
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {!submitted ? (
            <>
              <Button 
                onClick={handleSubmit} 
                size="lg" 
                className="gap-2"
                disabled={Object.keys(matches).length < exercise.pairs.length}
              >
                <Check className="h-5 w-5" />
                Vérifier ({Object.keys(matches).length}/{exercise.pairs.length})
              </Button>
              <Button onClick={resetExercise} variant="outline" size="lg" className="gap-2">
                <Shuffle className="h-5 w-5" />
                Mélanger
              </Button>
            </>
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

export default MatchingExerciseDetail;
