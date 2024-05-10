import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  height: 90,

  padding: "0 3.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  background: vars.color.black,

  position: "fixed",
  top: 0,
  left: 0,
});

export const form = style({
  width: "30%",
  display: "flex",
  gap: "1.5rem",
});
