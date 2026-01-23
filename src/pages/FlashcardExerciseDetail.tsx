import React, { useState, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RotateCcw, BookOpen, Shuffle, ChevronRight, ChevronLeft, Check, X, Volume2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { flashcardSets, Flashcard } from '@/data/flashcardExercises';
import { motion, AnimatePresence } from 'framer-motion';

const FlashcardExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = flashcardSets.find(e => e.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());
  const [unknownCards, setUnknownCards] = useState<Set<number>>(new Set());
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [isShuffled, setIsShuffled] = useState(false);

  // Reset state when exercise ID changes
  React.useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
    setShuffledCards([]);
    setIsShuffled(false);
  }, [id]);

  // Initialize cards
  const cards = useMemo(() => {
    if (!exercise) return [];
    return isShuffled && shuffledCards.length > 0 ? shuffledCards : exercise.cards;
  }, [exercise, isShuffled, shuffledCards]);

  const currentCard = cards[currentIndex];
  const progress = ((knownCards.size + unknownCards.size) / cards.length) * 100;

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, cards.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const handleKnown = useCallback(() => {
    if (currentCard) {
      setKnownCards(prev => new Set(prev).add(currentCard.id));
      setUnknownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
    }
    handleNext();
  }, [currentCard, handleNext]);

  const handleUnknown = useCallback(() => {
    if (currentCard) {
      setUnknownCards(prev => new Set(prev).add(currentCard.id));
      setKnownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
    }
    handleNext();
  }, [currentCard, handleNext]);

  const handleShuffle = useCallback(() => {
    if (!exercise) return;
    const shuffled = [...exercise.cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setIsShuffled(true);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [exercise]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
    setIsShuffled(false);
    setShuffledCards([]);
  }, []);

  const speakWord = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, []);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercice non trouvé</h1>
          <Link to="/exercices">
            <Button>Retour aux exercices</Button>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColor = {
    easy: 'bg-green-500/10 text-green-700',
    medium: 'bg-amber-500/10 text-amber-700',
    hard: 'bg-red-500/10 text-red-700'
  };

  return (
    <>
      <SEOHead
        title={`${exercise.title} - Flashcards | Antony Addy`}
        description={exercise.description}
        canonicalUrl={`https://www.antonyaddy.com/exercices/flashcards/${id}`}
      />

      <div className="min-h-screen bg-background py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link to="/exercices" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold font-heading">{exercise.title}</h1>
              <Badge className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
            </div>
            <p className="text-muted-foreground">{exercise.descriptionFr}</p>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Carte {currentIndex + 1} / {cards.length}</span>
              <span className="flex gap-4">
                <span className="text-green-600">✓ {knownCards.size}</span>
                <span className="text-red-600">✗ {unknownCards.size}</span>
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-2 mb-6">
            <Button variant="outline" size="sm" onClick={handleShuffle}>
              <Shuffle className="h-4 w-4 mr-1" />
              Mélanger
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Recommencer
            </Button>
          </div>

          {/* Flashcard */}
          {currentCard && (
            <div className="relative mb-6" style={{ perspective: '1000px' }}>
              <motion.div
                className="cursor-pointer"
                onClick={handleFlip}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="min-h-[280px] flex items-center justify-center relative">
                  <CardContent 
                    className="p-8 text-center w-full"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {!isFlipped ? (
                      <div className="space-y-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-4 right-4"
                          onClick={(e) => {
                            e.stopPropagation();
                            speakWord(currentCard.front);
                          }}
                        >
                          <Volume2 className="h-5 w-5" />
                        </Button>
                        <p className="text-3xl font-bold text-primary">{currentCard.front}</p>
                        <p className="text-muted-foreground text-sm">Cliquez pour retourner</p>
                      </div>
                    ) : (
                      <div 
                        className="space-y-4"
                        style={{ transform: 'rotateY(180deg)' }}
                      >
                        <p className="text-2xl font-semibold text-foreground">{currentCard.back}</p>
                        <div className="border-t pt-4 mt-4">
                          <p className="text-sm text-muted-foreground mb-1">Exemple :</p>
                          <p className="text-base italic">"{currentCard.example}"</p>
                          <p className="text-sm text-muted-foreground mt-2">{currentCard.exampleTranslation}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 max-w-32 border-red-300 text-red-600 hover:bg-red-50"
              onClick={handleUnknown}
              disabled={currentIndex >= cards.length}
            >
              <X className="h-5 w-5 mr-1" />
              À revoir
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 max-w-32 border-green-300 text-green-600 hover:bg-green-50"
              onClick={handleKnown}
              disabled={currentIndex >= cards.length}
            >
              <Check className="h-5 w-5 mr-1" />
              Je sais
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Précédent
            </Button>
            <Button
              variant="ghost"
              onClick={handleNext}
              disabled={currentIndex >= cards.length - 1}
            >
              Suivant
              <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </div>

          {/* Completion Message */}
          {knownCards.size + unknownCards.size === cards.length && (
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Session terminée ! 🎉</h3>
                <p className="text-muted-foreground mb-4">
                  Vous connaissez {knownCards.size} / {cards.length} cartes
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleReset}>
                    Recommencer
                  </Button>
                  <Link to="/exercices">
                    <Button>Autres exercices</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other Sets */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Autres sets de flashcards</h3>
            <div className="grid gap-3">
              {flashcardSets.filter(s => s.id !== id).slice(0, 3).map(set => (
                <Link key={set.id} to={`/exercices/flashcards/${set.id}`}>
                  <Card className="hover:bg-accent/5 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">{set.title}</p>
                        <p className="text-sm text-muted-foreground">{set.cards.length} cartes</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardExerciseDetail;
