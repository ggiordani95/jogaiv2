export enum BoxPresets {
  row = "row",
  rowCentered = "rowCentered",
  rowStart = "rowStart",
  columnCentered = "columnCentered",
  columnEndCentered = "columnEndCentered",
  rowSpaceBetween = "rowSpaceBetween",
  rowEnd = "rowEnd",
  rowStartSpaceBetween = "rowStartSpaceBetween",
  columnSpaceBetween = "columnSpaceBetween",
}

export const boxPresets = {
  [BoxPresets.row]: {
    flexDirection: "row",
  },
  [BoxPresets.rowStart]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  [BoxPresets.rowCentered]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  [BoxPresets.rowEnd]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  [BoxPresets.columnCentered]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [BoxPresets.columnEndCentered]: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  [BoxPresets.rowStartSpaceBetween]: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
  },
  [BoxPresets.rowSpaceBetween]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [BoxPresets.columnSpaceBetween]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
} as const;
