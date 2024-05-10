import { vars } from "@/styles/theme.css";
import {
  container,
  input,
  labelContainer,
  inputBoxRecipe,
  InputVariants,
} from "./Input.css";
import { Search } from "@/icons";

export type InputProps = InputVariants & {
  label?: string;
  placeholder?: string;
  icon: boolean;
};

export const Input = (props: InputProps) => {
  const { label, placeholder, icon } = props;
  return (
    <div className={container}>
      {label && (
        <span className={`${labelContainer} ${vars.fonts.label3}`}>
          {label}
        </span>
      )}
      <div className={inputBoxRecipe({ state: props.state })}>
        {icon && <Search />}
        <input className={input} placeholder={placeholder} />
      </div>
    </div>
  );
};
