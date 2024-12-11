import { UI } from "../../constants/UI";

export enum TextPresets {
  Header = "Header",
  SubHeader = "SubHeader",
  Body = "Body",
}

export const Presets = {
  [TextPresets.Header]: {
    fontSize: UI.Typography.FontSize._5xl,
    lineHeight: 30,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [TextPresets.SubHeader]: {
    fontSize: UI.Typography.FontSize._4xl,
    lineHeight: 22,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [TextPresets.Body]: {
    fontSize: UI.Typography.FontSize.md,
    lineHeight: 20,
    fontFamily: UI.Typography.FontFamily.Primary.Regular,
    color: UI.Colors.White100,
  },
} as const;
