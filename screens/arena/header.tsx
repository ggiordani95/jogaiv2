import { useWindowDimensions, View, Image } from "react-native";
import React from "react";
import { RouterBackAction } from "../../components/RouterBackAction";
import { FavoriteAction } from "@/components/FavoriteAction";

import { LinearGradient } from "expo-linear-gradient";

export const ArenaHeader = ({ ...props }: { count: string }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View className="relative flex flex-row justify-center" style={{ flex: 1 }}>
      <RouterBackAction />
      <FavoriteAction count={props.count} />
      <Dots />
      <LinearGradient
        colors={["#080c14c8", "rgba(0, 0, 0, 0)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          height: height / 2.2,
          width: "100%",
          bottom: height / 24,
          zIndex: -1,
          position: "absolute",
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "#04070d"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.9 }}
        style={{
          height: height / 2.2,
          width: "100%",
          top: height / 24,
          zIndex: -1,
          position: "absolute",
        }}
      />
      <Image
        style={{
          width: "100%",
          height: height / 2.2,
          position: "relative",
          zIndex: -2,
          top: 0,
        }}
        width={width}
        height={height / 2.2}
        source={require("@/assets/images/arena.png")}
      />
    </View>
  );
};

const Dots = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        bottom: -18,
        height: 200,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 24,
          backgroundColor: "#CBCBCB",
        }}
      />
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 24,
          backgroundColor: "#525252",
        }}
      />
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 24,
          backgroundColor: "#525252",
        }}
      />
    </View>
  );
};

const ArenaInfo = ({ ...props }) => {};

const styles = {
  header: {
    height: 200,
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
  image: {
    width: "100%",
    height: 200,
    position: "relative",
    zIndex: -2,
    top: 0,
  },
};
