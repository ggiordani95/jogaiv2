export enum TextColors {
  Primary = "Primary",
  Secondary = "Secondary",
  Theme = "Theme",
  Reverse = "Reverse",
  Alert = "Alert",
  Success = "Success",
}

export const textColorStyles = {
  [TextColors.Primary]: {
    color: "text-white",
  },
  [TextColors.Secondary]: {
    color: "text-zinc-700",
  },
  [TextColors.Theme]: {
    color: "text-yellow-300",
  },
  [TextColors.Reverse]: {
    color: "text-black",
  },
  [TextColors.Alert]: {
    color: "text-red-500",
  },
  [TextColors.Success]: {
    color: "text-green-500",
  },
};
