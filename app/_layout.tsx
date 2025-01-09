import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import InitialLayout from "./initial";
import "@/global.css";
import CustomSplashScreen from "./splashscreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSans: require("../assets/fonts/DMSans.ttf"),
    NetflixSans: require("../assets/fonts/NetflixSans-Regular.otf"),
    NetflixSansBold: require("../assets/fonts/NetflixSans-Bold.otf"),
    NetflixSansMedium: require("../assets/fonts/NetflixSans-Medium.otf"),
    NetflixSansLight: require("../assets/fonts/NetflixSans-Light.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <CustomSplashScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <InitialLayout />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
