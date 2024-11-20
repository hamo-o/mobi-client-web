"use client";

import { buttonRecipe, ButtonVariants } from "./Button.css";
import { typos } from "@/styles/typos.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    text: string;
  };

export const Button = ({ state, size, text, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${buttonRecipe({ state, size })} ${size === "small" ? typos.label3_bold : typos.label2}`}
      {...rest}
    >
      {text}
    </button>
  );
};
