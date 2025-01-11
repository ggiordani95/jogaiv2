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

export enum UIGlobalPresets {
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
  [UIGlobalPresets.margin]: {
    ...marginPresets("margin"),
  },
  [UIGlobalPresets.mt]: {
    ...marginPresets("marginTop"),
  },
  [UIGlobalPresets.mb]: {
    ...marginPresets("marginBottom"),
  },
  [UIGlobalPresets.ml]: {
    ...marginPresets("marginLeft"),
  },
  [UIGlobalPresets.mr]: {
    ...marginPresets("marginRight"),
  },
  [UIGlobalPresets.mx]: {
    ...marginPresets("marginHorizontal"),
  },
  [UIGlobalPresets.my]: {
    ...marginPresets("marginVertical"),
  },
  [UIGlobalPresets.padding]: {
    ...paddingPresets("padding"),
  },
  [UIGlobalPresets.pt]: {
    ...paddingPresets("paddingTop"),
  },
  [UIGlobalPresets.pb]: {
    ...paddingPresets("paddingBottom"),
  },
  [UIGlobalPresets.pl]: {
    ...paddingPresets("paddingLeft"),
  },
  [UIGlobalPresets.pr]: {
    ...paddingPresets("paddingRight"),
  },
  [UIGlobalPresets.px]: {
    ...paddingPresets("paddingHorizontal"),
  },
  [UIGlobalPresets.py]: {
    ...paddingPresets("paddingVertical"),
  },
};
