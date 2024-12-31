import { View, Text } from "@/components/generic/themed-components";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
      <Link href={"/workout/123"}>Workout details</Link>
      <Link href={"workout/current"}>Workout</Link>
    </View>
  );
}
