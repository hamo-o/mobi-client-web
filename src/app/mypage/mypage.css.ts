import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  width: "100%",

  padding: "10rem 15%",

  display: "flex",
  gap: "6rem",
});

export const cardContainer = style({
  width: "100%",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  alignItems: "center",
  gap: "1.5rem",

  overflowY: "scroll",
  scrollbarWidth: "none",

  "@media": {
    "screen and (max-width: 1600px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
