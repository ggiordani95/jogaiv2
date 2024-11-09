import { Svg } from "react-native-svg";
import React from "react";
import { View } from "react-native";

export type IconProps = {
  style?: object;
  fill?: string;
  focused?: boolean;
};

type TabBarIconProps = {
  path: JSX.Element;
} & IconProps;

export function TabBarIcon({
  style,
  fill = "#000",
  path,
  focused,
}: TabBarIconProps) {
  return (
    <>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        style={[{ marginBottom: -3 }, style]}
      >
        {path}
      </Svg>
      {/* {focused && (
        <View
          style={{
            backgroundColor: fill,
            width: 9,
            height: 9,
            position: "absolute",
            top: -6,
            borderRadius: 6,
          }}
        />
      )} */}
    </>
  );
}
