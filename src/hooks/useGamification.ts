import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface Badge {
  id: string;
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  icon: string;
  requirement: number;
  type: 'exercises' | 'streak' | 'score' | 'speed';
  earnedAt?: string;
}

export interface GamificationData {
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  exercisesCompleted: number;
  perfectScores: number;
  speedChallengesWon: number;
  badges: Badge[];
  level: number;
}

const BADGES: Badge[] = [
  // Exercise completion badges
  { id: 'first-steps', name: 'First Steps', nameFr: 'Premiers pas', description: 'Complete your first exercise', descriptionFr: 'Complétez votre premier exercice', icon: '🎯', requirement: 1, type: 'exercises' },
  { id: 'getting-started', name: 'Getting Started', nameFr: 'Bien parti', description: 'Complete 5 exercises', descriptionFr: 'Complétez 5 exercices', icon: '🚀', requirement: 5, type: 'exercises' },
  { id: 'dedicated-learner', name: 'Dedicated Learner', nameFr: 'Apprenant dévoué', description: 'Complete 25 exercises', descriptionFr: 'Complétez 25 exercices', icon: '📚', requirement: 25, type: 'exercises' },
  { id: 'exercise-master', name: 'Exercise Master', nameFr: 'Maître des exercices', description: 'Complete 100 exercises', descriptionFr: 'Complétez 100 exercices', icon: '🏆', requirement: 100, type: 'exercises' },
  
  // Streak badges
  { id: 'on-fire', name: 'On Fire', nameFr: 'En feu', description: '3-day streak', descriptionFr: 'Série de 3 jours', icon: '🔥', requirement: 3, type: 'streak' },
  { id: 'week-warrior', name: 'Week Warrior', nameFr: 'Guerrier de la semaine', description: '7-day streak', descriptionFr: 'Série de 7 jours', icon: '⚡', requirement: 7, type: 'streak' },
  { id: 'unstoppable', name: 'Unstoppable', nameFr: 'Inarrêtable', description: '30-day streak', descriptionFr: 'Série de 30 jours', icon: '💎', requirement: 30, type: 'streak' },
  
  // Perfect score badges
  { id: 'perfectionist', name: 'Perfectionist', nameFr: 'Perfectionniste', description: 'Get 5 perfect scores', descriptionFr: 'Obtenez 5 scores parfaits', icon: '⭐', requirement: 5, type: 'score' },
  { id: 'flawless', name: 'Flawless', nameFr: 'Sans faute', description: 'Get 20 perfect scores', descriptionFr: 'Obtenez 20 scores parfaits', icon: '✨', requirement: 20, type: 'score' },
  
  // Speed challenge badges
  { id: 'speed-demon', name: 'Speed Demon', nameFr: 'Démon de la vitesse', description: 'Win 3 timed challenges', descriptionFr: 'Gagnez 3 défis chronométrés', icon: '⏱️', requirement: 3, type: 'speed' },
  { id: 'lightning-fast', name: 'Lightning Fast', nameFr: 'Rapide comme l\'éclair', description: 'Win 10 timed challenges', descriptionFr: 'Gagnez 10 défis chronométrés', icon: '⚡', requirement: 10, type: 'speed' },
];

const POINTS_PER_EXERCISE = 10;
const POINTS_PER_CORRECT = 5;
const POINTS_PERFECT_BONUS = 25;
const POINTS_STREAK_BONUS = 10;
const POINTS_SPEED_BONUS = 15;

const STORAGE_KEY = 'gamification-data';

const getInitialData = (): GamificationData => ({
  totalPoints: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  exercisesCompleted: 0,
  perfectScores: 0,
  speedChallengesWon: 0,
  badges: [],
  level: 1,
});

