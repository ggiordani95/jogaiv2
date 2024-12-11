import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./ThemedText";

type ThemedViewProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  label: string;
  image?: JSX.Element;
};

export const ThemedTouchable = ({ ...props }: ThemedViewProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: "red",
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
    marginRight: 14,
    height: 60,
    marginTop: 10,
  },
};
