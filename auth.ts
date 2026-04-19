import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { prisma } from "@/lib/prisma";

/**
 * Full Auth.js setup — Prisma adapter + DB (Node runtime only for handlers / `auth()` in RSC).
 * Edge middleware uses `auth.config.ts` without Prisma (see `middleware.ts`).
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
});
