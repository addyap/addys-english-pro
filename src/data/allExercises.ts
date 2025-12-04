import { Exercise } from './exercisesData';
import { exercisesData as exercises1to50 } from './exercisesData';
import { exercisesData51to100 } from './exercisesData-part2';
import { exercisesData101to150 } from './exercisesData-part3';

// Merged complete exercises data (1-150)
export const allExercisesData: Exercise[] = [
  ...exercises1to50,
  ...exercisesData51to100,
  ...exercisesData101to150
];

// Complete exercises list for navigation
export const allExercisesList = allExercisesData.map(ex => ({
  id: ex.id,
  title: ex.title
}));
