import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",
  padding: "10rem 18rem",

  display: "flex",
  gap: "8rem",
});

export const cardContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: 20,
});
