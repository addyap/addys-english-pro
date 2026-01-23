import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Check, X, RotateCcw, Shuffle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { sentenceBuildingExercises, getSentenceBuildingExerciseById } from '@/data/sentenceBuildingExercises';

const SentenceBuildingExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = getSentenceBuildingExerciseById(Number(id));
  
  const [selectedWords, setSelectedWords] = useState<Record<number, number[]>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  // Reset state when exercise ID changes
  useEffect(() => {
    setSelectedWords({});
    setSubmitted({});
    setShowHints({});
  }, [id]);

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">Exercise not found.</p>
        <Link to="/exercices" className="text-primary hover:underline block text-center mt-4">
          Return to exercises
        </Link>
      </div>
    );
  }

  const currentIndex = sentenceBuildingExercises.findIndex(ex => ex.id === exercise.id);
  const prevExercise = currentIndex > 0 ? sentenceBuildingExercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < sentenceBuildingExercises.length - 1 ? sentenceBuildingExercises[currentIndex + 1] : null;

  const handleWordClick = (sentenceId: number, wordIndex: number) => {
    if (submitted[sentenceId]) return;
    
    setSelectedWords(prev => {
      const current = prev[sentenceId] || [];
      if (current.includes(wordIndex)) {
        return { ...prev, [sentenceId]: current.filter(i => i !== wordIndex) };
      }
      return { ...prev, [sentenceId]: [...current, wordIndex] };
    });
  };

  const removeWord = (sentenceId: number, position: number) => {
    if (submitted[sentenceId]) return;
    
    setSelectedWords(prev => {
      const current = prev[sentenceId] || [];
      return { ...prev, [sentenceId]: current.filter((_, i) => i !== position) };
    });
  };

  const handleSubmit = (sentenceId: number) => {
    setSubmitted(prev => ({ ...prev, [sentenceId]: true }));
  };

  const toggleHint = (sentenceId: number) => {
    setShowHints(prev => ({ ...prev, [sentenceId]: !prev[sentenceId] }));
  };

  const isCorrect = (sentenceId: number) => {
    const sentence = exercise.sentences.find(s => s.id === sentenceId);
    if (!sentence) return false;
    
    const userOrder = selectedWords[sentenceId] || [];
    if (userOrder.length !== sentence.correctOrder.length) return false;
    
    return userOrder.every((wordIdx, pos) => wordIdx === sentence.correctOrder[pos]);
  };

  const getUserSentence = (sentenceId: number, words: string[]) => {
    const order = selectedWords[sentenceId] || [];
    return order.map(idx => words[idx]).join(' ');
  };

  const resetExercise = () => {
    setSelectedWords({});
    setSubmitted({});
    setShowHints({});
  };

  const completedCount = Object.keys(submitted).length;
  const correctCount = exercise.sentences.filter(s => 
    submitted[s.id] && isCorrect(s.id)
  ).length;

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700'
  };

  return (
    <>
      <Helmet>
        <title>{exercise.title} - Sentence Building | Antony Music English</title>
        <meta name="description" content={exercise.description} />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs 
          customTitle={exercise.title}
          customSection={{ label: 'Construction de phrases', path: '/exercices' }}
        />

        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              {showTranslation ? exercise.titleFr : exercise.title}
            </h1>
            <div className="flex items-center gap-2">
              <Badge className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
              <Badge variant="outline">{exercise.theme}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground font-body">
            {showTranslation ? exercise.descriptionFr : exercise.description}
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTranslation(!showTranslation)}
            >
              {showTranslation ? 'English' : 'Français'}
            </Button>
            
            {completedCount > 0 && (
              <span className="text-sm text-muted-foreground">
                Score: {correctCount}/{completedCount}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {exercise.sentences.map((sentence, index) => {
            const currentSelection = selectedWords[sentence.id] || [];
            const availableWords = sentence.words.filter((_, idx) => !currentSelection.includes(idx));
            
            return (
              <Card key={sentence.id} className={`border-border ${
                submitted[sentence.id] 
                  ? isCorrect(sentence.id)
                    ? 'border-green-300 bg-green-50/50'
                    : 'border-red-300 bg-red-50/50'
                  : ''
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">
                      Sentence {index + 1}
                    </CardTitle>
                    {!submitted[sentence.id] && sentence.hint && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleHint(sentence.id)}
                        className="text-muted-foreground"
                      >
                        <HelpCircle className="h-4 w-4 mr-1" />
                        {showHints[sentence.id] ? 'Hide hint' : 'Show hint'}
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {showHints[sentence.id] && !submitted[sentence.id] && sentence.hint && (
                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Hint:</strong> {sentence.hint}
                      </p>
                    </div>
                  )}

                  {/* Your sentence area */}
                  <div className="bg-muted/50 p-4 rounded-lg min-h-[60px]">
                    <p className="text-xs text-muted-foreground mb-2">Your sentence:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentSelection.length === 0 ? (
                        <span className="text-muted-foreground italic text-sm">Click words below to build your sentence...</span>
                      ) : (
                        currentSelection.map((wordIdx, pos) => (
                          <button
                            key={`selected-${pos}`}
                            onClick={() => removeWord(sentence.id, pos)}
                            disabled={submitted[sentence.id]}
                            className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/80 transition-colors disabled:opacity-50"
                          >
                            {sentence.words[wordIdx]}
                          </button>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Available words */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Available words:</p>
                    <div className="flex flex-wrap gap-2">
                      {sentence.words.map((word, idx) => {
                        const isSelected = currentSelection.includes(idx);
                        return (
                          <button
                            key={`word-${idx}`}
                            onClick={() => handleWordClick(sentence.id, idx)}
                            disabled={submitted[sentence.id] || isSelected}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                              isSelected
                                ? 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer'
                            }`}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {!submitted[sentence.id] && (
                    <Button 
                      onClick={() => handleSubmit(sentence.id)}
                      disabled={currentSelection.length !== sentence.words.length}
                      className="w-full sm:w-auto"
                    >
                      Check Answer
                    </Button>
                  )}

                  {submitted[sentence.id] && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        {isCorrect(sentence.id) ? (
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          {!isCorrect(sentence.id) && (
                            <p className="text-sm">
                              <span className="text-red-700">Your answer:</span>{' '}
                              <span className="line-through">{getUserSentence(sentence.id, sentence.words)}</span>
                            </p>
                          )}
                          <p className="text-sm">
                            <span className="text-green-700">Correct answer:</span>{' '}
                            <strong>{sentence.correctSentence}</strong>
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg text-sm">
                        <p className="text-muted-foreground">
                          <strong>Translation:</strong> {sentence.translation}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {completedCount === exercise.sentences.length && (
          <Card className="mt-8 border-primary bg-primary/5">
            <CardContent className="py-6 text-center">
              <h3 className="text-xl font-heading font-bold mb-2">
                Exercise Complete!
              </h3>
              <p className="text-lg mb-4">
                Your score: <strong className="text-primary">{correctCount}</strong> / {exercise.sentences.length}
              </p>
              <Button onClick={resetExercise} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          {prevExercise ? (
            <Link to={`/exercices/sentence-building/${prevExercise.id}`}>
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                {prevExercise.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {nextExercise ? (
            <Link to={`/exercices/sentence-building/${nextExercise.id}`}>
              <Button variant="outline">
                {nextExercise.title}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Link to="/exercices">
              <Button variant="outline">
                Back to Exercises
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SentenceBuildingExerciseDetail;
