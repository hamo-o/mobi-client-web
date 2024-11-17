import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "20%",
  minWidth: "fit-content",
  height: "fit-content",

  borderRadius: "1rem",
  overflow: "hidden",

  flexShrink: 0,
});
