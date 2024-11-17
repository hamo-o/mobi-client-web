import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeClass } from "@/styles/theme.css";
import { NavigationTop } from "@/components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "MOBI",
  description: "국내 핫플레이스 알아보기",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${themeClass} ${pretendard}`}>
        <NavigationTop />
        {children}
        {modal}
      </body>
    </html>
  );
}
