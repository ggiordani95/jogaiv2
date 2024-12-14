import { ViewStyle } from "react-native";

/**
 * Spacing Presets
 */

export enum SpacingPresets {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

/**
 * Margin Presets
 */

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

/**
 * Padding Presets
 */

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
