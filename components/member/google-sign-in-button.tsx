"use client";

import { signIn } from "next-auth/react";
import { buttonBase, buttonVariantClass } from "@/components/shared/ui/button-classes";

type GoogleSignInButtonProps = {
  label?: string;
  callbackUrl?: string;
};

export function GoogleSignInButton({
  label = "Continue with Google",
  callbackUrl = "/app",
}: GoogleSignInButtonProps) {
  return (
    <button
      type="button"
      className={`${buttonBase} ${buttonVariantClass.primary} w-full`}
      onClick={() => signIn("google", { callbackUrl })}
    >
      {label}
    </button>
  );
}
