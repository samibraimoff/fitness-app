import { Text, View } from "@/components/generic/themed-components";
import { Card } from "@/components/featured/card";
import { StyleSheet } from "react-native";
import { SetItem } from "@/components/featured/logger/set-item";
import { ExerciseSet } from "@/types";
import { Button } from "@/components/featured/button";

export default function WorkoutExerciseItem() {
  const sets: ExerciseSet[] = [
    { id: "1", exerciseId: "e1", reps: 5, weight: 120, oneRM: 120 },
    { id: "2", exerciseId: "e1", reps: 10, weight: 50, oneRM: 120 },
    { id: "3", exerciseId: "e1", reps: 7, weight: 86, oneRM: 120 },
  ];

  return (
    <Card title="Exercise name">
      <View style={styles.header}>
        <Text style={styles.setLabel}>Set</Text>
        <Text style={styles.setInfo}>kg</Text>
        <Text style={styles.setInfo}>Reps</Text>
      </View>
      <View style={{ gap: 5 }}>
        {sets.map((set, index) => (
          <SetItem key={set.id} set={set} index={index} />
        ))}
      </View>
      <Button
        title="+ Add set"
        type="link"
        onPress={() => console.warn("Adding set")}
        style={{ padding: 10, marginTop: 10 }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginVertical: 10,
  },
  setLabel: {
    marginRight: "auto",
    fontWeight: "bold",
  },
  setInfo: {
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
});
