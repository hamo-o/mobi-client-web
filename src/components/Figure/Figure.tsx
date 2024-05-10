import { figureRecipe, FigureVariants } from "./Figure.css";
import { typos } from "@/styles/typos.css";

type degree = "여유" | "보통" | "약간 붐빔" | "붐빔";

export type FigureProps = FigureVariants & {
  text: degree;
};

export const Figure = (props: FigureProps) => {
  return (
    <div
      className={`${figureRecipe({
        state: props.state,
      })} ${typos.label2}`}
    >
      {props.text}
    </div>
  );
};
