// Styles
const row = { flexDirection: "row" };
const column = { flexDirection: "column" };
const alignItemsCenter = { alignItems: "center" };
const justifyContentCenter = { justifyContent: "center" };
const justifySpaceBetween = { justifyContent: "space-between" };

export enum BoxPresets {
  row = "row",
  rowCentered = "rowCentered",
  columnCentered = "columnCentered",
  rowSpaceBetween = "rowSpaceBetween",
  columnSpaceBetween = "columnSpaceBetween",
}

export const boxPresets = {
  [BoxPresets.row]: {
    row,
  },
  [BoxPresets.rowCentered]: {
    row,
    alignItemsCenter,
    justifyContentCenter,
  },
  [BoxPresets.columnCentered]: {
    column,
    alignItemsCenter,
    justifyContentCenter,
  },
  [BoxPresets.rowSpaceBetween]: {
    row,
    alignItemsCenter,
    justifySpaceBetween,
  },
  [BoxPresets.columnSpaceBetween]: {
    column,
    alignItemsCenter,
    justifySpaceBetween,
  },
} as const;
