import { ReactNode, ReactElement, PropsWithChildren } from "react";
import {
  container,
  topContainer,
  titleContainer,
  inputContainer,
  contentContainer,
} from "./Modal.css";
import { typos } from "@/styles/typos.css";
import { Button, Input } from "..";

export type ModalProps = {
  title: ReactNode;
  text?: string;
  content?: ReactNode;
} & PropsWithChildren;

export const Modal = (props: ModalProps) => {
  const { title, text, content, children } = props;
  return (
    <div className={container}>
      <div className={topContainer}>
        <span className={`${titleContainer} ${typos.title}`}>{title}</span>
        <div className={contentContainer}>
          {children}
          {/* <Input label="방문 장소*" icon={false} />
          <div className={inputContainer}>
            <Input label="방문 날짜*" icon={false} />
            <Input label="방문 시간*" icon={false} />
          </div>
          <Input label="방문 목적" icon={false} /> */}
        </div>
      </div>
      {/* <Button state="active" text="완료" /> */}
    </div>
  );
};
