"use client";

import { Input, Button } from "..";
import { Logo } from "@/icons";

import { container, form } from "./NavigationTop.css";
import Link from "next/link";

import { useCookies } from "react-cookie";

export type NavigationToptProps = {};

export const NavigationTop = (props: NavigationToptProps) => {
  const [cookies] = useCookies(["access_token"], {
    doNotParse: true,
  });
  const accessToken = cookies["access_token"];

  return (
    <div className={container}>
      <Logo />
      <div className={form}>
        <Input placeholder="검색어를 입력하세요" icon />
        {!accessToken ? (
          <Link href="/login" style={{ width: "fit-content" }}>
            <Button text="로그인" />
          </Link>
        ) : (
          <Link href="/mypage" style={{ width: "fit-content" }}>
            <Button text="마이페이지" />
          </Link>
        )}
      </div>
    </div>
  );
};
