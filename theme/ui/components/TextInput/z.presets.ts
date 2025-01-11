import { UI } from "../../constants/UIConstants";

export enum TextInputPresetsEnum {
  default = "default",
  variant = "variant",
  search = "search",
}

const fixedTextInputStyle = {
  borderRadius: 6,
  paddingLeft: 14,
};

export const TextInputPresets = (theme: "light" | "dark") =>
  ({
    [TextInputPresetsEnum.default]: {
      color: UI.ThemeColorType[theme].text,
      height: 46,
      width: "100%",
      fontSize: 18,
      backgroundColor: UI.ThemeColorType[theme].bgContentSecondary,
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
      backgroundColor: UI.ThemeColorType[theme].bgContentSecondary,
      height: 50,
      ...fixedTextInputStyle,
    },
  } as const);
