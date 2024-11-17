import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const figureRecipe = recipe({
  base: {
    padding: "0.9rem 1.25rem",
    borderRadius: "0.75rem",

    flexShrink: 0,
  },
  variants: {
    state: {
      first: {
        background: vars.color.green_20,
        color: vars.color.green,
      },
      second: {
        background: vars.color.yellow_20,
        color: vars.color.yellow,
      },
      third: {
        background: vars.color.orange_20,
        color: vars.color.orange,
      },
      forth: {
        background: vars.color.red_20,
        color: vars.color.red,
      },
    },
  },
  defaultVariants: {
    state: "first",
  },
});

export type FigureVariants = RecipeVariants<typeof figureRecipe>;
