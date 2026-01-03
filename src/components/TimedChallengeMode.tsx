import { useState } from 'react';
import { Timer, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface TimedChallengeModeProps {
  questionCount: number;
  onStart: (seconds: number) => void;
  disabled?: boolean;
}

const TIME_OPTIONS = [
  { seconds: 60, label: '1 min', description: 'Défi éclair', icon: '⚡', difficulty: 'Difficile' },
  { seconds: 120, label: '2 min', description: 'Rythme soutenu', icon: '🔥', difficulty: 'Moyen' },
  { seconds: 180, label: '3 min', description: 'Confortable', icon: '✨', difficulty: 'Facile' },
];

export function TimedChallengeMode({ questionCount, onStart, disabled = false }: TimedChallengeModeProps) {
  const [open, setOpen] = useState(false);

  const handleStart = (seconds: number) => {
    setOpen(false);
    onStart(seconds);
  };

  const secondsPerQuestion = (totalSeconds: number) => Math.round(totalSeconds / questionCount);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          disabled={disabled}
        >
          <Timer className="w-4 h-4" />
          Mode Chrono
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Défi Chronométré
          </DialogTitle>
          <DialogDescription>
            Testez votre vitesse! Choisissez un temps limite pour répondre à {questionCount} questions.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-3 py-4">
          {TIME_OPTIONS.map((option) => (
            <Card 
              key={option.seconds}
              className="cursor-pointer transition-all hover:border-primary hover:shadow-md"
              onClick={() => handleStart(option.seconds)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{option.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{option.label}</span>
                      <span>•</span>
                      <span>~{secondsPerQuestion(option.seconds)}s/question</span>
                    </div>
                  </div>
                </div>
                <Badge variant={option.difficulty === 'Difficile' ? 'destructive' : option.difficulty === 'Moyen' ? 'default' : 'secondary'}>
                  {option.difficulty}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>💡 Gagnez des points bonus et des badges en mode chrono!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
