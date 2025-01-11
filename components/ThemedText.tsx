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
  variant?: "small" | "medium" | "regular" | "large" | "title";
  colorVariant?: TColorVariant;
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  italic?: boolean;
}

export const ThemedText: React.FC<TextProps> = ({
  variant = "medium",
  weight = "regular",
  colorVariant = "text",
  italic,
  ml,
  mr,
  mt,
  mb,
  mv,
  mh,
  style,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        {
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          marginVertical: mv,
          marginHorizontal: mh,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
