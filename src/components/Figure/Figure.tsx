import { figureRecipe, FigureVariants } from "./Figure.css";
import { typos } from "@/styles/typos.css";
import type { Degree } from "@/types/entity";

export type FigureProps = FigureVariants & {
  text: Degree;
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
