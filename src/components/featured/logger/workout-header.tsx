import { Text, View } from "@/components/generic/themed-components";
import { calculateDurationInMinutes } from "@/utils/time";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import workouts from "@/data/dummy-data";

export default function WorkoutHeader() {
  const [timer, setTimer] = useState("0:00");
  const workout = workouts[3];

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = calculateDurationInMinutes(
        new Date(workout.createdAt),
        new Date(),
      );
      setTimer(duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [workout]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Tracker</Text>
      <Text style={styles.paragraph}>
        <AntDesign name="clockcircleo" size={18} color="gray" /> {timer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 18,
  },
});
