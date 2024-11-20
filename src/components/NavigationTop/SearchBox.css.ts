import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  zIndex: 2,

  border: `1px solid ${vars.color.gray_02}`,
  borderRadius: "0.5rem",
  overflow: "hidden",

  position: "absolute",
  top: "3.5rem",
  left: 0,
});

export const box = style({
  width: "100%",
  padding: "1rem",
  backgroundColor: vars.color.gray_05,
  color: vars.color.gray_01,

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.color.gray_04,
  },
});
