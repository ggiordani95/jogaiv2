import React, { useRef, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { onboardingScreens } from "./onboarding.screens";

export const OnBoarding = () => {
  const [idx, setIdx] = useState(0);
  const width = useWindowDimensions().width;
  const flatListRef = useRef<FlatList>(null);
  const colorScheme = useColorScheme();

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setIdx(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const handleSkip = () => {
    if (idx < onboardingScreens.length - 1) {
      const nextIndex = idx + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIdx(nextIndex);
    }
  };
  const handleBack = () => {
    if (idx > 0) {
      const nextIndex = idx - 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIdx(nextIndex);
    }
  };

  return (
    <View flex={1} style={{ minHeight: "100%", maxWidth: "100%" }}>
      <View
        mb="xl"
        direction="row"
        justify="center"
        gap="sm"
        flex={0.2}
        pt="xl"
        style={{ alignItems: "flex-start" }}
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
              style={{
                height: 14,
                borderRadius: 12,
                width: 14,
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>
      </View>
      <View flex={4} style={{ width: "100%" }}>
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
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <View bg={"secondary"} style={{ width: width, height: 1 }}></View>
        <View
          flex={1}
          globalPresets={"partialSafeArea"}
          direction="row"
          justify="space-between"
          style={{ height: "100%", paddingTop: 14 }}
        >
          <View flex={idx !== onboardingScreens.length - 1 ? 1 : 0}>
            {idx !== 0 && (
              <TouchableOpacity onPress={handleBack}>
                <Text
                  preset="h5"
                  text="< Voltar"
                  color="secondary"
                  weight="primaryRegular"
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() =>
              idx < onboardingScreens.length - 1 ? handleSkip() : null
            }
          >
            <Text
              preset="h5"
              text={
                idx < onboardingScreens.length - 1
                  ? "Pular >"
                  : "Escolher cidade"
              }
              color="main"
              weight="primaryRegular"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
