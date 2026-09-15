"use client";

import { useState, useTransition } from "react";
import { submitSupporterInquiry } from "@/app/actions/supporter-inquiry";
import { ButtonLink } from "@/components/ui/button-link";
import { buttonBase, buttonVariantClass } from "@/components/ui/button-classes";
import {
  COLLECTIVE_HREF,
  supporterPage,
} from "@/data/community-collective-content";
import {
  SUPPORTER_INTEREST_OPTIONS,
  normalizeSupporterInterest,
  supporterInquirySchema,
  type SupporterInquiryInput,
} from "@/lib/community-collective/supporter-schema";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";

type InterestId = SupporterInquiryInput["interest"] | "";

const labelClass =
  "mb-2.5 block text-sm font-medium leading-snug text-foreground sm:mb-3";

const optionalClass = "font-normal text-muted";

const inputClass =
  "w-full min-h-[2.875rem] rounded-xl border border-border-soft/70 bg-white px-4 py-3.5 text-base text-foreground shadow-sm transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/55 focus:border-harmony-green/50 focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-harmony-green/18 sm:min-h-0 sm:py-3 sm:text-[0.9375rem]";

const inputErrorClass =
  "border-amber-900/30 bg-amber-950/[0.02] focus:border-amber-900/40 focus:ring-amber-900/12";

const choiceBase =
  "flex min-h-[3rem] cursor-pointer touch-manipulation items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[0.9375rem] font-medium leading-snug text-foreground transition-[border-color,background-color,box-shadow] duration-200 sm:min-h-11 sm:py-3";

const choiceUnselected =
  "border-border-soft/70 bg-white shadow-sm hover:border-border-soft hover:bg-cream-deep/45 active:bg-cream-deep/65";

const choiceSelected =
  "border-harmony-green/40 bg-green-wash/55 shadow-soft ring-1 ring-harmony-green/15";

const cardClass =
  "overflow-hidden rounded-[1.25rem] border border-border-soft/60 bg-surface shadow-[0_1px_2px_rgb(44_52_44_/0.05),0_20px_48px_-18px_rgb(44_52_44_/0.1)]";

const ringOffsetInner =
  "focus-within:ring-offset-2 focus-within:ring-offset-surface";
const ringOffsetFocus =
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

function RequiredMark() {
  return (
    <span className="text-harmony-green-muted" aria-hidden>
      *
    </span>
  );
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      className="mt-2 text-sm leading-snug text-amber-950/85"
      role="alert"
    >
      {message}
    </p>
  );
}

type SupporterInterestFormProps = {
  initialInterest?: string;
  initialExample?: string;
};

