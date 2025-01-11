import { CityItem } from "@/components/CityItem";
import { useCityStore } from "@/stores/zustand/city";
import { Button } from "@/theme/ui/components/Button";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { setCityLocalStorage } from "@/stores/local-storage/city";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import {
  getOnboardingDoneLocalStorage,
  setOnboardingDoneLocalStorage,
} from "@/stores/local-storage/onboarding";

const HEIGHT = 200;

export const Footer = () => {
  const city = useCityStore((state) => state.city);
  const router = useRouter();

  const translateY = useSharedValue(HEIGHT);

  const handleConfirmCity = async () => {
    if (!city) return;
    try {
      await setCityLocalStorage({ city });
      await setOnboardingDoneLocalStorage({ onboarding_done: true });
      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (city) {
      translateY.value = withSpring(0, {
        damping: 12,
        stiffness: 50,
      });
    } else {
      translateY.value = withTiming(HEIGHT, { duration: 100 });
    }
  }, [city]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!city) return null;

  return (
    <Animated.View style={[styles.animatedView, animatedStyle]}>
      <View style={styles.recommendedView}>
        <Text
          preset={"body"}
          color={"primary"}
          family={"primaryRegular"}
          text={"Recomendado"}
        />
      </View>
      <CityItem city={city} />
      <View global={"partialSafeArea"}>
        <Button
          onPress={() => handleConfirmCity()}
          preset={"primary"}
          text={"Confirmar cidade"}
          isLoading={false}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    width: "100%",
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    gap: 24,
    height: HEIGHT,
    backgroundColor: "#131313",
  },
  recommendedView: {
    backgroundColor: "secondary",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4b4b4b",
    borderRadius: 8,
    maxWidth: 160,
    position: "absolute",
    right: 0,
    top: -38,
  },
});
