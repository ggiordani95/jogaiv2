export enum TextSizes {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  XLarge = "XLarge",
  Subtitle = "Subtitle",
  Title = "Title",
  HeaderTitle = "HeaderTitle",
}

export const textSizeStyles = {
  [TextSizes.Small]: {
    size: "text-xl",
  },
  [TextSizes.Medium]: {
    size: "text-2xl",
  },
  [TextSizes.Large]: {
    size: "text-3xl",
  },
  [TextSizes.XLarge]: {
    size: "text-4xl",
  },
  [TextSizes.Subtitle]: {
    size: "text-5xl",
  },
  [TextSizes.Title]: {
    size: "text-6xl",
  },
  [TextSizes.HeaderTitle]: {
    size: "text-4xl",
  },
};
