import React, { useEffect } from "react";
import LottieView, { AnimationObject } from "lottie-react-native";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface LottieComponentProps {
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  source: string | AnimationObject | { uri: string };
  source2: string | AnimationObject | { uri: string };
  delay?: number;
}

const SliderLottieComponent: React.FC<LottieComponentProps> = ({
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  source,
  source2,
  delay = 2000,
}) => {
  const { width: ScreenWidth } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const translateX2 = useSharedValue(ScreenWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      translateX2.value = ScreenWidth;
      translateX.value = withTiming(-ScreenWidth, { duration: delay });
      translateX2.value = withTiming(0, { duration: delay });

      setTimeout(() => {
        translateX.value = ScreenWidth;
        translateX.value = withTiming(0, { duration: delay });
        translateX2.value = withTiming(-ScreenWidth, { duration: delay });
      }, 2000);
    }, delay * 2);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX2.value }],
  }));

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        top: "50%",
      }}
    >
      <Animated.View
        style={[animatedStyle, { position: "absolute", zIndex: 9 }]}
      >
        <LottieView
          source={source}
          style={{ width, height }}
          loop={loop}
          autoPlay={autoplay}
        />
      </Animated.View>
      <Animated.View
        style={[animatedStyle2, { position: "absolute", zIndex: 9 }]}
      >
        <LottieView
          source={source2}
          style={{ width, height }}
          loop={loop}
          autoPlay={autoplay}
        />
      </Animated.View>
    </View>
  );
};

export default SliderLottieComponent;
