export const Colors = {
  Primary100: "#FFBE55",
  Primary80: "#FFD899",
  Primary60: "#FFE5BB",
  Primary40: "#FFF2DD",
  Black100: "#080808",
  Black80: "#101010",
  Black60: "#323232",
  Black40: "#606060",
  White100: "#FFFFFF",
  White80: "#F1F1F1",
  White60: "#6e6e6e",
  White40: "#727272",
  Success100: "#3F845F",
  Success80: "#6EBF8D",
  Success60: "#8CB59F",
  Error100: "#D0021B",
  Error80: "#E06B7D",
  Error60: "#E8A0A8",
  Warning100: "#FFBE55",
  Warning80: "#E9D17C",
  Warning60: "#EFDD9D",
  Info100: "#2685CA",
  Info80: "#519DD5",
  Info60: "#7DB6DF",
};

const FixedColors = {
  primary: Colors.Primary100,
  primaryLight: Colors.Primary60,
  primaryDark: Colors.Primary40,
  black: Colors.Black100,
  white: Colors.White100,
  success: Colors.Success100,
  successSecondary: Colors.Success60,
  warning: Colors.Warning100,
  warningSecondary: Colors.Warning60,
  info: Colors.Info100,
  infoSecondary: Colors.Info60,
};

export const DarkTheme = {
  ...FixedColors,
  text: Colors.White100,
  textSecondary: Colors.White60,
  bg: Colors.Black100,
  bgContent: Colors.Black80,
  bgContentSecondary: Colors.Black60,
};

export const LightTheme = {
  ...FixedColors,
  text: Colors.Black100,
  textSecondary: Colors.Black40,
  bg: Colors.White100,
  bgContent: Colors.White80,
  bgContentSecondary: Colors.White60,
};

export const ThemeColorType = {
  dark: DarkTheme,
  light: LightTheme,
};

export type ThemeType = typeof DarkTheme | typeof LightTheme;
