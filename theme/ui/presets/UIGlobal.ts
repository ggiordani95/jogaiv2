import { ViewStyle } from "react-native";
import { marginPresets, paddingPresets, SpacingPresets } from "./spacing";

type UIGlobalType = {
  margin: Record<SpacingPresets, ViewStyle>;
  mt: Record<SpacingPresets, ViewStyle>;
  mb: Record<SpacingPresets, ViewStyle>;
  ml: Record<SpacingPresets, ViewStyle>;
  mr: Record<SpacingPresets, ViewStyle>;
  mx: Record<SpacingPresets, ViewStyle>;
  my: Record<SpacingPresets, ViewStyle>;
  padding: Record<SpacingPresets, ViewStyle>;
  pt: Record<SpacingPresets, ViewStyle>;
  pb: Record<SpacingPresets, ViewStyle>;
  pl: Record<SpacingPresets, ViewStyle>;
  pr: Record<SpacingPresets, ViewStyle>;
  px: Record<SpacingPresets, ViewStyle>;
  py: Record<SpacingPresets, ViewStyle>;
};

export enum UIglobal {
  margin = "margin",
  mt = "mt",
  mb = "mb",
  ml = "ml",
  mr = "mr",
  mx = "mx",
  my = "my",
  padding = "padding",
  pt = "pt",
  pb = "pb",
  pl = "pl",
  pr = "pr",
  px = "px",
  py = "py",
}

export const UIGlobal: UIGlobalType = {
  [UIglobal.margin]: {
    ...marginPresets("margin"),
  },
  [UIglobal.mt]: {
    ...marginPresets("marginTop"),
  },
  [UIglobal.mb]: {
    ...marginPresets("marginBottom"),
  },
  [UIglobal.ml]: {
    ...marginPresets("marginLeft"),
  },
  [UIglobal.mr]: {
    ...marginPresets("marginRight"),
  },
  [UIglobal.mx]: {
    ...marginPresets("marginHorizontal"),
  },
  [UIglobal.my]: {
    ...marginPresets("marginVertical"),
  },
  [UIglobal.padding]: {
    ...paddingPresets("padding"),
  },
  [UIglobal.pt]: {
    ...paddingPresets("paddingTop"),
  },
  [UIglobal.pb]: {
    ...paddingPresets("paddingBottom"),
  },
  [UIglobal.pl]: {
    ...paddingPresets("paddingLeft"),
  },
  [UIglobal.pr]: {
    ...paddingPresets("paddingRight"),
  },
  [UIglobal.px]: {
    ...paddingPresets("paddingHorizontal"),
  },
  [UIglobal.py]: {
    ...paddingPresets("paddingVertical"),
  },
};
