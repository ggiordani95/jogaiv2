import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";

export default function InitialLayout() {
  const segments = useSegments();
  const router = useRouter();
  //   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAuthenticated = true;

  useEffect(() => {
    const inTabsGroup = segments[0] === "(tabs)";
    // const backAction = () => {
    //   if (isAuthenticated && !inTabsGroup) {
    //     return true;
    //   }
    //   return false;
    // };
    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );
    // if (isAuthenticated && !inTabsGroup) {
    //   router.push("/(tabs)");
    // } else if (!isAuthenticated) {
    //   router.push("/onboarding");
    // }

    // return () => backHandler.remove();
  }, [isAuthenticated, segments]);

  useEffect(() => {
    router.replace("/onboarding");
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen
        name="city"
        options={{ headerShown: false, presentation: "modal" }}
      />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)"
        options={{ headerShown: false, presentation: "modal" }}
      /> */}
    </Stack>
  );
}
