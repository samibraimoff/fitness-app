import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import colors from "@/constants/colors";

DarkTheme.colors.primary = colors.dark.tint;
DefaultTheme.colors.primary = colors.light.tint;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="workout/current" options={{ title: "Workout" }} />
        <Stack.Screen name="workout/[id]" options={{ title: "Workout" }} />
      </Stack>
    </ThemeProvider>
  );
}
