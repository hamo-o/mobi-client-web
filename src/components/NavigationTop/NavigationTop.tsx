import { Input, Button } from "..";
import { Logo } from "@/icons";

import { container, form } from "./NavigationTop.css";
import Link from "next/link";

export type NavigationToptProps = {};

export const NavigationTop = (props: NavigationToptProps) => {
  return (
    <div className={container}>
      <Logo />
      <div className={form}>
        <Input placeholder="검색어를 입력하세요" icon />
        <Link href={"/login"}>
          <Button text="로그인" />
        </Link>
      </div>
    </div>
  );
};
