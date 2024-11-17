import { typos } from "@/styles/typos.css";
import { TabVariants, tabRecipe } from "./Tab.css";
import { RightArrow } from "@/icons/RightArrow";

export type TabProps = {
  onClick: any;
  selected: boolean;
  text: string;
};

export const Tab = (props: TabProps) => {
  return (
    <div
      className={tabRecipe({ state: props.selected ? "active" : "default" })}
      onClick={props.onClick}
    >
      <span className={typos.label2}>{props.text}</span>
      <RightArrow />
    </div>
  );
};
