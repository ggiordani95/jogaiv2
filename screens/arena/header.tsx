import React from "react";
import { View, Image, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RouterBackAction } from "../../components/RouterBackAction";
import { FavoriteAction } from "@/components/FavoriteAction";
import { ArenaType } from "./arena.store";

const ArenaHeader = ({ store }: { store: ArenaType }) => {
  return <></>;
};

ArenaHeader.Image = ({ source }: { source: string }) => {
  const { height, width } = useWindowDimensions();
  return (
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
      source={{ uri: source }}
    />
  );
};

ArenaHeader.GradientOverlay = ({
  position,
}: {
  position: "top" | "bottom";
}) => {
  const { height } = useWindowDimensions();
  return (
    <>
      {position === "top" ? (
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "#04070d"]}
          start={{ x: 1, y: 0.4 }}
          end={{ x: 1, y: 0.8 }}
          style={{
            height: height / 2.2,
            width: "100%",
            [position]: height / 24,
            zIndex: -1,
            position: "absolute",
          }}
        />
      ) : (
        <LinearGradient
          colors={["#08101ec6", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0.3 }}
          style={{
            height: height / 2.2,
            width: "100%",
            [position]: 0,
            zIndex: -1,
            position: "absolute",
          }}
        />
      )}
    </>
  );
};

ArenaHeader.BackAction = RouterBackAction;

ArenaHeader.FavoriteAction = ({ count }: { count: number }) => (
  <FavoriteAction count={count} />
);

ArenaHeader.Dots = () => {
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
      {[...Array(3)].map((_, index) => (
        <View
          key={index}
          style={{
            width: 12,
            height: 12,
            borderRadius: 24,
            backgroundColor: index === 0 ? "#CBCBCB" : "#525252",
          }}
        />
      ))}
    </View>
  );
};

export default ArenaHeader;
