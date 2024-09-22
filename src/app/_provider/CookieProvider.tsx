"use client";

import { CookiesProvider as BaseCookieProvider } from "react-cookie";
import type { ReactNode } from "react";

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  return <BaseCookieProvider>{children}</BaseCookieProvider>;
};
