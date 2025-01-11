import React from "react";
import {
  TouchableOpacity,
  ViewStyle,
  Text,
  ActivityIndicator,
} from "react-native";
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
      {props.isLoading ? (
        <ActivityIndicator size="small" color="#c16f2b" />
      ) : (
        <Text style={[ButtonTextPresets[props.preset]]}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export type UIButtonProps = {
  preset: keyof typeof ButtonPresetsEnum;
  onPress: () => void;
  text: string;
  isLoading: boolean;
  style?: ViewStyle;
};
