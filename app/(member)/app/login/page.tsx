import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { MemberAuthCard } from "@/components/member/member-auth-card";
import { GoogleSignInButton } from "@/components/member/google-sign-in-button";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams?: Promise<{ callbackUrl?: string }>;
};

function safeCallbackUrl(raw: string | undefined): string {
  if (typeof raw !== "string" || !raw.startsWith("/") || raw.startsWith("//")) {
    return "/app";
  }
  return raw;
}

export default async function LoginPage({ searchParams }: PageProps) {
  const session = await auth();
  const sp = (await searchParams) ?? {};
  const callbackUrl = safeCallbackUrl(sp.callbackUrl);

  if (session?.user) {
    redirect(callbackUrl);
  }

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAuthCard
        title="Welcome back"
        subtitle="Sign in to keep your place in Topics, the resource library, and your support tools. We use Google for a simple, secure login—email magic links can be added later."
        footer={
          <p className="text-center text-sm text-muted">
            New here?{" "}
            <Link
              href="/app/signup"
              className="font-medium text-harmony-green-deep underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
          </p>
        }
      >
        <GoogleSignInButton label="Continue with Google" callbackUrl={callbackUrl} />
        <p className="text-center text-xs leading-relaxed text-muted">
          By continuing, you agree to our care being educational—not a substitute
          for urgent or in-person medical advice.
        </p>
      </MemberAuthCard>
    </main>
  );
}
