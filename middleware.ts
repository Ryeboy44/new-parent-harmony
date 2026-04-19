import { authConfig } from "@/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

/**
 * Edge-safe auth wrapper — no Prisma / PrismaAdapter (see `auth.config.ts`).
 * Route protection for `/app/*` only; public marketing routes are not matched.
 */
const { auth: edgeAuth } = NextAuth(authConfig);

export default edgeAuth((req) => {
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
