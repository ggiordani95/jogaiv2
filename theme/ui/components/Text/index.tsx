import React from "react";
import { Text as RText, TextStyle, useColorScheme } from "react-native";
import {
  TextColorPresets,
  TextColorPresetsEnum,
  TextFontPresets,
  TextFontPresetsEnum,
} from "./z.presets";

export const Text = ({ ...props }: UITextProps) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme
    ? TextColorPresets(colorScheme)[props.color]
    : TextColorPresets("light")[props.color];
  return (
    <RText
      style={[
        TextFontPresets[props.preset],
        props.style,
        {
          color: textColor,
        },
      ]}
    >
      {props.text}
    </RText>
  );
};

export type UITextProps = {
  preset: keyof typeof TextFontPresetsEnum;
  color: keyof typeof TextColorPresetsEnum;
  style?: TextStyle;
  text: string;
};
