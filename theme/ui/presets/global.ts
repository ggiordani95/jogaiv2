import { Spacing } from "../constants/Spacing";

export enum GlobalPresets {
  safeArea = "safeArea",
  safeAreaLeft = "safeAreaLeft",
  partialSafeArea = "partialSafeArea",
}

export const globalPresets = {
  [GlobalPresets.safeArea]: {
    margin: Spacing.lg,
  },
  [GlobalPresets.safeAreaLeft]: {
    marginLeft: Spacing.lg,
  },
  [GlobalPresets.partialSafeArea]: {
    marginTop: Spacing.lg,
    marginLeft: Spacing.lg,
    marginRight: Spacing.lg,
  },
} as const;
