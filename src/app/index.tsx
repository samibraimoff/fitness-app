import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/workout/current"}>Link</Link>
    </View>
  );
}