export function SupporterInterestForm({
  initialInterest,
}: SupporterInterestFormProps) {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<InterestId>(
    normalizeSupporterInterest(initialInterest) ?? "",
  );
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function clearField(field: string) {
    setFieldErrors((current) => {
      if (!(field in current)) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const parsed = supporterInquirySchema.safeParse({
      name,
      organization,
      email,
      phone,
      interest,
      message,
      updates,
    });

    if (!parsed.success) {
      setFieldErrors(zodFieldErrors(parsed.error));
      return;
    }

    startTransition(async () => {
      const result = await submitSupporterInquiry(parsed.data);
      if (result.status === "success") {
        setSubmitted(true);
        return;
      }
      setFormError(result.message);
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    });
  }

  const err = (field: string) => fieldErrors[field];

  if (submitted) {
    return (
      <article className={cardClass} aria-labelledby="supporter-thanks">
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-green-wash via-harmony-green/25 to-green-wash"
          aria-hidden
        />
        <div className="px-6 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-9">
          <h2
            id="supporter-thanks"
            className="font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-2xl"
          >
            {supporterPage.confirmation.title}
          </h2>
          {supporterPage.confirmation.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-5 text-[0.9375rem] leading-[1.65] text-foreground sm:mt-6 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
          <ButtonLink
            href={COLLECTIVE_HREF}
            className="mt-10 w-full focus-visible:ring-offset-cream sm:mt-12 sm:w-auto"
          >
            {supporterPage.confirmation.ctaLabel}
          </ButtonLink>
        </div>
      </article>
    );
  }

  return (
    <article className={cardClass}>
      <div
        className="h-1 w-full shrink-0 bg-gradient-to-r from-green-wash via-harmony-green/25 to-green-wash"
        aria-hidden
      />
      <div className="border-b border-border-soft/50 px-6 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-9">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
          {supporterPage.form.eyebrow}
        </p>
        <h2 className="mt-2 font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-[1.625rem]">
          {supporterPage.form.title}
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-[1.65] text-muted sm:mt-4 sm:text-[0.9375rem]">
          {supporterPage.form.intro}
        </p>
      </div>

      <div className="px-5 py-7 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:px-8 sm:py-9">
        {formError ? (
          <p
            className="mb-8 rounded-xl border border-amber-900/20 bg-amber-950/[0.04] px-4 py-3.5 text-sm leading-relaxed text-amber-950/90"
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <form className="flex flex-col gap-7 sm:gap-8" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="si-name" className={labelClass}>
              Name <RequiredMark />
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="si-name"
              name="name"
              type="text"
              autoComplete="name"
              autoCapitalize="words"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                clearField("name");
              }}
              className={`${inputClass} ${err("name") ? inputErrorClass : ""}`}
              aria-invalid={!!err("name")}
              aria-describedby={err("name") ? "si-name-err" : undefined}
            />
            <FieldError id="si-name-err" message={err("name")} />
          </div>

          <div>
            <label htmlFor="si-organization" className={labelClass}>
              Organization/business{" "}
              <span className={optionalClass}>(optional)</span>
            </label>
            <input
              id="si-organization"
              name="organization"
              type="text"
              autoComplete="organization"
              value={organization}
              onChange={(event) => {
                setOrganization(event.target.value);
                clearField("organization");
              }}
              className={`${inputClass} ${err("organization") ? inputErrorClass : ""}`}
              aria-invalid={!!err("organization")}
            />
            <FieldError message={err("organization")} />
          </div>

          <div>
            <label htmlFor="si-email" className={labelClass}>
              Email <RequiredMark />
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="si-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearField("email");
              }}
              className={`${inputClass} ${err("email") ? inputErrorClass : ""}`}
              aria-invalid={!!err("email")}
              aria-describedby={err("email") ? "si-email-err" : undefined}
            />
            <FieldError id="si-email-err" message={err("email")} />
          </div>

          <div>
            <label htmlFor="si-phone" className={labelClass}>
              Phone <span className={optionalClass}>(optional)</span>
            </label>
            <input
              id="si-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                clearField("phone");
              }}
              className={`${inputClass} ${err("phone") ? inputErrorClass : ""}`}
              aria-invalid={!!err("phone")}
            />
            <FieldError message={err("phone")} />
          </div>

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={`${labelClass} mb-4`}>
              {supporterPage.form.identityLegend} <RequiredMark />
              <span className="sr-only">(required)</span>
            </legend>
            <div className="flex flex-col gap-2.5">
              {SUPPORTER_INTEREST_OPTIONS.map((option) => (
                <label
                  key={option.id}
                  className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 ${
                    interest === option.id ? choiceSelected : choiceUnselected
                  }`}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={option.id}
                    checked={interest === option.id}
                    onChange={() => {
                      setInterest(option.id);
                      clearField("interest");
                    }}
                    className="size-[1.125rem] shrink-0 border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <FieldError message={err("interest")} />
          </fieldset>

          <div>
            <label htmlFor="si-message" className={labelClass}>
              Message <span className={optionalClass}>(optional)</span>
            </label>
            <textarea
              id="si-message"
              name="message"
              rows={4}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                clearField("message");
              }}
              className={`${inputClass} min-h-[7.5rem] resize-y leading-relaxed ${err("message") ? inputErrorClass : ""}`}
              aria-invalid={!!err("message")}
            />
            <FieldError message={err("message")} />
          </div>

          <div className="rounded-xl border border-border-soft/50 bg-green-wash/20 px-4 py-4 sm:px-5 sm:py-5">
            <label className="flex cursor-pointer gap-3.5 touch-manipulation sm:gap-4">
              <input
                type="checkbox"
                name="updates"
                checked={updates}
                onChange={(event) => setUpdates(event.target.checked)}
                className={`mt-1 size-[1.125rem] shrink-0 rounded border-border-soft text-harmony-green focus:ring-2 focus:ring-harmony-green/25 ${ringOffsetFocus}`}
              />
              <span className="text-sm leading-[1.6] text-foreground">
                I’d like to receive occasional Community Collective updates.
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted">
              {supporterPage.form.privacy}
            </p>
            <button
              type="submit"
              disabled={isPending}
              className={`${buttonBase} ${buttonVariantClass.primary} min-h-[3rem] w-full min-w-0 text-base focus-visible:ring-offset-cream sm:min-h-12 sm:w-auto sm:min-w-[13.5rem] sm:self-start sm:px-8 sm:text-[0.9375rem]`}
            >
              {isPending
                ? "Sending…"
                : supporterPage.form.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
