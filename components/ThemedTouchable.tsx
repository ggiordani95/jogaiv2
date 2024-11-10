import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { Spacing } from "@/constants/Spacing";
import { Image } from "react-native";

type ThemedViewProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  label: string;
  image?: JSX.Element;
};

export const ThemedTouchable = ({ ...props }: ThemedViewProps) => {
  const bgColor = useThemeColor(
    { light: props.lightColor, dark: props.darkColor },
    "bgContentPrimary"
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          alignItems: "center",
          flexDirection: "row",
          gap: 16,
        },
      ]}
    >
      {props.image && props.image}

      <ThemedText variant="medium" weight="medium" colorVariant="textSecondary">
        {props.label}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    borderRadius: 12,
    marginRight: Spacing.small,
    height: 60,
    marginTop: 10,
  },
};
