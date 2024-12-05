import React from "react";
import { Text, TextStyle } from "react-native";
import { Fonts, fontVariantStyles } from "./variables.font";
import { TextColors, textColorStyles } from "./variables.color";
import { TextSizes, textSizeStyles } from "./variables.size";

type TCustomText = {
  fontWeight: keyof typeof Fonts;
  style?: TextStyle;
  isVariant?: boolean;
  text: string;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  className?: string;
  size: keyof typeof TextSizes;
  color: keyof typeof TextColors;
  underline?: boolean;
};

const CustomText = ({ ...props }: TCustomText) => {
  return (
    <Text
      className={`${textColorStyles[props.color].color} + ${
        textSizeStyles[props.size].size
      } ${props.className}`}
      style={[
        {
          fontFamily: props.isVariant
            ? fontVariantStyles[props.fontWeight].fontFamily
            : fontVariantStyles[props.fontWeight].fontFamily,
          textDecorationLine: props.underline ? "underline" : "none",
        },
        props.style,
      ]}
    >
      {props.text}
    </Text>
  );
};

export default CustomText;
