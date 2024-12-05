import React from "react";
import { Text, TextStyle } from "react-native";
import {
  Fonts,
  fontStyles,
  fontVariantStyles,
} from "../customs/text/variables.font";

const FontVariant = ({
  fontWeight,
  style,
  text,
}: {
  fontWeight: keyof typeof Fonts;
  style?: TextStyle;
  text: string;
}) => {
  return (
    <Text
      style={[
        { fontFamily: fontVariantStyles[fontWeight as Fonts].fontFamily },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default FontVariant;
