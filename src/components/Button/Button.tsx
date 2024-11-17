import { CSSProperties } from "@vanilla-extract/css";
import { buttonRecipe, ButtonVariants } from "./Button.css";
import { typos } from "@/styles/typos.css";

export type ButtonProps = ButtonVariants & {
  text: string;
  style?: CSSProperties;
};

export const Button = (props: ButtonProps) => {
  const { state, size, text, style } = props;
  return (
    <button
      className={`${buttonRecipe({ state, size })} ${typos.label2} ${style}`}
    >
      {text}
    </button>
  );
};
