import { View, Text, useWindowDimensions } from "react-native";
import React, { lazy, useCallback, useEffect } from "react";
import { useArenaStore } from "./arena.store";
import SuspenseComponent from "@/components/SuspenseComponent";
import ArenaHeader from "./header";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useScrollViewOffset,
} from "react-native-reanimated";
import ArenaFooter from "./footer";

const Header = lazy(async () => {
  return import("./header");
});

const Select = lazy(async () => {
  return import("./select");
});

const Info = lazy(async () => {
  return import("./info");
});

const Footer = lazy(async () => {
  return import("./footer");
});

export const ArenaScreen = () => {
  const { arena } = useArenaStore();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const [isToHide, setIsToHide] = React.useState(false);

  const { height } = useWindowDimensions();
  const HEADER_HEIGHT = height / 2.2;

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: isToHide
            ? interpolate(
                scrollOffset.value,
                [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
              )
            : 0,
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View className="flex flex-col">
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        className={"min-h-full"}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          if (offsetY < -24) {
            setIsToHide(true);
          } else {
            setIsToHide(false);
          }
        }}
      >
        {/* Header */}
        <Animated.View className="relative flex flex-row justify-center">
          <Animated.View
            style={[headerAnimatedStyle]}
            className="flex flex-row justify-center"
          >
            <ArenaHeader.Image source={arena.image_url} />
            <ArenaHeader.GradientOverlay position="bottom" />
            <ArenaHeader.GradientOverlay position="top" />
            {!isToHide && (
              <>
                <ArenaHeader.BackAction />
                <ArenaHeader.FavoriteAction count={arena.favorite_count} />
                <ArenaHeader.Dots />
              </>
            )}
          </Animated.View>
        </Animated.View>
        {/* Info */}
        <SuspenseComponent
          fallback={<Text className="text-4xl text-white">Carregando</Text>}
          component={<Info store={arena} />}
        />
        {/* Selects */}
        <SuspenseComponent
          fallback={<Text className="text-4xl text-white">Carregando</Text>}
          component={<Select store={arena} />}
        />
        {/* Footer */}
        <SuspenseComponent
          fallback={<Text className="text-4xl text-white">Carregando</Text>}
          component={<Footer store={arena} />}
        />
      </Animated.ScrollView>
    </View>
  );
};
