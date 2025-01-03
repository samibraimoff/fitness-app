import { Text, View } from "@/components/generic/themed-components";
import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import workouts from "@/data/dummy-data";
import { WorkoutExerciseItem } from "@/components/featured/workouts/workout-exercise-item";
import dayjs from "dayjs";

export default function CurrentDetails() {
  const { id } = useLocalSearchParams();

  const workout = workouts.find((workout) => workout.id === id);
  if (!workout) {
    return <Text>Workout not found.</Text>;
  }

  return (
    <FlatList
      data={workout.exercises}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <WorkoutExerciseItem exercise={item} />}
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>Workout Details</Text>
          <Text style={styles.date}>
            {dayjs(workout.createdAt).format("HH:mm dddd, D MMM")}
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
  },
});
