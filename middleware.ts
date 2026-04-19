import { auth } from "@/auth";
import { NextResponse } from "next/server";

/**
 * Protect `/app/*` except auth pages. Uses JWT session (no Prisma in middleware).
 */
export default auth((req) => {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/app/login") || path.startsWith("/app/signup")) {
    return NextResponse.next();
  }

  if (!req.auth) {
    const login = new URL("/app/login", req.nextUrl.origin);
    login.searchParams.set("callbackUrl", `${path}${req.nextUrl.search}`);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/app", "/app/(.*)"],
};
