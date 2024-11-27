import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  console.log(accessToken);

  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|login|auth|img|_next/static|_next/image|favicon.ico).*)"],
};
