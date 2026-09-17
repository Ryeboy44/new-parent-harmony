import type { ReactNode } from "react";

/** Applies the Collective warm-clay surface tokens without changing brand buttons. */
export function CollectiveScope({ children }: { children: ReactNode }) {
  return <div className="collective-scope">{children}</div>;
}
