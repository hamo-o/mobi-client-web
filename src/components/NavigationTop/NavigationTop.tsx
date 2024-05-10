import { Input, Button } from "..";
import { Logo } from "@/icons";

import { container, form } from "./NavigationTop.css";

export type NavigationToptProps = {};

export const NavigationTop = (props: NavigationToptProps) => {
  return (
    <div className={container}>
      <Logo />
      <div className={form}>
        <Input placeholder="검색어를 입력하세요" icon />
        <Button text="로그인" />
      </div>
    </div>
  );
};
