import { View } from "@/components/generic/themed-components";
import { Button } from "@/components/featured/button";
import { WorkoutListItem } from "@/components/featured/workouts/workout-list-item";
import { Link } from "expo-router";
import { StyleSheet, FlatList } from "react-native";
import workouts from "@/data/dummy-data";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href={"workout/current"} asChild>
        <Button title={"Resume Workout"} />
      </Link>
      <FlatList
        data={workouts}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <WorkoutListItem workout={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    backgroundColor: "transparent",
  },
});
