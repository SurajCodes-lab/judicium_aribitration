import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.judiciumarbitration.com";

export function middleware(request: NextRequest) {
  const { pathname, search, host } = request.nextUrl;

  // Redirect non-www to www
  if (host === "judiciumarbitration.com") {
    return NextResponse.redirect(
      new URL(`https://${CANONICAL_HOST}${pathname}${search}`),
      301
    );
  }

  // Remove trailing slashes (except root /)
  if (pathname !== "/" && pathname.endsWith("/")) {
    return NextResponse.redirect(
      new URL(`https://${CANONICAL_HOST}${pathname.slice(0, -1)}${search}`),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)",
  ],
};
