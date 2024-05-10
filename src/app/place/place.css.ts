import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  padding: "90px 18rem",

  display: "flex",
  flexDirection: "column",
});

export const imageContainer = style({
  width: "100%",
  height: 400,

  borderRadius: "1rem",

  background: vars.color.gray_05,
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

export const twoColumnContainer = style({
  width: "100%",
  display: "flex",
  gap: 32,
});
