import WorkoutExerciseItem from "@/components/featured/logger/workout-exercise-item";
import { Text, View } from "@/components/generic/themed-components";
import {
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Fragment } from "react";
import { Stack } from "expo-router";
import { Button } from "@/components/featured/button";
import WorkoutHeader from "@/components/featured/logger/workout-header";

export default function Current() {
  const height = useHeaderHeight();

  return (
    <Fragment>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title="Finish"
              onPress={() => console.log("Finish workout")}
              style={{ width: "auto", padding: 7, paddingHorizontal: 15 }}
            />
          ),
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={height}
      >
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={{ gap: 10, padding: 10 }}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <WorkoutExerciseItem />}
            ListHeaderComponent={<WorkoutHeader />}
          />
        </View>
      </KeyboardAvoidingView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
