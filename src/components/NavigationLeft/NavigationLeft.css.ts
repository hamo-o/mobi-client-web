import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: 314,
  height: 264,
  borderRadius: "1rem",

  overflow: "hidden",

  flexShrink: 0,
});
