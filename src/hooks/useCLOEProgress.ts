import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface CLOEResult {
  exerciseId: string;
  category: 'vocabulary' | 'grammar' | 'expressions' | 'reading' | 'listening';
  difficulty: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  score: number;
  totalQuestions: number;
  completedAt: string;
  title: string;
}

export interface CLOEProgressStats {
  totalCompleted: number;
  totalExercises: number;
  averageScore: number;
  byCategory: Record<string, { completed: number; total: number; avgScore: number }>;
  byDifficulty: Record<string, { completed: number; total: number; avgScore: number }>;
  recentResults: CLOEResult[];
  masteryLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const STORAGE_KEY = 'cloe-progress';

export function useCLOEProgress() {
  const [results, setResults] = useLocalStorage<CLOEResult[]>(STORAGE_KEY, []);

  const saveResult = useCallback((result: Omit<CLOEResult, 'completedAt'>) => {
    const newResult: CLOEResult = {
      ...result,
      completedAt: new Date().toISOString(),
    };

    setResults(prev => {
      const existingIndex = prev.findIndex(r => r.exerciseId === result.exerciseId);
      
      if (existingIndex >= 0) {
        // Keep the best score
        const existingScore = (prev[existingIndex].score / prev[existingIndex].totalQuestions) * 100;
        const newScore = (result.score / result.totalQuestions) * 100;
        
        if (newScore > existingScore) {
          const updated = [...prev];
          updated[existingIndex] = newResult;
          return updated;
        }
        return prev;
      }
      
      return [...prev, newResult];
    });
  }, [setResults]);

  const getResult = useCallback((exerciseId: string): CLOEResult | undefined => {
    return results.find(r => r.exerciseId === exerciseId);
  }, [results]);

  const getStats = useCallback((totalExercises: number): CLOEProgressStats => {
    const categoryStats: Record<string, { scores: number[]; count: number }> = {};
    const difficultyStats: Record<string, { scores: number[]; count: number }> = {};
    
    results.forEach(r => {
      const scorePercent = (r.score / r.totalQuestions) * 100;
      
      // Category stats
      if (!categoryStats[r.category]) {
        categoryStats[r.category] = { scores: [], count: 0 };
      }
      categoryStats[r.category].scores.push(scorePercent);
      categoryStats[r.category].count++;
      
      // Difficulty stats
      if (!difficultyStats[r.difficulty]) {
        difficultyStats[r.difficulty] = { scores: [], count: 0 };
      }
      difficultyStats[r.difficulty].scores.push(scorePercent);
      difficultyStats[r.difficulty].count++;
    });

    const byCategory: CLOEProgressStats['byCategory'] = {};
    const categoryTotals: Record<string, number> = {
      vocabulary: 15, grammar: 10, expressions: 7, reading: 5, listening: 5
    };
    
    Object.entries(categoryStats).forEach(([cat, data]) => {
      byCategory[cat] = {
        completed: data.count,
        total: categoryTotals[cat] || 10,
        avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length)
      };
    });

    const byDifficulty: CLOEProgressStats['byDifficulty'] = {};
    Object.entries(difficultyStats).forEach(([diff, data]) => {
      byDifficulty[diff] = {
        completed: data.count,
        total: 10, // Approximate
        avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length)
      };
    });

    const totalScore = results.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0);
    const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

    const recentResults = [...results]
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .slice(0, 5);

    // Mastery level based on completion and score
    const completionRate = (results.length / totalExercises) * 100;
    let masteryLevel: CLOEProgressStats['masteryLevel'] = 'beginner';
    if (completionRate >= 75 && averageScore >= 80) masteryLevel = 'expert';
    else if (completionRate >= 50 && averageScore >= 70) masteryLevel = 'advanced';
    else if (completionRate >= 25 && averageScore >= 60) masteryLevel = 'intermediate';

    return {
      totalCompleted: results.length,
      totalExercises,
      averageScore,
      byCategory,
      byDifficulty,
      recentResults,
      masteryLevel,
    };
  }, [results]);

  const clearProgress = useCallback(() => {
    setResults([]);
  }, [setResults]);

  const isCompleted = useCallback((exerciseId: string): boolean => {
    return results.some(r => r.exerciseId === exerciseId);
  }, [results]);

  const getScoreForExercise = useCallback((exerciseId: string): number | null => {
    const result = results.find(r => r.exerciseId === exerciseId);
    return result ? Math.round((result.score / result.totalQuestions) * 100) : null;
  }, [results]);

  return {
    results,
    saveResult,
    getResult,
    getStats,
    clearProgress,
    isCompleted,
    getScoreForExercise,
  };
}
