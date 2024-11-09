import { Colors } from "@/constants/Colors";
import { useFilterThemeColor } from "@/styles/hooks/useFilterThemeColor";
import { useTextScheme } from "@/styles/hooks/useTextScheme";
import React from "react";

import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";

type TColorVariant =
  | "primary"
  | "text"
  | "textSecondary"
  | "action"
  | "error"
  | "success";

interface TextProps extends RNTextProps {
  variant?: "small" | "medium" | "large" | "title";
  colorVariant?: TColorVariant;
  weight?: "light" | "regular" | "bold";
  italic?: boolean;
}

export const ThemedText: React.FC<TextProps> = ({
  variant = "medium",
  weight = "regular",
  colorVariant = "text",
  italic,
  style,
  children,
  ...props
}) => {
  const fontSizeKey = `fontSize${
    variant.charAt(0).toUpperCase() + variant.slice(1)
  }` as keyof typeof useTextScheme.Typography;
  const fontSize = useTextScheme.Typography[fontSizeKey] as number;

  const fontWeightKey = `fontWeight${
    weight.charAt(0).toUpperCase() + weight.slice(1)
  }` as keyof typeof useTextScheme.Typography;
  const fontWeight = useTextScheme.Typography[
    fontWeightKey
  ] as TextStyle["fontWeight"];

  const fontStyle: TextStyle["fontStyle"] = italic
    ? useTextScheme.Typography.fontStyleItalic
    : "normal";

  const { color } = useFilterThemeColor(
    colorVariant as keyof typeof Colors.light | keyof typeof Colors.dark,
    "text"
  );

  return (
    <RNText
      style={[
        {
          fontSize,
          fontWeight,
          fontStyle,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
