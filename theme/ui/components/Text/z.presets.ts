import { UI } from "../../constants/UIConstants";

export enum TextFontPresetsEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  body = "body",
}

export enum TextFontFamilyPresetsEnum {
  primaryBold = "primaryBold",
  primaryRegular = "primaryRegular",
  secondaryRegular = "secondaryRegular",
  secondaryBold = "secondaryBold",
}

export const TextFontFamilyPresets = {
  [TextFontFamilyPresetsEnum.primaryBold]: {
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [TextFontFamilyPresetsEnum.primaryRegular]: {
    fontFamily: UI.Typography.FontFamily.Primary.Regular,
  },
  [TextFontFamilyPresetsEnum.secondaryRegular]: {
    fontFamily: UI.Typography.FontFamily.Secondary.Regular,
  },
  [TextFontFamilyPresetsEnum.secondaryBold]: {
    fontFamily: UI.Typography.FontFamily.Secondary.Bold,
  },
};

export const TextFontPresets = {
  [TextFontPresetsEnum.h1]: {
    fontSize: UI.Typography.FontSize._5xl,
  },
  [TextFontPresetsEnum.h2]: {
    fontSize: UI.Typography.FontSize._4xl,
  },
  [TextFontPresetsEnum.h3]: {
    fontSize: UI.Typography.FontSize.xxxl,
    color: UI.Colors.White100,
  },
  [TextFontPresetsEnum.h4]: {
    fontSize: UI.Typography.FontSize.xxl,
    color: UI.Colors.White100,
  },
  [TextFontPresetsEnum.h5]: {
    fontSize: UI.Typography.FontSize.xl,
    color: UI.Colors.White100,
  },
  [TextFontPresetsEnum.body]: {
    fontSize: UI.Typography.FontSize.md,
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
  main = "main",
}

const FixedTextColorsPresets = {
  [TextColorPresetsEnum.button]: UI.Colors.Black80,
  [TextColorPresetsEnum.error]: UI.Colors.Error60,
  [TextColorPresetsEnum.warning]: UI.Colors.Warning60,
  [TextColorPresetsEnum.success]: UI.Colors.Success60,
  [TextColorPresetsEnum.info]: UI.Colors.Info60,
  [TextColorPresetsEnum.main]: UI.Colors.Primary100,
} as const;

export const TextColorPresets = (theme: "light" | "dark") =>
  ({
    ...FixedTextColorsPresets,
    [TextColorPresetsEnum.primary]: UI.ThemeColorType[theme].text,
    [TextColorPresetsEnum.secondary]: UI.ThemeColorType[theme].textSecondary,
  } as const);
