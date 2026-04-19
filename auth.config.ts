import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

/**
 * Edge-safe Auth.js config — no Prisma, no Node-only APIs.
 * Used by middleware. Keep callbacks free of database access.
 */
function planFromUser(user: unknown): "free" | "premium" {
  if (
    user &&
    typeof user === "object" &&
    "plan" in user &&
    typeof (user as { plan: unknown }).plan === "string"
  ) {
    return (user as { plan: string }).plan === "premium" ? "premium" : "free";
  }
  return "free";
}

export const authConfig = {
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/app/login",
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id;
        token.plan = planFromUser(user);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.plan = token.plan === "premium" ? "premium" : "free";
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
