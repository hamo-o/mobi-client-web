import { buttonRecipe, ButtonVariants } from "./Button.css";
import { typos } from "@/styles/typos.css";

export type ButtonProps = ButtonVariants & {
  text: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${buttonRecipe({
        state: props.state,
        size: props.size,
      })} ${typos.label2}`}
    >
      {props.text}
    </button>
  );
};
