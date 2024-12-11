import React from "react";
import { Text as RText, TextStyle } from "react-native";
import { Presets, TextPresets } from "./z.presets";

export type UITextProps = {
  preset: keyof typeof TextPresets;
  style?: TextStyle;
  text: string;
};

export const Text = ({ ...props }: UITextProps) => {
  return (
    <RText style={[Presets[props.preset], props.style]}>{props.text}</RText>
  );
};
