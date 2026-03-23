"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { submitDiscoveryCall } from "@/app/actions/discovery-call";
import { buttonBase, buttonVariantClass } from "@/components/ui/button-classes";
import {
  SERVICE_OPTIONS,
  discoveryCallSchema,
} from "@/lib/discovery-call/schema";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";

type ServiceId = (typeof SERVICE_OPTIONS)[number]["id"];

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

const chipBase =
  "min-h-[3.25rem] w-full rounded-xl border px-4 py-3.5 text-left text-[0.9375rem] font-medium leading-snug transition-[border-color,background-color,box-shadow] duration-200 touch-manipulation sm:min-h-[3rem] sm:py-3.5";

const chipUnselected =
  "border-border-soft/70 bg-white shadow-sm hover:border-harmony-green/20 hover:bg-cream-deep/40 active:bg-cream-deep/55";

const chipSelected =
  "border-harmony-green/45 bg-green-wash/60 text-foreground shadow-soft ring-1 ring-harmony-green/18";

const cardClass =
  "overflow-hidden rounded-[1.25rem] border border-border-soft/60 bg-surface shadow-[0_1px_2px_rgb(44_52_44_/0.05),0_20px_48px_-18px_rgb(44_52_44_/0.1)]";

const ringOffsetInner = "focus-within:ring-offset-2 focus-within:ring-offset-surface";
const ringOffsetFocus = "focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function DiscoveryCallForm() {
  const [isPending, startTransition] = useTransition();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone" | "either">(
    "either",
  );
  const [services, setServices] = useState<ServiceId[]>([]);
  const [newsletter, setNewsletter] = useState(false);
  const [details, setDetails] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function toggleService(id: ServiceId) {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
    setFieldErrors((e) => {
      const next = { ...e };
      delete next.services;
      return next;
    });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const raw = {
      fullName,
      email,
      phone,
      contactMethod,
      services,
      newsletter,
      details,
    };

    const parsed = discoveryCallSchema.safeParse(raw);
    if (!parsed.success) {
      setFieldErrors(zodFieldErrors(parsed.error));
      return;
    }

    startTransition(async () => {
      const result = await submitDiscoveryCall(parsed.data);
      if (result.status === "success") {
        setSubmitted(true);
        return;
      }
      setFormError(result.message);
      if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
      }
    });
  }

  const err = (name: string) => fieldErrors[name];

  if (submitted) {
    return (
      <article className={cardClass}>
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-green-wash via-harmony-green/25 to-green-wash"
          aria-hidden
        />
        <div className="px-6 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-9">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
            Sent
          </p>
          <h1
            id="discovery-call-title"
            className="mt-2 font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-2xl"
          >
            Thank you
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-[1.65] text-foreground sm:mt-6 sm:text-base">
            Your message is on its way. I&apos;ll be in touch soon—usually
            within one business day.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:mt-6">
            If you don&apos;t see a reply, please check spam or reach out
            directly at{" "}
            <a
              href="mailto:hello@newparentharmony.com"
              className="font-medium text-harmony-green-deep underline decoration-harmony-green/30 underline-offset-[0.2em] transition-colors hover:decoration-harmony-green-deep"
            >
              hello@newparentharmony.com
            </a>
            .
          </p>
          <Link
            href="/"
            className={`${buttonBase} ${buttonVariantClass.primary} mt-10 inline-flex min-w-0 focus-visible:ring-offset-cream sm:mt-12`}
          >
            Back to home
          </Link>
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
          Discovery call
        </p>
        <h1
          id="discovery-call-title"
          className="mt-2 font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-[1.625rem]"
        >
          Book a discovery call
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-[1.65] text-muted sm:mt-4 sm:text-[0.9375rem]">
          I&apos;d love to learn more about how I can support your family.
          Take your time—share what feels right below.
        </p>
      </div>

      <div className="px-6 py-7 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:px-8 sm:py-9">
        {formError ? (
          <p
            className="mb-8 rounded-xl border border-amber-900/20 bg-amber-950/[0.04] px-4 py-3.5 text-sm leading-relaxed text-amber-950/90"
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <form className="flex flex-col gap-8 sm:gap-9" onSubmit={onSubmit} noValidate>
          <div className="space-y-8 sm:space-y-9">
            <div>
              <label htmlFor="dc-fullName" className={labelClass}>
                Full name{" "}
                <span className="text-harmony-green-muted" aria-hidden>
                  *
                </span>
              </label>
              <input
                id="dc-fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`${inputClass} ${err("fullName") ? inputErrorClass : ""}`}
                aria-invalid={!!err("fullName")}
                aria-describedby={
                  err("fullName") ? "dc-fullName-err" : undefined
                }
              />
              {err("fullName") ? (
                <p
                  id="dc-fullName-err"
                  className="mt-2 text-sm leading-snug text-amber-950/85"
                >
                  {err("fullName")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="dc-email" className={labelClass}>
                Email{" "}
                <span className="text-harmony-green-muted" aria-hidden>
                  *
                </span>
              </label>
              <input
                id="dc-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${inputClass} ${err("email") ? inputErrorClass : ""}`}
                aria-invalid={!!err("email")}
                aria-describedby={err("email") ? "dc-email-err" : undefined}
              />
              {err("email") ? (
                <p
                  id="dc-email-err"
                  className="mt-2 text-sm leading-snug text-amber-950/85"
                >
                  {err("email")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="dc-phone" className={labelClass}>
                Phone <span className={optionalClass}>(optional)</span>
              </label>
              <input
                id="dc-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${inputClass} ${err("phone") ? inputErrorClass : ""}`}
                aria-invalid={!!err("phone")}
                aria-describedby="dc-phone-hint dc-phone-err"
              />
              <p
                id="dc-phone-hint"
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                Only if you&apos;d like a call-back—no pressure.
              </p>
              {err("phone") ? (
                <p
                  id="dc-phone-err"
                  className="mt-2 text-sm leading-snug text-amber-950/85"
                >
                  {err("phone")}
                </p>
              ) : null}
            </div>
          </div>

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={`${labelClass} mb-1`}>
              Preferred contact method{" "}
              <span className="text-harmony-green-muted" aria-hidden>
                *
              </span>
            </legend>
            <p className="mb-4 text-sm leading-relaxed text-muted sm:mb-5">
              How would you like me to reach you first?
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              {(
                [
                  { value: "email" as const, label: "Email" },
                  { value: "phone" as const, label: "Phone" },
                  { value: "either" as const, label: "Either" },
                ] as const
              ).map((opt) => (
                <label
                  key={opt.value}
                  className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 sm:flex-1 sm:justify-center ${
                    contactMethod === opt.value
                      ? choiceSelected
                      : choiceUnselected
                  }`}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={opt.value}
                    checked={contactMethod === opt.value}
                    onChange={() => setContactMethod(opt.value)}
                    className="size-[1.125rem] shrink-0 border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {err("contactMethod") ? (
              <p className="mt-3 text-sm leading-snug text-amber-950/85">
                {err("contactMethod")}
              </p>
            ) : null}
          </fieldset>

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={`${labelClass} mb-1`}>
              Services you&apos;re interested in{" "}
              <span className="text-harmony-green-muted" aria-hidden>
                *
              </span>
            </legend>
            <p className="mb-4 text-sm leading-relaxed text-muted sm:mb-5">
              Tap any that apply—you can choose several.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
              {SERVICE_OPTIONS.map((opt) => {
                const selected = services.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleService(opt.id)}
                    aria-pressed={selected}
                    className={`${chipBase} ${ringOffsetFocus} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green/30 ${
                      selected ? chipSelected : chipUnselected
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {err("services") ? (
              <p className="mt-3 text-sm leading-snug text-amber-950/85">
                {err("services")}
              </p>
            ) : null}
          </fieldset>

          <div className="rounded-xl border border-border-soft/50 bg-green-wash/20 px-4 py-4 sm:px-5 sm:py-5">
            <label className="flex cursor-pointer gap-3.5 touch-manipulation sm:gap-4">
              <input
                type="checkbox"
                name="newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className={`mt-1 size-[1.125rem] shrink-0 rounded border-border-soft text-harmony-green focus:ring-2 focus:ring-harmony-green/25 ${ringOffsetFocus}`}
              />
              <span className="text-sm leading-[1.6] text-foreground">
                Yes, I&apos;d like to receive occasional updates and gentle
                support from New Parent Harmony.
              </span>
            </label>
          </div>

          <div>
            <label htmlFor="dc-details" className={labelClass}>
              Anything else you&apos;d like me to know?{" "}
              <span className={optionalClass}>(optional)</span>
            </label>
            <textarea
              id="dc-details"
              name="details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Due date or baby’s age, what feels hardest lately, or what you’re hoping for—whatever helps."
              className={`${inputClass} min-h-[7.5rem] resize-y leading-relaxed ${err("details") ? inputErrorClass : ""}`}
              aria-invalid={!!err("details")}
              aria-describedby={err("details") ? "dc-details-err" : undefined}
            />
            {err("details") ? (
              <p
                id="dc-details-err"
                className="mt-2 text-sm leading-snug text-amber-950/85"
              >
                {err("details")}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 border-t border-border-soft/40 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-9">
            <p className="order-2 text-center text-xs leading-relaxed text-muted sm:order-1 sm:max-w-[12rem] sm:text-left">
              <span className="text-harmony-green-muted" aria-hidden>
                *
              </span>{" "}
              Required fields. Your details are only used to reply to this
              request.
            </p>
            <button
              type="submit"
              disabled={isPending}
              className={`${buttonBase} ${buttonVariantClass.primary} order-1 min-h-[3rem] w-full min-w-0 text-base focus-visible:ring-offset-cream sm:order-2 sm:min-h-12 sm:w-auto sm:min-w-[13.5rem] sm:px-8 sm:text-[0.9375rem]`}
            >
              {isPending ? "Sending…" : "Send request"}
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
