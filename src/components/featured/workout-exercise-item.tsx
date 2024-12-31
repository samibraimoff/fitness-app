import { ExerciseWithSets, WorkoutWithExercises } from "@/types";
import { View, Text } from "@/components/generic/themed-components";
import { Card } from "@/components/featured/card";
import { StyleSheet } from "react-native";
import { getBestSet } from "@/services/set-service";
import Colors from "@/constants/colors";

type WorkoutWithExerciseProps = {
  exercise: ExerciseWithSets;
};

export function WorkoutExerciseItem({ exercise }: WorkoutWithExerciseProps) {
  const bestSet = getBestSet(exercise.sets);

  return (
    <View>
      <Card title={exercise.name}>
        {exercise.sets.map((exercise, index) => (
          <View
            key={exercise.id}
            style={[
              styles.setRow,
              {
                backgroundColor:
                  exercise?.id === bestSet?.id
                    ? Colors.dark.tint + "50"
                    : "transparent",
              },
            ]}
          >
            <Text style={styles.setIndex}>{index + 1}</Text>
            <Text style={styles.setInfo}>
              {exercise.reps}
              {exercise.weight ? `x ${exercise.weight} kg` : "reps"}
            </Text>
            {exercise.oneRM && (
              <Text style={styles.setRm}>{Math.floor(exercise.oneRM)} kg</Text>
            )}
          </View>
        ))}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  setRow: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  setIndex: {
    fontSize: 16,
    color: "gray",
  },
  setInfo: {
    fontSize: 16,
  },
  setRm: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "bold",
  },
});
