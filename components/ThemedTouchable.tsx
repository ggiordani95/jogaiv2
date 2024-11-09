import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { Spacing } from "@/constants/Spacing";

type ThemedViewProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  label: string;
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
        },
      ]}
    >
      <ThemedText
        variant="medium"
        weight="regular"
        colorVariant="textSecondary"
      >
        {props.label}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    borderRadius: 10,
    padding: Spacing.xsmall,
    marginRight: 6,
  },
};