export function useGamification() {
  const [data, setData] = useLocalStorage<GamificationData>(STORAGE_KEY, getInitialData());
  const [newBadges, setNewBadges] = useState<Badge[]>([]);

  // Calculate level based on points
  const calculateLevel = (points: number): number => {
    // Each level requires more points: Level 1 = 0, Level 2 = 100, Level 3 = 250, etc.
    if (points < 100) return 1;
    if (points < 250) return 2;
    if (points < 500) return 3;
    if (points < 1000) return 4;
    if (points < 2000) return 5;
    if (points < 4000) return 6;
    if (points < 8000) return 7;
    if (points < 15000) return 8;
    if (points < 30000) return 9;
    return 10;
  };

  const pointsForNextLevel = (level: number): number => {
    const thresholds = [0, 100, 250, 500, 1000, 2000, 4000, 8000, 15000, 30000];
    return thresholds[Math.min(level, 9)] || 30000;
  };

  // Check and award new badges
  const checkBadges = useCallback((updatedData: GamificationData): Badge[] => {
    const newlyEarned: Badge[] = [];
    const earnedIds = new Set(updatedData.badges.map(b => b.id));

    BADGES.forEach(badge => {
      if (earnedIds.has(badge.id)) return;

      let earned = false;
      switch (badge.type) {
        case 'exercises':
          earned = updatedData.exercisesCompleted >= badge.requirement;
          break;
        case 'streak':
          earned = updatedData.currentStreak >= badge.requirement || updatedData.longestStreak >= badge.requirement;
          break;
        case 'score':
          earned = updatedData.perfectScores >= badge.requirement;
          break;
        case 'speed':
          earned = updatedData.speedChallengesWon >= badge.requirement;
          break;
      }

      if (earned) {
        newlyEarned.push({ ...badge, earnedAt: new Date().toISOString() });
      }
    });

    return newlyEarned;
  }, []);

  // Update streak based on activity
  const updateStreak = useCallback((currentData: GamificationData): { streak: number; longestStreak: number; bonusPoints: number } => {
    const today = new Date().toDateString();
    const lastDate = currentData.lastActivityDate ? new Date(currentData.lastActivityDate).toDateString() : null;

    if (lastDate === today) {
      // Already active today, no streak change
      return { streak: currentData.currentStreak, longestStreak: currentData.longestStreak, bonusPoints: 0 };
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastDate === yesterdayStr) {
      // Consecutive day, increase streak
      const newStreak = currentData.currentStreak + 1;
      const bonusPoints = newStreak > 1 ? POINTS_STREAK_BONUS * Math.min(newStreak, 7) : 0;
      return { 
        streak: newStreak, 
        longestStreak: Math.max(newStreak, currentData.longestStreak),
        bonusPoints 
      };
    }

    // Streak broken or first activity
    return { streak: 1, longestStreak: Math.max(1, currentData.longestStreak), bonusPoints: 0 };
  }, []);

  // Record exercise completion
  const recordExerciseCompletion = useCallback((score: number, totalQuestions: number, isTimedChallenge: boolean = false) => {
    setData(prev => {
      const isPerfect = score === totalQuestions;
      const { streak, longestStreak, bonusPoints: streakBonus } = updateStreak(prev);

      // Calculate points
      let points = POINTS_PER_EXERCISE;
      points += score * POINTS_PER_CORRECT;
      if (isPerfect) points += POINTS_PERFECT_BONUS;
      points += streakBonus;
      if (isTimedChallenge && score >= totalQuestions * 0.7) {
        points += POINTS_SPEED_BONUS;
      }

      const updatedData: GamificationData = {
        ...prev,
        totalPoints: prev.totalPoints + points,
        currentStreak: streak,
        longestStreak: longestStreak,
        lastActivityDate: new Date().toISOString(),
        exercisesCompleted: prev.exercisesCompleted + 1,
        perfectScores: isPerfect ? prev.perfectScores + 1 : prev.perfectScores,
        speedChallengesWon: isTimedChallenge && score >= totalQuestions * 0.7 
          ? prev.speedChallengesWon + 1 
          : prev.speedChallengesWon,
        badges: prev.badges,
        level: 1, // Will be recalculated
      };

      // Check for new badges
      const newlyEarned = checkBadges(updatedData);
      if (newlyEarned.length > 0) {
        updatedData.badges = [...prev.badges, ...newlyEarned];
        setNewBadges(newlyEarned);
      }

      // Recalculate level
      updatedData.level = calculateLevel(updatedData.totalPoints);

      return updatedData;
    });
  }, [setData, updateStreak, checkBadges]);

  // Clear new badge notification
  const clearNewBadges = useCallback(() => {
    setNewBadges([]);
  }, []);

  // Get progress to next level
  const getLevelProgress = useCallback(() => {
    const currentThreshold = pointsForNextLevel(data.level - 1);
    const nextThreshold = pointsForNextLevel(data.level);
    const progress = ((data.totalPoints - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  }, [data.totalPoints, data.level]);

  return {
    data,
    newBadges,
    allBadges: BADGES,
    recordExerciseCompletion,
    clearNewBadges,
    getLevelProgress,
    pointsForNextLevel: pointsForNextLevel(data.level),
  };
}
