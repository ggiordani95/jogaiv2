import { UI } from "../../constants/UIConstants";

export enum TextFontPresetsEnum {
  header = "header",
  subheader = "subheader",
  body = "body",
}

export const TextFontPresets = {
  [TextFontPresetsEnum.header]: {
    fontSize: UI.Typography.FontSize._5xl,
    lineHeight: 30,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [TextFontPresetsEnum.subheader]: {
    fontSize: UI.Typography.FontSize._4xl,
    lineHeight: 22,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [TextFontPresetsEnum.body]: {
    fontSize: UI.Typography.FontSize.md,
    lineHeight: 20,
    fontFamily: UI.Typography.FontFamily.Primary.Regular,
    color: UI.Colors.White100,
  },
} as const;

export enum TextColorPresetsEnum {
  primary = "primary",
  secondary = "secondary",
  button = "button",
  warning = "warning",
  error = "error",
  success = "success",
  info = "info",
}

const FixedTextColorsPresets = {
  [TextColorPresetsEnum.button]: UI.Colors.Black80,
  [TextColorPresetsEnum.error]: UI.Colors.Error60,
  [TextColorPresetsEnum.warning]: UI.Colors.Warning60,
  [TextColorPresetsEnum.success]: UI.Colors.Success60,
  [TextColorPresetsEnum.info]: UI.Colors.Info60,
} as const;

export const TextColorPresets = (theme: "light" | "dark") =>
  ({
    ...FixedTextColorsPresets,
    [TextColorPresetsEnum.primary]: UI.ThemeColorType[theme].text,
    [TextColorPresetsEnum.secondary]: UI.ThemeColorType[theme].textSecondary,
  } as const);
