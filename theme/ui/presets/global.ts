import { Spacing } from "../constants/Spacing";

export enum globalEnum {
  safeArea = "safeArea",
  safeAreaLeft = "safeAreaLeft",
  partialSafeArea = "partialSafeArea",
}

export const global = {
  [globalEnum.safeArea]: {
    margin: Spacing.lg,
  },
  [globalEnum.safeAreaLeft]: {
    marginLeft: Spacing.lg,
  },
  [globalEnum.partialSafeArea]: {
    marginTop: Spacing.lg,
    marginLeft: Spacing.lg,
    marginRight: Spacing.lg,
  },
} as const;
