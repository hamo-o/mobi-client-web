import { container, input, inputBoxRecipe, InputVariants } from "./Input.css";
import { Search } from "@/icons";

export type InputProps = InputVariants & {
  placeholder: string;
};

export const Input = (props: InputProps) => {
  return (
    <div className={container}>
      <div className={inputBoxRecipe({ state: props.state })}>
        <Search />
        <input className={input} placeholder={props.placeholder} />
      </div>
    </div>
  );
};
