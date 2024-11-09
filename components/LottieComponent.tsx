import React from "react";
import LottieView, { AnimationObject } from "lottie-react-native";
import { View } from "react-native";

interface LottieComponentProps {
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  source: string | AnimationObject | { uri: string };
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  source,
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={source}
        style={{ width, height }}
        loop={loop}
        autoPlay={autoplay}
      />
    </View>
  );
};

export default LottieComponent;
