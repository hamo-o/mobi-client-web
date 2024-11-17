import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const tabRecipe = recipe({
  base: {
    width: "100%",

    padding: "1.5rem",

    background: vars.color.gray_06,

    display: "flex",
    justifyContent: "space-between",
    flexShrink: 0,

    cursor: "pointer",
  },
  variants: {
    state: {
      default: {
        color: vars.color.white,
      },
      active: {
        color: vars.color.yellow,
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export type TabVariants = RecipeVariants<typeof tabRecipe>;
