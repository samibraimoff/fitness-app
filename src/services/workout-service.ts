import { WorkoutWithExercises } from "@/types";
import { getExerciseTotalWeight } from "@/services/exercise-service";

export const getWorkoutTotalWeight = (workout: WorkoutWithExercises) => {
  return workout.exercises.reduce(
    (total, exercise) => total + getExerciseTotalWeight(exercise),
    0,
  );
};
