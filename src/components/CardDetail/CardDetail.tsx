import { ReactNode, ReactElement } from "react";
import {
  container,
  topContainer,
  textContainer,
  titleContainer,
} from "./CardDetail.css";
import { typos } from "@/styles/typos.css";
import { FigureProps } from "../Figure";

export type CardDetailProps = {
  title: string;
  text?: string;
  rightChild?: ReactElement<FigureProps>;
  content?: ReactNode;
};

export const CardDetail = (props: CardDetailProps) => {
  const { title, text, rightChild, content } = props;
  return (
    <div className={container}>
      <div className={topContainer}>
        <div className={textContainer}>
          <span className={`${typos.subtitle} ${titleContainer}`}>{title}</span>
          {text && <span className={typos.detail}>{text}</span>}
        </div>
        {rightChild}
      </div>
      {content}
    </div>
  );
};
