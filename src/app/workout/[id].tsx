import { Text, View } from "@/components/generic/themed-components";
import { useLocalSearchParams } from "expo-router";

export default function CurrentDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Current details page: {id}</Text>
    </View>
  );
}
