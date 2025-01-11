import { ViewStyle } from "react-native";

export enum SpacingPresets {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export const marginPresets = (
  type: Extract<keyof ViewStyle, `margin${string}`>
) => ({
  [SpacingPresets.xs]: {
    [type]: 4,
  },
  [SpacingPresets.sm]: {
    [type]: 8,
  },
  [SpacingPresets.md]: {
    [type]: 12,
  },
  [SpacingPresets.lg]: {
    [type]: 16,
  },
  [SpacingPresets.xl]: {
    [type]: 32,
  },
});

export const paddingPresets = (
  type: Extract<keyof ViewStyle, `padding${string}`>
) => ({
  [SpacingPresets.xs]: {
    [type]: 4,
  },
  [SpacingPresets.sm]: {
    [type]: 8,
  },
  [SpacingPresets.md]: {
    [type]: 12,
  },
  [SpacingPresets.lg]: {
    [type]: 16,
  },
  [SpacingPresets.xl]: {
    [type]: 32,
  },
});
