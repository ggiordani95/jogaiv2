import { ThemedView, ThemedViewProps } from "./ThemedView";
import { StyleSheet } from "react-native";

export type SpacedViewProps = ThemedViewProps;

export const SpacedView = ({ style, ...otherProps }: SpacedViewProps) => {
  return <ThemedView style={[styles.spacing, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  spacing: {
    padding: 12,
  },
});
