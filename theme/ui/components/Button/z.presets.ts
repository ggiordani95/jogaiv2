import { UI } from "../../constants/UIConstants";

export enum ButtonPresetsEnum {
  primary = "primary",
  variant = "variant",
}

export const ButtonPresets = {
  [ButtonPresetsEnum.primary]: {
    fontSize: UI.Typography.FontSize._5xl,
    height: 40,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
  [ButtonPresetsEnum.variant]: {
    fontSize: UI.Typography.FontSize._4xl,
    height: 60,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
} as const;
