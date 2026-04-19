import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { MemberAuthCard } from "@/components/member/member-auth-card";
import { GoogleSignInButton } from "@/components/member/google-sign-in-button";

export const metadata: Metadata = {
  title: "Create account",
  robots: { index: false, follow: false },
};

export default async function SignupPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/app");
  }

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAuthCard
        title="Create your account"
        subtitle="Your account starts on the free tier so you can explore calmly. Upgrade later if you want the full premium library."
        footer={
          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link
              href="/app/login"
              className="font-medium text-harmony-green-deep underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        }
      >
        <GoogleSignInButton
          label="Sign up with Google"
          callbackUrl="/app"
        />
        <p className="text-center text-xs leading-relaxed text-muted">
          We only use your email to identify your account and personalize your
          experience. No spam, no selling your data.
        </p>
      </MemberAuthCard>
    </main>
  );
}
