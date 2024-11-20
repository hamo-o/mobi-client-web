import { tagRecipe, TagVariants } from "./Tag.css";
import { typos } from "@/styles/typos.css";

export type TagProps = TagVariants & {
  text: string;
};

export const Tag = (props: TagProps) => {
  return (
    <div
      className={`${tagRecipe({
        state: props.state,
        size: props.size,
      })} ${typos.label3}`}
    >
      {props.text}
    </div>
  );
};
