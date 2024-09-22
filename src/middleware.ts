import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "./app/actions";

export async function middleware(request: NextRequest) {
  const token = getCookie("access_token");
  const url = request.nextUrl.clone();
  url.pathname = "/login";

  if (!token) NextResponse.redirect(url);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Authorization", `Bearer ${token}`);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|login|img|_next/static|_next/image|favicon.ico).*)"],
};
