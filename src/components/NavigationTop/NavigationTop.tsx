"use server";

import { Button } from "..";
import { Logo } from "@/icons";
import SearchBox from "./SearchBox";

import { container, form } from "./NavigationTop.css";
import Link from "next/link";

import { cookies } from "next/headers";

export type NavigationToptProps = {};

export const NavigationTop = (props: NavigationToptProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");

  return (
    <div className={container}>
      <Logo />
      <div className={form}>
        <SearchBox />
        {accessToken ? (
          <Link href="/mypage" style={{ width: "fit-content" }}>
            <Button text="마이페이지" />
          </Link>
        ) : (
          <Link href="/login" style={{ width: "fit-content" }}>
            <Button text="로그인" />
          </Link>
        )}
      </div>
    </div>
  );
};
