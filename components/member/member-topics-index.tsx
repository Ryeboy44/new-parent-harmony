import Link from "next/link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { MEMBER_TOPICS } from "@/lib/content/member-topics";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const card =
  "rounded-2xl border border-border-soft/50 bg-surface p-5 shadow-soft transition-[box-shadow,transform,border-color] hover:border-harmony-green/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:p-6";

export function MemberTopicsIndex() {
  return (
    <>
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-3xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>Topics</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            Find help by what you need—not by what week it is
          </h1>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            Each topic below is built from the same language and priorities as Gemma&apos;s
            &quot;Preparing for Baby&quot; guide—just reorganized so you can scan fast, tap what
            matters, and stop when you feel steadier.
          </p>
        </div>
      </SectionShell>

      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Choose a topic</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          If you are not sure where to start, try{" "}
          <Link className="font-medium text-harmony-green-deep underline-offset-4 hover:underline" href="/app/topics/feeding">
            Feeding
          </Link>
          ,{" "}
          <Link className="font-medium text-harmony-green-deep underline-offset-4 hover:underline" href="/app/topics/sleep">
            Sleep
          </Link>
          , or{" "}
          <Link className="font-medium text-harmony-green-deep underline-offset-4 hover:underline" href="/app/topics/recovery">
            Recovery
          </Link>
          .
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {MEMBER_TOPICS.map((topic) => (
            <li key={topic.id}>
              <Link href={`/app/topics/${topic.id}`} className={`${card} flex h-full flex-col`}>
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-lg font-normal text-foreground sm:text-xl">
                    {topic.label}
                  </p>
                  <span className="shrink-0 rounded-full border border-harmony-green/20 bg-green-wash/35 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
                    Open
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {topic.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>
    </>
  );
}
