import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { ButtonPresetsEnum, ButtonPresets } from "./z.presets";

export const Button = ({ ...props }: UIButtonProps) => {
  return (
    <TouchableOpacity style={[ButtonPresets[props.preset], props.style]}>
      {props.text}
    </TouchableOpacity>
  );
};

export type UIButtonProps = {
  preset: keyof typeof ButtonPresetsEnum;
  text: string;
  style?: ViewStyle;
};
