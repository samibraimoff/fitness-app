import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function WorkoutDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Workout details screen - {id}</Text>
    </View>
  );
}
