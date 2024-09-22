import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  minWidth: "fit-content",
  height: 146,
  padding: "1.75rem 1.5em",

  borderRadius: "1rem",
  background: vars.color.gray_06,

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

export const textContainer = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 4,
});

export const titleContainer = style({
  color: vars.color.gray_01,
});

export const discriptionContainer = style({
  display: "flex",
  gap: 4,

  color: vars.color.gray_03,
});
