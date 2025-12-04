import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, BookOpen, Clock } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { readingPassages } from '@/data/readingPassages';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useExerciseProgress } from '@/hooks/useExerciseProgress';

const difficultyColors = {
  easy: 'bg-green-500/10 text-green-600 border-green-500/20',
  medium: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  hard: 'bg-red-500/10 text-red-600 border-red-500/20',
};

const difficultyLabels = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Avancé',
};

export default function ReadingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveResult } = useExerciseProgress();
  
  const passage = readingPassages.find(p => p.id === Number(id));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!passage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Texte non trouvé</h1>
          <Link to="/reading">
            <Button>Retour aux textes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = readingPassages.findIndex(p => p.id === passage.id);
  const prevPassage = currentIndex > 0 ? readingPassages[currentIndex - 1] : null;
  const nextPassage = currentIndex < readingPassages.length - 1 ? readingPassages[currentIndex + 1] : null;

  const handleSubmit = () => {
    let correct = 0;
    passage.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    
    // Save progress - adapt to existing interface
    saveResult({
      exerciseId: `reading-${passage.id}`,
      title: passage.title,
      exerciseType: 'vocabulary', // Using vocabulary type for reading comprehension
      score: correct,
      totalQuestions: passage.questions.length,
    });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = Object.keys(answers).length === passage.questions.length;
  const scorePercentage = Math.round((score / passage.questions.length) * 100);

  return (
    <>
      <SEOHead
        title={`${passage.title} | Compréhension Écrite`}
        description={`Lisez "${passage.title}" et testez votre compréhension avec ${passage.questions.length} questions.`}
        canonical={`/reading/${passage.id}`}
      />

      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link to="/reading" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Retour aux textes
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Badge className={difficultyColors[passage.difficulty]}>
                {difficultyLabels[passage.difficulty]}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {passage.readingTime} min de lecture
              </span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-1 font-heading">{passage.title}</h1>
            <p className="text-lg text-muted-foreground">{passage.titleFr}</p>
          </div>

          {/* Text Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Texte à lire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                {passage.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Questions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Questions de compréhension</CardTitle>
              {!showResults && (
                <Progress 
                  value={(Object.keys(answers).length / passage.questions.length) * 100} 
                  className="h-2 mt-2"
                />
              )}
            </CardHeader>
            <CardContent className="space-y-8">
              {passage.questions.map((question, qIdx) => (
                <div key={qIdx} className="space-y-3">
                  <p className="font-medium text-foreground">
                    {qIdx + 1}. {question.question}
                  </p>
                  <RadioGroup
                    value={answers[qIdx]?.toString()}
                    onValueChange={(value) => setAnswers({ ...answers, [qIdx]: parseInt(value) })}
                    disabled={showResults}
                    className="space-y-2"
                  >
                    {question.options.map((option, oIdx) => {
                      const isCorrect = oIdx === question.correctAnswer;
                      const isSelected = answers[qIdx] === oIdx;
                      let optionClass = '';
                      
                      if (showResults) {
                        if (isCorrect) {
                          optionClass = 'bg-green-50 border-green-500';
                        } else if (isSelected && !isCorrect) {
                          optionClass = 'bg-red-50 border-red-500';
                        }
                      }

                      return (
                        <div key={oIdx} className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${optionClass}`}>
                          <RadioGroupItem value={oIdx.toString()} id={`q${qIdx}-o${oIdx}`} />
                          <Label htmlFor={`q${qIdx}-o${oIdx}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                          {showResults && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {showResults && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      );
                    })}
                  </RadioGroup>
                  {showResults && (
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                      💡 {question.explanation}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Results / Actions */}
          {showResults ? (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-2">
                    {score}/{passage.questions.length}
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    {scorePercentage >= 80 ? 'Excellent travail ! 🎉' : 
                     scorePercentage >= 60 ? 'Bon travail ! 👍' : 
                     'Continuez à pratiquer ! 💪'}
                  </p>
                  <Button onClick={handleReset} variant="outline" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Réessayer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center mb-8">
              <Button 
                onClick={handleSubmit} 
                disabled={!allAnswered}
                size="lg"
                className="gap-2"
              >
                <CheckCircle className="h-5 w-5" />
                Vérifier mes réponses
              </Button>
              {!allAnswered && (
                <p className="text-sm text-muted-foreground mt-2">
                  Répondez à toutes les questions pour voir vos résultats
                </p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            {prevPassage ? (
              <Link to={`/reading/${prevPassage.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {prevPassage.title}
                </Button>
              </Link>
            ) : <div />}
            {nextPassage && (
              <Link to={`/reading/${nextPassage.id}`}>
                <Button variant="outline" className="gap-2">
                  {nextPassage.title}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
