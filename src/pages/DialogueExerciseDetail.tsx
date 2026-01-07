import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Check, X, RotateCcw, MessageCircle, User, Users } from 'lucide-react';
import { getDialogueExerciseById } from '@/data/dialogueExercises';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Breadcrumbs from '@/components/Breadcrumbs';
import { shuffleArray } from '@/utils/shuffleArray';

const DialogueExerciseDetail = () => {
  const { id } = useParams();
  const exercise = getDialogueExerciseById(Number(id));
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);

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

  const blankLines = exercise.dialogue.filter(line => line.isBlank);

  const handleAnswerChange = (index: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const blankIndices = exercise.dialogue
      .map((line, index) => line.isBlank ? index : -1)
      .filter(i => i !== -1);
    
    const correct = blankIndices.filter(
      index => answers[index] === exercise.dialogue[index].correctAnswer
    ).length;
    
    if (correct === blankLines.length) {
      toast.success('Parfait ! Toutes les réponses sont correctes !');
    } else {
      toast.info(`${correct}/${blankLines.length} réponses correctes`);
    }
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Shuffle options for each blank line once per exercise load
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    exercise.dialogue.forEach((line, index) => {
      if (line.isBlank && line.options) {
        map[index] = shuffleArray(line.options);
      }
    });
    return map;
  }, [exercise.id]);

  const score = submitted 
    ? exercise.dialogue
        .map((line, index) => line.isBlank && answers[index] === line.correctAnswer ? 1 : 0)
        .reduce((a, b) => a + b, 0)
    : 0;

  return (
    <div className="min-h-screen bg-background py-8">

      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs customTitle={exercise.title} customSection={{ label: 'Dialogues', path: '/exercices' }} />
        
        <Link to="/exercices" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux exercices
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-primary font-heading">{exercise.title}</h1>
            <p className="text-muted-foreground">{exercise.description}</p>
          </div>
          <Badge variant={exercise.difficulty === 'easy' ? 'secondary' : exercise.difficulty === 'hard' ? 'destructive' : 'default'} className="ml-auto">
            {exercise.difficulty}
          </Badge>
        </div>

        {/* Context */}
        <Card className="mb-6 bg-accent/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">{exercise.context}</p>
                <p className="text-sm text-muted-foreground">{exercise.contextFr}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {submitted && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">
                  Score: {score}/{blankLines.length}
                </p>
                <p className="text-muted-foreground">
                  {score === blankLines.length 
                    ? 'Excellent ! Dialogue parfait !' 
                    : score >= blankLines.length / 2 
                      ? 'Bien joué ! Continuez !' 
                      : 'Continuez à pratiquer !'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Dialogue */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Dialogue</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowTranslations(!showTranslations)}
              >
                {showTranslations ? 'Masquer traductions' : 'Afficher traductions'}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercise.dialogue.map((line, index) => {
              const isBlank = line.isBlank;
              const isCorrect = submitted && isBlank && answers[index] === line.correctAnswer;
              const isWrong = submitted && isBlank && answers[index] && answers[index] !== line.correctAnswer;
              
              return (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${
                    isCorrect 
                      ? 'bg-green-50 border border-green-200' 
                      : isWrong 
                        ? 'bg-red-50 border border-red-200'
                        : 'bg-card border border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      line.speaker.includes('Customer') || line.speaker.includes('Guest') || line.speaker.includes('Candidate') || line.speaker.includes('Patient') || line.speaker.includes('Sarah') || line.speaker.includes('Tom') || line.speaker.includes('Ms.')
                        ? 'bg-primary/20'
                        : 'bg-accent/20'
                    }`}>
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-muted-foreground mb-1">
                        {line.speaker}
                      </p>
                      {isBlank ? (
                        <div className="space-y-2">
                          <Select
                            value={answers[index] || ''}
                            onValueChange={(value) => handleAnswerChange(index, value)}
                            disabled={submitted}
                          >
                            <SelectTrigger className={`w-full ${isCorrect ? 'border-green-500' : isWrong ? 'border-red-500' : ''}`}>
                              <SelectValue placeholder="Choisissez une réponse..." />
                            </SelectTrigger>
                            <SelectContent>
                              {shuffledOptionsMap[index]?.map((option, optIndex) => (
                                <SelectItem key={optIndex} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {submitted && (
                            <div className="flex items-center gap-2">
                              {isCorrect && (
                                <span className="flex items-center gap-1 text-green-600 text-sm">
                                  <Check className="h-4 w-4" /> Correct !
                                </span>
                              )}
                              {isWrong && (
                                <div className="text-sm">
                                  <span className="flex items-center gap-1 text-red-600">
                                    <X className="h-4 w-4" /> Incorrect
                                  </span>
                                  <p className="text-green-600 mt-1">
                                    ✓ {line.correctAnswer}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          {showTranslations && line.translationFr && (
                            <p className="text-xs text-muted-foreground">🇫🇷 {line.translationFr}</p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <p className="text-foreground">{line.text}</p>
                          {showTranslations && line.translationFr && (
                            <p className="text-xs text-muted-foreground mt-1">🇫🇷 {line.translationFr}</p>
                          )}
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
              disabled={Object.keys(answers).length < blankLines.length}
            >
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

export default DialogueExerciseDetail;
