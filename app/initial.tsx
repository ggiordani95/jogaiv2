import { getOnboardingDoneLocalStorage } from "@/stores/local-storage/onboarding";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";

export default function InitialLayout() {
  const segments = useSegments();
  const router = useRouter();

  const isOnboardingDone = async () => {
    const isOnboardingDone = await getOnboardingDoneLocalStorage();
    if (isOnboardingDone) {
      router.push("/(tabs)");
    } else {
      router.push("/onboarding");
    }
  };

  useEffect(() => {
    const inTabsGroup = segments[0] === "(tabs)";

    const backAction = () => {
      if (!inTabsGroup) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    isOnboardingDone();

    return () => backHandler.remove();
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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
