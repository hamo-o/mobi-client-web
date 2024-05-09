import { vars } from "@/styles/theme.css";
import {
  container,
  input,
  label,
  inputBoxRecipe,
  InputVariants,
} from "./Input.css";
import { Search } from "@/icons";

export type InputProps = InputVariants & {
  label?: string;
  placeholder: string;
};

export const Input = (props: InputProps) => {
  return (
    <div className={container}>
      {props.label && (
        <span className={`${label} ${vars.fonts.label3}`}>{props.label}</span>
      )}
      <div className={inputBoxRecipe({ state: props.state })}>
        <Search />
        <input className={input} placeholder={props.placeholder} />
      </div>
    </div>
  );
};
