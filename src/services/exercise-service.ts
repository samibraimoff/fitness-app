import { ExerciseWithSets } from "@/types";
import { getSetTotalWeight } from "@/services/set-service";

export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
  return exercise.sets.reduce(
    (totalSetWeight, set) => totalSetWeight + getSetTotalWeight(set),
    0,
  );
};
