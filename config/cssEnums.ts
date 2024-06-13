export const FlexEnums = {
  direction: ["row", "row-reverse", "column", "column-reverse"] as const,
  align: ["center", "flex-start", "flex-end", "baseline", "stretch"] as const,
  justify: [
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ] as const,
  wrap: ["nowrap", "wrap", "wrap-reverse"] as const,
};
