import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const tagRecipe = recipe({
  base: {
    height: "2rem",
    borderRadius: "0.25rem",

    background: vars.color.gray_05,
    color: vars.color.gray_03,

    flexShrink: 0,
  },
  variants: {
    size: {
      small: { padding: "0.5rem 0.75rem" },
      medium: { padding: "1rem 1.75rem" },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export type TagVariants = RecipeVariants<typeof tagRecipe>;
