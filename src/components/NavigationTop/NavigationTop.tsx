"use client";

import { Input, Button } from "..";
import { Logo } from "@/icons";

import { container, form } from "./NavigationTop.css";
import { useRouter } from "next/navigation";

export type NavigationToptProps = {};

export const NavigationTop = (props: NavigationToptProps) => {
  const router = useRouter();

  return (
    <div className={container}>
      <Logo />
      <div className={form}>
        <Input placeholder="검색어를 입력하세요" icon />
        <Button text="로그인" onClick={() => router.push("/login")} />
      </div>
    </div>
  );
};
