import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  minWidth: 597,
  padding: "2rem",

  borderRadius: "1rem",
  background: vars.color.gray_06,

  display: "flex",
  flexDirection: "column",
  gap: 32,
});

export const topContainer = style({
  width: "100%",
  display: "flex",

  alignItems: "center",
  gap: 20,
});

export const imageContainer = style({
  width: 90,
  height: 90,

  borderRadius: "0.5rem",
  background: vars.color.gray_05,

  flexShrink: 0,
});

export const titleContainer = style({
  color: vars.color.gray_01,
});

export const textContainer = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 4,
  color: vars.color.gray_02,
});
