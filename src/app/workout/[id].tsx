import { Text, View } from "@/components/generic/themed-components";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function CurrentDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Current details page: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
