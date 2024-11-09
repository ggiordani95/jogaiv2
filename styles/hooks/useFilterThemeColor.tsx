import { Colors } from "@/constants/Colors";
import { useThemeColor } from "./useThemeColor";

export const useFilterThemeColor = (
  colorVariant: keyof typeof Colors.dark | keyof typeof Colors.light,
  defaultColor: keyof typeof Colors.light | keyof typeof Colors.dark
) => {
  const color = useThemeColor(
    {
      light:
        Colors.light[
          (colorVariant as keyof typeof Colors.light) ?? defaultColor
        ],
      dark: Colors.dark[
        (colorVariant as keyof typeof Colors.dark) ?? defaultColor
      ],
    },
    colorVariant ?? defaultColor
  );
  return { color };
};
