import React from "react";
import { TouchableOpacity, ViewStyle, Text } from "react-native";
import {
  ButtonPresetsEnum,
  ButtonPresets,
  ButtonTextPresets,
} from "./z.presets";

export const Button = ({ ...props }: UIButtonProps) => {
  return (
    <TouchableOpacity
      style={[ButtonPresets[props.preset], props.style]}
      onPress={props.onPress}
    >
      <Text style={[ButtonTextPresets[props.preset]]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export type UIButtonProps = {
  preset: keyof typeof ButtonPresetsEnum;
  onPress: () => void;
  text: string;
  style?: ViewStyle;
};
