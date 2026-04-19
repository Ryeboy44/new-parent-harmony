"use client";

import { signOut } from "next-auth/react";
import { buttonBase, buttonVariantClass } from "@/components/shared/ui/button-classes";

export function MemberSignOutButton() {
  return (
    <button
      type="button"
      className={`${buttonBase} ${buttonVariantClass.secondary} !min-h-10 !min-w-0 px-4 py-2 text-sm`}
      onClick={() => signOut({ callbackUrl: "/app/login" })}
    >
      Sign out
    </button>
  );
}
