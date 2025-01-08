import { UI } from "../constants/UIConstants";

export enum BgPresets {
  primary = "primary",
  secondary = "secondary",
  terciary = "terciary",
  main = "main",
  warning = "warning",
  error = "error",
  success = "success",
  info = "info",
  mark = "mark",
}

export const FixedBgPresets = {
  [BgPresets.secondary]: UI.Colors.Black80,
  [BgPresets.main]: UI.Colors.Primary100,
  [BgPresets.error]: UI.Colors.Error100,
  [BgPresets.warning]: UI.Colors.Warning100,
  [BgPresets.success]: UI.Colors.Success100,
  [BgPresets.info]: UI.Colors.Info100,
  [BgPresets.mark]: UI.Colors.Blue100,
} as const;

export const bgPresets = (theme: "light" | "dark") =>
  ({
    ...FixedBgPresets,
    [BgPresets.primary]: UI.ThemeColorType[theme].bg,
    [BgPresets.secondary]: UI.ThemeColorType[theme].bgContent,
    [BgPresets.terciary]: UI.ThemeColorType[theme].bgContentSecondary,
  } as const);
