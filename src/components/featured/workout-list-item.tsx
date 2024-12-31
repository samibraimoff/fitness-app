import { Text, View } from "@/components/generic/themed-components";
import { Card } from "@/components/featured/card";
import { StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { WorkoutWithExercises } from "@/types";
import dayjs from "dayjs";
import { calculateDuration } from "@/utils/calculateDuration";
import { getBestSet } from "@/services/set-service";
import { getWorkoutTotalWeight } from "@/services/workout-service";

type WorkoutListItemProps = {
  workout: WorkoutWithExercises;
};

export function WorkoutListItem({ workout }: WorkoutListItemProps) {
  return (
    <Card
      title={dayjs(workout.createdAt).format("HH:mm dddd, D MMM")}
      style={{ gap: 8 }}
      href={`/workout/${workout.id}`}
    >
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>Exercise</Text>
        <Text style={{ fontWeight: "bold" }}>Sets</Text>
      </View>
      {workout.exercises.map((exercise) => {
        const bestSet = getBestSet(exercise.sets);
        return (
          <View key={exercise.id} style={styles.container}>
            <Text style={{ color: "darkgrey" }}>
              {`${exercise.sets.length} x ${exercise.name}`}
            </Text>
            {bestSet && (
              <Text style={{ color: "darkgrey" }}>
                {bestSet.reps}{" "}
                {bestSet.weight ? `x ${bestSet.weight} kg` : "reps"}
              </Text>
            )}
          </View>
        );
      })}

      <View style={styles.footer}>
        <Text>
          <FontAwesome5
            style={styles.footerIcon}
            name={"clock"}
            size={16}
            color="gray"
          />
          {calculateDuration(workout.createdAt, workout.finishedAt)}
        </Text>
        <Text>
          <FontAwesome5
            style={styles.footerIcon}
            name={"weight-hanging"}
            size={16}
            color="gray"
          />
          {getWorkoutTotalWeight(workout)} kg
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "gray",
    marginTop: 20,
    paddingTop: 10,
  },
  footerIcon: {
    marginLeft: 5,
  },
});
