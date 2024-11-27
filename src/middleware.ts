import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (request.nextUrl.pathname === "/auth" && accessToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (request.nextUrl.pathname !== "/auth" && !accessToken) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|login|img|_next/static|_next/image|favicon.ico).*)"],
};
