import { Timer, Pause, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuizTimerProps {
  formattedTime: string;
  progress: number;
  isRunning: boolean;
  isPaused: boolean;
  isLow: boolean;
  isCritical: boolean;
  isTimeUp: boolean;
  onPause?: () => void;
  onResume?: () => void;
  showControls?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function QuizTimer({
  formattedTime,
  progress,
  isRunning,
  isPaused,
  isLow,
  isCritical,
  isTimeUp,
  onPause,
  onResume,
  showControls = false,
  size = 'md',
}: QuizTimerProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        <Timer 
          className={cn(
            "transition-colors",
            size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8',
            isCritical ? 'text-destructive animate-pulse' : isLow ? 'text-accent' : 'text-primary'
          )} 
        />
        <span 
          className={cn(
            "font-mono font-bold transition-colors",
            sizeClasses[size],
            isCritical ? 'text-destructive animate-pulse' : isLow ? 'text-accent' : 'text-foreground'
          )}
        >
          {formattedTime}
        </span>
        {showControls && isRunning && (
          <Button
            variant="ghost"
            size="icon"
            onClick={isPaused ? onResume : onPause}
            className="h-8 w-8"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
        )}
      </div>
      <Progress 
        value={progress} 
        className={cn(
          "h-2 transition-colors",
          size === 'sm' ? 'w-24' : size === 'md' ? 'w-32' : 'w-48',
          isCritical ? '[&>div]:bg-destructive' : isLow ? '[&>div]:bg-accent' : ''
        )}
      />
      {isTimeUp && (
        <span className="text-destructive font-semibold text-sm animate-pulse">
          Temps écoulé! / Time's up!
        </span>
      )}
    </div>
  );
}
