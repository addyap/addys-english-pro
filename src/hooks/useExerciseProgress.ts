import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface ExerciseResult {
  exerciseId: string;
  exerciseType: 'vocabulary' | 'grammar';
  score: number;
  totalQuestions: number;
  completedAt: string;
  title: string;
}

export interface ProgressStats {
  totalCompleted: number;
  averageScore: number;
  grammarCompleted: number;
  vocabularyCompleted: number;
  recentResults: ExerciseResult[];
}

const STORAGE_KEY = 'exercise-progress';

export function useExerciseProgress() {
  const [progress, setProgress] = useLocalStorage<ExerciseResult[]>(STORAGE_KEY, []);

  const saveResult = useCallback((result: Omit<ExerciseResult, 'completedAt'>) => {
    const newResult: ExerciseResult = {
      ...result,
      completedAt: new Date().toISOString(),
    };

    setProgress(prev => {
      // Update existing or add new
      const existingIndex = prev.findIndex(
        r => r.exerciseId === result.exerciseId && r.exerciseType === result.exerciseType
      );
      
      if (existingIndex >= 0) {
        // Keep the best score
        if (result.score > prev[existingIndex].score) {
          const updated = [...prev];
          updated[existingIndex] = newResult;
          return updated;
        }
        return prev;
      }
      
      return [...prev, newResult];
    });
  }, [setProgress]);

  const getResult = useCallback((exerciseId: string, exerciseType: 'vocabulary' | 'grammar'): ExerciseResult | undefined => {
    return progress.find(r => r.exerciseId === exerciseId && r.exerciseType === exerciseType);
  }, [progress]);

  const getStats = useCallback((): ProgressStats => {
    const grammarResults = progress.filter(r => r.exerciseType === 'grammar');
    const vocabularyResults = progress.filter(r => r.exerciseType === 'vocabulary');
    
    const totalScore = progress.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0);
    const averageScore = progress.length > 0 ? Math.round(totalScore / progress.length) : 0;

    const recentResults = [...progress]
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .slice(0, 10);

    return {
      totalCompleted: progress.length,
      averageScore,
      grammarCompleted: grammarResults.length,
      vocabularyCompleted: vocabularyResults.length,
      recentResults,
    };
  }, [progress]);

  const clearProgress = useCallback(() => {
    setProgress([]);
  }, [setProgress]);

  return {
    progress,
    saveResult,
    getResult,
    getStats,
    clearProgress,
  };
}
