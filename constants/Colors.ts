import { Palette } from "./Pallete";

export const MainTheme: TMainTheme = {
  primary: Palette.yellow600,
  tabIconSelected: Palette.yellow500,
  tint: Palette.yellow200,
  icon: Palette.gray200,
};

export const Colors: TColors = {
  light: {
    ...MainTheme,
    text: Palette.black,
    textSecondary: Palette.gray600,
    action: Palette.blue500,
    background: Palette.gray100,
    tabBarBackground: Palette.white,
    tabIconDefault: Palette.zinc300,
    // Background colors
    bgContentPrimary: Palette.neutral200,
    bgContentSecondary: Palette.neutral400,
  },
  dark: {
    ...MainTheme,
    text: Palette.gray100,
    textSecondary: Palette.gray400,
    tabIconDefault: Palette.zinc700,
    action: Palette.blue500,
    background: Palette.black,
    tabBarBackground: Palette.black,

    // Background colors
    bgContentPrimary: Palette.neutral800,
    bgContentSecondary: Palette.neutral700,
  },
};

type TMainTheme = {
  primary: string;
  tabIconSelected: string;
  tint: string;
  icon: string;
};

type TColors = { light: TColorScheme; dark: TColorScheme };

type TColorScheme = {
  text: string;
  textSecondary: string;
  primary: string;
  action: string;
  background: string;
  tabBarBackground: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  bgContentPrimary: string;
  bgContentSecondary: string;
} & TMainTheme;
