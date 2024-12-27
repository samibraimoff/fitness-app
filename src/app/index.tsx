import { View, Text } from "@/components/generic/themed";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/workout/current"}>Current workout</Link>
      <Link href={"/workout/123"}>Workout details</Link>
    </View>
  );
}
