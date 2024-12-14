import { UI } from "../../constants/UIConstants";

export enum TextInputPresetsEnum {
  default = "default",
  variant = "variant",
  search = "search",
}

const fixedTextInputStyle = {
  borderRadius: 12,
  paddingLeft: 14,
};

export const TextInputPresets = (theme: "light" | "dark") =>
  ({
    [TextInputPresetsEnum.default]: {
      color: UI.ThemeColorType[theme].text,
      height: 40,
      width: "100%",
      backgroundColor: UI.ThemeColorType[theme].bgContent,
      ...fixedTextInputStyle,
    },
    [TextInputPresetsEnum.variant]: {
      color: UI.ThemeColorType[theme].text,
      height: 40,
      backgroundColor: UI.ThemeColorType[theme].bgContent,
      border: 1,
      borderColor: UI.ThemeColorType[theme].bgContentSecondary,
      borderWidth: 1,
      ...fixedTextInputStyle,
    },
    [TextInputPresetsEnum.search]: {
      color: UI.ThemeColorType[theme].text,
      backgroundColor: UI.ThemeColorType[theme].bgContent,
      ...fixedTextInputStyle,
    },
  } as const);
