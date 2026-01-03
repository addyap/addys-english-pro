import { useState, useEffect, useCallback, useRef } from 'react';

export interface TimerConfig {
  totalSeconds: number;
  onTimeUp?: () => void;
}

export function useQuizTimer({ totalSeconds, onTimeUp }: TimerConfig) {
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onTimeUpRef = useRef(onTimeUp);

  // Keep callback ref updated
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  const reset = useCallback(() => {
    setTimeRemaining(totalSeconds);
    setIsRunning(false);
    setIsPaused(false);
  }, [totalSeconds]);

  const stop = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (isRunning && !isPaused && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            onTimeUpRef.current?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused, timeRemaining]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const progress = totalSeconds > 0 ? (timeRemaining / totalSeconds) * 100 : 0;
  const isLow = timeRemaining <= 10 && timeRemaining > 0;
  const isCritical = timeRemaining <= 5 && timeRemaining > 0;

  return {
    timeRemaining,
    formattedTime: formatTime(timeRemaining),
    progress,
    isRunning,
    isPaused,
    isLow,
    isCritical,
    isTimeUp: timeRemaining === 0,
    start,
    pause,
    resume,
    reset,
    stop,
  };
}
