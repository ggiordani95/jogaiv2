import React from "react";
import { Text, TextStyle } from "react-native";
import { Fonts, fontStyles } from "../customs/text/variables.font";

type FontProps = {
  fontWeight: keyof typeof Fonts;
  text: string;
  style?: TextStyle[] | undefined;
  className: string;
};

const Font = ({ fontWeight, style, text, className }: FontProps) => {
  return (
    <Text
      className={className}
      style={[{ fontFamily: fontStyles[fontWeight].fontFamily }, style]}
    >
      {text}
    </Text>
  );
};

export default Font;
