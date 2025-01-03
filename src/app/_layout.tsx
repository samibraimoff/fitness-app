import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/colors";

DarkTheme.colors.primary = Colors.dark.tint;
DefaultTheme.colors.primary = Colors.light.tint;

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name={"index"} options={{ title: "Home" }} />
          <Stack.Screen
            name={"workout/current"}
            options={{ title: "Workout Logger" }}
          />
          <Stack.Screen
            name={"workout/[id]"}
            options={{ title: "Workout Details" }}
          />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
