import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { onboardingScreens } from "./onboarding.screens";
import { useCityStore } from "@/stores/zustand/city";
import { useNavigation, useRouter } from "expo-router";
import { Section } from "@/components/Section";

export const OnBoarding = () => {
  const [idx, setIdx] = useState(0);
  const width = useWindowDimensions().width;
  const flatListRef = useRef<FlatList>(null);
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleSkip = () => {
    if (idx === onboardingScreens.length - 1) return router.push("/city");
    if (idx < onboardingScreens.length - 1) {
      const nextIndex = idx + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  const handleBack = () => {
    if (idx > 0) {
      const nextIndex = idx - 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (newIndex !== idx) {
      setIdx(newIndex);
    }
  };

  return (
    <Section>
      <View flex={1} style={styles.container}>
        <View
          mb="xl"
          direction="row"
          justify="center"
          gap="sm"
          flex={0.2}
          pt="xl"
          style={styles.header}
        >
          <View
            direction="row"
            justify="center"
            gap="sm"
            padding={10}
            bg={colorScheme == "dark" ? "primary" : "secondary"}
            br="lg"
          >
            {onboardingScreens.map((_, index) => (
              <View
                key={index}
                bg={idx === index ? "main" : "terciary"}
                style={styles.indicator}
              />
            ))}
          </View>
        </View>
        <View flex={4} style={styles.flatListContainer}>
          <FlatList
            ref={flatListRef}
            data={onboardingScreens}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <React.Fragment>{item.component}</React.Fragment>
            )}
            onMomentumScrollEnd={handleMomentumScrollEnd}
          />
          <View bg={"secondary"} style={{ width: width, height: 1 }}></View>
          <View
            flex={1}
            global={"partialSafeArea"}
            direction="row"
            justify="space-between"
            style={styles.footer}
          >
            <View flex={idx !== onboardingScreens.length - 1 ? 1 : 0}>
              {idx !== 0 && (
                <TouchableOpacity onPress={handleBack}>
                  <Text
                    preset="h5"
                    text="< Voltar"
                    color="secondary"
                    family="primaryRegular"
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity onPress={handleSkip}>
              <Text
                preset="h5"
                text={
                  idx < onboardingScreens.length - 1
                    ? "Pular >"
                    : "Escolher cidade"
                }
                color="main"
                family="primaryRegular"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    maxWidth: "100%",
  },
  header: {
    alignItems: "flex-start",
  },
  indicator: {
    height: 14,
    borderRadius: 12,
    width: 14,
    marginHorizontal: 5,
  },
  flatListContainer: {
    width: "100%",
  },
  footer: {
    height: "100%",
    paddingTop: 14,
  },
});
