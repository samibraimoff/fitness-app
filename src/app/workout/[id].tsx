import { View, Text } from "@/components/generic/themed";
import { useLocalSearchParams } from "expo-router";

export default function WorkoutDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Workout details screen - {id}</Text>
    </View>
  );
}
