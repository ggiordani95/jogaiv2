import { UI } from "../../constants/UIConstants";

export enum ButtonPresetsEnum {
  primary = "primary",
  variant = "variant",
}

export const ButtonPresets = {
  [ButtonPresetsEnum.primary]: {
    height: 51,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: UI.Colors.Primary100,
  },
  [ButtonPresetsEnum.variant]: {
    fontSize: UI.Typography.FontSize._4xl,
    height: 51,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
} as const;

export const ButtonTextPresets = {
  [ButtonPresetsEnum.primary]: {
    fontSize: UI.Typography.FontSize.xl,
    fontFamily: UI.Typography.FontFamily.Primary.Regular,
  },
  [ButtonPresetsEnum.variant]: {
    fontSize: UI.Typography.FontSize._4xl,
    height: 60,
    fontFamily: UI.Typography.FontFamily.Primary.Bold,
  },
};
