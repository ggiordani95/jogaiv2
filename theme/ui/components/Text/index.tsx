import React from "react";
import { Text as RText, TextStyle, useColorScheme } from "react-native";
import {
  TextColorPresets,
  TextColorPresetsEnum,
  TextFontPresets,
  TextFontPresetsEnum,
  TextFontFamilyPresetsEnum,
  TextFontFamilyPresets,
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
        TextFontFamilyPresets[props.family],
        props.style,
        {
          color: textColor,
          textAlign: props.align,
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
  family: keyof typeof TextFontFamilyPresetsEnum;
  align?: TextStyle["textAlign"];
  style?: TextStyle;
  text: string;
};
