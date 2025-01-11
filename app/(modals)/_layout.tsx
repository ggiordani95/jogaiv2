import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="login"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
