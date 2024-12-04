import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import InitialLayout from "./initial";
import "@/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/DMSans.ttf"),
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
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  );
}
