import { Text, TextInput, View } from "@/components/generic/themed-components";
import { Button } from "@/components/featured/button";
import { ExerciseSet } from "@/types";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

type SetItemProps = {
  index: number;
  set: ExerciseSet;
};

export function SetItem({ index, set }: SetItemProps) {
  const [weight, setWeight] = useState(set.weight?.toString() || "");
  const [reps, setReps] = useState(set.reps?.toString() || "");

  const handleWeightChange = () => {
    console.log("weight changed to", weight);
  };

  const handleRepsChange = () => {
    console.log("reps changed to", reps);
  };

  const renderRightActions = () => (
    <Button
      style={{ width: "auto", padding: 5 }}
      type="link"
      color="crimson"
      title="Delete"
      onPress={() => console.warn("Deleting", set.id)}
    />
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Text style={styles.setNumber}>{index + 1}</Text>
        <TextInput
          style={styles.input}
          placeholder="50"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          onBlur={handleWeightChange}
        />
        <TextInput
          style={styles.input}
          placeholder="8"
          value={reps}
          onChangeText={setReps}
          keyboardType="numeric"
          onBlur={handleRepsChange}
        />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  setNumber: {
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
    padding: 7,
    paddingVertical: 10,
    fontSize: 16,
  },
});
