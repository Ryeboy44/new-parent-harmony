"use client";

import { useState, useTransition } from "react";
import { submitRequestSupport } from "@/app/actions/request-support";
import { ButtonLink } from "@/components/ui/button-link";
import { buttonBase, buttonVariantClass } from "@/components/ui/button-classes";
import {
  COLLECTIVE_HREF,
  requestSupportPage,
} from "@/data/community-collective-content";
import {
  ASSISTANCE_OPTIONS,
  BABY_STATUS_OPTIONS,
  FORMAT_OPTIONS,
  SUPPORT_NEED_OPTIONS,
  TIMING_OPTIONS,
  isLikelyMontgomeryCountyZip,
  requestSupportSchema,
  type RequestSupportInput,
} from "@/lib/community-collective/schema";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";

type SupportNeedId = (typeof SUPPORT_NEED_OPTIONS)[number]["id"];
type AssistanceId = (typeof ASSISTANCE_OPTIONS)[number]["id"];
type BabyStatus = RequestSupportInput["babyStatus"] | "";
type Timing = RequestSupportInput["timing"] | "";
type SupportFormat = RequestSupportInput["supportFormat"] | "";

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

const ringOffsetInner =
  "focus-within:ring-offset-2 focus-within:ring-offset-surface";
const ringOffsetFocus =
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const FIELD_FOCUS_ORDER = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "zipCode",
  "babyStatus",
  "babyDate",
  "supportNeeds",
  "assistanceTypes",
  "barrier",
  "financialContext",
  "biggestDifference",
  "timing",
  "scheduleNotes",
  "supportFormat",
  "attestation",
  "acknowledgement",
] as const;

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

function FormSection({
  heading,
  description,
  children,
}: {
  heading: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border-soft/40 pt-6 first:border-t-0 first:pt-0 sm:pt-7">
      <h2 className="font-display text-[1.25rem] font-normal leading-snug tracking-[-0.02em] text-foreground sm:text-[1.375rem]">
        {heading}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
      <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">{children}</div>
    </section>
  );
}

export function RequestSupportForm() {
  const [isPending, startTransition] = useTransition();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [babyStatus, setBabyStatus] = useState<BabyStatus>("");
  const [babyDate, setBabyDate] = useState("");
  const [supportNeeds, setSupportNeeds] = useState<SupportNeedId[]>([]);
  const [assistanceTypes, setAssistanceTypes] = useState<AssistanceId[]>([]);
  const [barrier, setBarrier] = useState("");
  const [financialContext, setFinancialContext] = useState("");
  const [biggestDifference, setBiggestDifference] = useState("");
  const [timing, setTiming] = useState<Timing>("");
  const [scheduleNotes, setScheduleNotes] = useState("");
  const [supportFormat, setSupportFormat] = useState<SupportFormat>("");
  const [attestation, setAttestation] = useState(false);
  const [acknowledgement, setAcknowledgement] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function clearField(name: string) {
    setFieldErrors((current) => {
      if (!(name in current)) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function focusFirstError(errors: Record<string, string>) {
    const first = FIELD_FOCUS_ORDER.find((name) => errors[name]);
    if (!first) return;
    const node = document.getElementById(`rs-${first}`);
    node?.focus();
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function toggleNeed(id: SupportNeedId) {
    setSupportNeeds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
    clearField("supportNeeds");
  }

  function toggleAssistance(id: AssistanceId) {
    setAssistanceTypes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
    clearField("assistanceTypes");
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const raw = {
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      babyStatus,
      babyDate,
      supportNeeds,
      assistanceTypes,
      barrier,
      financialContext,
      biggestDifference,
      timing,
      scheduleNotes,
      supportFormat,
      attestation,
      acknowledgement,
    };

    const parsed = requestSupportSchema.safeParse(raw);
    if (!parsed.success) {
      const errors = zodFieldErrors(parsed.error);
      setFieldErrors(errors);
      queueMicrotask(() => focusFirstError(errors));
      return;
    }

    startTransition(async () => {
      const result = await submitRequestSupport(parsed.data);
      if (result.status === "success") {
        setSubmitted(true);
        return;
      }
      setFormError(result.message);
      if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
        queueMicrotask(() => focusFirstError(result.fieldErrors ?? {}));
      }
    });
  }

  const err = (name: string) => fieldErrors[name];
  const babyDateLabel =
    babyStatus === "arrived"
      ? "Baby’s date of birth"
      : babyStatus === "expected"
        ? "Baby’s due date"
        : "Baby’s due date OR baby’s date of birth";

  const showInPersonNote =
    supportFormat === "in_person" &&
    zipCode.replace(/\D/g, "").length >= 5 &&
    !isLikelyMontgomeryCountyZip(zipCode);

  if (submitted) {
    return (
      <article className={cardClass} aria-labelledby="request-support-thanks">
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-green-wash via-harmony-green/25 to-green-wash"
          aria-hidden
        />
        <div className="px-6 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-9">
          <h2
            id="request-support-thanks"
            className="font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-2xl"
            tabIndex={-1}
          >
            {requestSupportPage.confirmation.title}
          </h2>
          {requestSupportPage.confirmation.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={`text-[0.9375rem] leading-[1.65] text-foreground sm:text-base ${
                index === 0 ? "mt-5 sm:mt-6" : "mt-4"
              }`}
            >
              {paragraph}
            </p>
          ))}
          <ButtonLink
            href={COLLECTIVE_HREF}
            className="mt-10 w-full focus-visible:ring-offset-cream sm:mt-12 sm:w-auto"
          >
            {requestSupportPage.confirmation.ctaLabel}
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
      <div className="px-5 py-6 pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] sm:px-8 sm:py-8">
        {formError ? (
          <p
            className="mb-8 rounded-xl border border-amber-900/20 bg-amber-950/[0.04] px-4 py-3.5 text-sm leading-relaxed text-amber-950/90"
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <form className="flex flex-col gap-0" onSubmit={onSubmit} noValidate>
          <FormSection heading="Tell Us About Your Family">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
              <div>
                <label htmlFor="rs-firstName" className={labelClass}>
                  First name <RequiredMark />
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="rs-firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  autoCapitalize="words"
                  required
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    clearField("firstName");
                  }}
                  className={`${inputClass} ${err("firstName") ? inputErrorClass : ""}`}
                  aria-invalid={!!err("firstName")}
                  aria-describedby={
                    err("firstName") ? "rs-firstName-err" : undefined
                  }
                />
                <FieldError id="rs-firstName-err" message={err("firstName")} />
              </div>
              <div>
                <label htmlFor="rs-lastName" className={labelClass}>
                  Last name <RequiredMark />
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="rs-lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  autoCapitalize="words"
                  required
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    clearField("lastName");
                  }}
                  className={`${inputClass} ${err("lastName") ? inputErrorClass : ""}`}
                  aria-invalid={!!err("lastName")}
                  aria-describedby={
                    err("lastName") ? "rs-lastName-err" : undefined
                  }
                />
                <FieldError id="rs-lastName-err" message={err("lastName")} />
              </div>
            </div>

            <div>
              <label htmlFor="rs-email" className={labelClass}>
                Email address <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="rs-email"
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
                aria-describedby={err("email") ? "rs-email-err" : undefined}
              />
              <FieldError id="rs-email-err" message={err("email")} />
            </div>

            <div>
              <label htmlFor="rs-phone" className={labelClass}>
                Phone number <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="rs-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  clearField("phone");
                }}
                className={`${inputClass} ${err("phone") ? inputErrorClass : ""}`}
                aria-invalid={!!err("phone")}
                aria-describedby={err("phone") ? "rs-phone-err" : undefined}
              />
              <FieldError id="rs-phone-err" message={err("phone")} />
            </div>

            <div>
              <label htmlFor="rs-zipCode" className={labelClass}>
                ZIP code <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="rs-zipCode"
                name="zipCode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={10}
                required
                value={zipCode}
                onChange={(event) => {
                  setZipCode(event.target.value);
                  clearField("zipCode");
                }}
                className={`${inputClass} ${err("zipCode") ? inputErrorClass : ""}`}
                aria-invalid={!!err("zipCode")}
                aria-describedby={err("zipCode") ? "rs-zipCode-err" : undefined}
              />
              <FieldError id="rs-zipCode-err" message={err("zipCode")} />
            </div>

            <fieldset className="min-w-0 border-0 p-0">
              <legend className={`${labelClass} mb-3`}>
                About your baby <RequiredMark />
                <span className="sr-only">(required)</span>
              </legend>
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {BABY_STATUS_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 ${
                      babyStatus === option.id
                        ? choiceSelected
                        : choiceUnselected
                    }`}
                  >
                    <input
                      id={option.id === "expected" ? "rs-babyStatus" : undefined}
                      type="radio"
                      name="babyStatus"
                      value={option.id}
                      checked={babyStatus === option.id}
                      onChange={() => {
                        setBabyStatus(option.id);
                        clearField("babyStatus");
                      }}
                      className="size-[1.125rem] shrink-0 border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              <FieldError message={err("babyStatus")} />
            </fieldset>

            <div>
              <label htmlFor="rs-babyDate" className={labelClass}>
                {babyDateLabel} <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="rs-babyDate"
                name="babyDate"
                type="date"
                required
                value={babyDate}
                onChange={(event) => {
                  setBabyDate(event.target.value);
                  clearField("babyDate");
                }}
                className={`${inputClass} ${err("babyDate") ? inputErrorClass : ""}`}
                aria-invalid={!!err("babyDate")}
                aria-describedby={
                  err("babyDate") ? "rs-babyDate-err" : undefined
                }
              />
              <FieldError id="rs-babyDate-err" message={err("babyDate")} />
            </div>
          </FormSection>

          <FormSection heading="What support are you looking for?">
            <fieldset className="min-w-0 border-0 p-0">
              <legend className={`${labelClass} mb-1`}>
                You can choose more than one <RequiredMark />
                <span className="sr-only">(required)</span>
              </legend>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SUPPORT_NEED_OPTIONS.map((option) => {
                  const selected = supportNeeds.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      id={
                        option.id === SUPPORT_NEED_OPTIONS[0].id
                          ? "rs-supportNeeds"
                          : undefined
                      }
                      type="button"
                      onClick={() => toggleNeed(option.id)}
                      aria-pressed={selected}
                      className={`${chipBase} ${ringOffsetFocus} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green/30 ${
                        selected ? chipSelected : chipUnselected
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <FieldError message={err("supportNeeds")} />
            </fieldset>
          </FormSection>

          <FormSection heading="How can the Collective help?">
            <fieldset className="min-w-0 border-0 p-0">
              <legend className={`${labelClass} mb-4`}>
                What type of assistance would be most helpful right now?{" "}
                <RequiredMark />
                <span className="sr-only">(required — you may choose more than one)</span>
              </legend>
              <p className="mb-3 text-sm leading-relaxed text-muted">
                You can choose more than one.
              </p>
              <div className="flex flex-col gap-2.5">
                {ASSISTANCE_OPTIONS.map((option) => {
                  const selected = assistanceTypes.includes(option.id);
                  return (
                    <label
                      key={option.id}
                      className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 ${
                        selected ? choiceSelected : choiceUnselected
                      }`}
                    >
                      <input
                        id={
                          option.id === ASSISTANCE_OPTIONS[0].id
                            ? "rs-assistanceTypes"
                            : undefined
                        }
                        type="checkbox"
                        name="assistanceTypes"
                        value={option.id}
                        checked={selected}
                        onChange={() => toggleAssistance(option.id)}
                        className="size-[1.125rem] shrink-0 rounded border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
              <FieldError message={err("assistanceTypes")} />
            </fieldset>
          </FormSection>

          <FormSection heading="Tell us a little more">
            <div>
              <label htmlFor="rs-barrier" className={labelClass}>
                What is making it difficult to access the support you need
                right now? <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="rs-barrier"
                name="barrier"
                rows={4}
                value={barrier}
                onChange={(event) => {
                  setBarrier(event.target.value);
                  clearField("barrier");
                }}
                className={`${inputClass} min-h-[7.5rem] resize-y leading-relaxed ${err("barrier") ? inputErrorClass : ""}`}
                aria-invalid={!!err("barrier")}
                aria-describedby="rs-barrier-hint rs-barrier-err"
              />
              <p
                id="rs-barrier-hint"
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                There is no “right” answer. This simply helps us understand
                your circumstances and how the Collective may be able to help.
              </p>
              <FieldError id="rs-barrier-err" message={err("barrier")} />
            </div>
          </FormSection>

          <FormSection heading="Optional financial context">
            <div>
              <label htmlFor="rs-financialContext" className={labelClass}>
                Would you like to share anything about your current financial
                circumstances?{" "}
                <span className={optionalClass}>(optional)</span>
              </label>
              <textarea
                id="rs-financialContext"
                name="financialContext"
                rows={4}
                value={financialContext}
                onChange={(event) => {
                  setFinancialContext(event.target.value);
                  clearField("financialContext");
                }}
                className={`${inputClass} min-h-[6.5rem] resize-y leading-relaxed ${err("financialContext") ? inputErrorClass : ""}`}
                aria-invalid={!!err("financialContext")}
                aria-describedby="rs-financialContext-hint rs-financialContext-err"
              />
              <p
                id="rs-financialContext-hint"
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                You do not need to provide detailed financial information or
                documentation. Share only what you feel is helpful for us to
                understand your situation.
              </p>
              <FieldError
                id="rs-financialContext-err"
                message={err("financialContext")}
              />
            </div>
          </FormSection>

          <FormSection heading="What would help most?">
            <div>
              <label htmlFor="rs-biggestDifference" className={labelClass}>
                If we’re able to support your family, what would make the
                biggest difference right now? <RequiredMark />
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="rs-biggestDifference"
                name="biggestDifference"
                rows={4}
                value={biggestDifference}
                onChange={(event) => {
                  setBiggestDifference(event.target.value);
                  clearField("biggestDifference");
                }}
                placeholder="A few hours of postpartum support so I can rest, feeding help, someone to talk through sleep concerns with, access to a workshop, etc."
                className={`${inputClass} min-h-[7.5rem] resize-y leading-relaxed ${err("biggestDifference") ? inputErrorClass : ""}`}
                aria-invalid={!!err("biggestDifference")}
                aria-describedby={
                  err("biggestDifference")
                    ? "rs-biggestDifference-err"
                    : undefined
                }
              />
              <FieldError
                id="rs-biggestDifference-err"
                message={err("biggestDifference")}
              />
            </div>
          </FormSection>

          <FormSection heading="When are you hoping to receive support?">
            <fieldset className="min-w-0 border-0 p-0">
              <legend className="sr-only">
                When are you hoping to receive support? Required.
              </legend>
              <div className="flex flex-col gap-2.5">
                {TIMING_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 ${
                      timing === option.id ? choiceSelected : choiceUnselected
                    }`}
                  >
                    <input
                      id={
                        option.id === TIMING_OPTIONS[0].id ? "rs-timing" : undefined
                      }
                      type="radio"
                      name="timing"
                      value={option.id}
                      checked={timing === option.id}
                      onChange={() => {
                        setTiming(option.id);
                        clearField("timing");
                      }}
                      className="size-[1.125rem] shrink-0 border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              <FieldError message={err("timing")} />
            </fieldset>

            <div>
              <label htmlFor="rs-scheduleNotes" className={labelClass}>
                Is there anything we should know about your preferred days or
                times? <span className={optionalClass}>(optional)</span>
              </label>
              <textarea
                id="rs-scheduleNotes"
                name="scheduleNotes"
                rows={3}
                value={scheduleNotes}
                onChange={(event) => {
                  setScheduleNotes(event.target.value);
                  clearField("scheduleNotes");
                }}
                className={`${inputClass} min-h-[5.5rem] resize-y leading-relaxed ${err("scheduleNotes") ? inputErrorClass : ""}`}
                aria-invalid={!!err("scheduleNotes")}
                aria-describedby={
                  err("scheduleNotes") ? "rs-scheduleNotes-err" : undefined
                }
              />
              <FieldError
                id="rs-scheduleNotes-err"
                message={err("scheduleNotes")}
              />
            </div>
          </FormSection>

          <FormSection heading="In person or virtual">
            <fieldset className="min-w-0 border-0 p-0">
              <legend className={`${labelClass} mb-4`}>
                How would you prefer to receive support? <RequiredMark />
                <span className="sr-only">(required)</span>
              </legend>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {FORMAT_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    className={`${choiceBase} ${ringOffsetInner} focus-within:ring-2 focus-within:ring-harmony-green/25 ${
                      supportFormat === option.id
                        ? choiceSelected
                        : choiceUnselected
                    }`}
                  >
                    <input
                      id={
                        option.id === FORMAT_OPTIONS[0].id
                          ? "rs-supportFormat"
                          : undefined
                      }
                      type="radio"
                      name="supportFormat"
                      value={option.id}
                      checked={supportFormat === option.id}
                      onChange={() => {
                        setSupportFormat(option.id);
                        clearField("supportFormat");
                      }}
                      className="size-[1.125rem] shrink-0 border-border-soft text-harmony-green focus:ring-0 focus:ring-offset-0"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              <FieldError message={err("supportFormat")} />
            </fieldset>
            <p className="text-sm leading-relaxed text-muted">
              In-person care is offered in Montgomery County, Maryland. Virtual
              care may be available nationwide, depending on availability and
              the type of support requested.
            </p>
            {showInPersonNote ? (
              <p
                className="rounded-xl border border-harmony-green/15 bg-green-wash/35 px-4 py-3.5 text-sm leading-relaxed text-foreground"
                role="note"
              >
                {requestSupportPage.inPersonAreaNote}
              </p>
            ) : null}
          </FormSection>

          <div className="mt-6 space-y-3 border-t border-border-soft/40 pt-6 sm:mt-8 sm:pt-8">
            <div className="rounded-xl border border-border-soft/50 bg-green-wash/20 px-4 py-4 sm:px-5 sm:py-5">
              <label className="flex cursor-pointer gap-3.5 touch-manipulation sm:gap-4">
                <input
                  id="rs-attestation"
                  type="checkbox"
                  name="attestation"
                  checked={attestation}
                  onChange={(event) => {
                    setAttestation(event.target.checked);
                    clearField("attestation");
                  }}
                  className={`mt-1 size-[1.125rem] shrink-0 rounded border-border-soft text-harmony-green focus:ring-2 focus:ring-harmony-green/25 ${ringOffsetFocus}`}
                  aria-invalid={!!err("attestation")}
                  aria-describedby={
                    err("attestation") ? "rs-attestation-err" : undefined
                  }
                />
                <span className="text-sm leading-[1.6] text-foreground">
                  I confirm that the regular cost of the services I’m requesting
                  would currently create a financial barrier for my family.{" "}
                  <RequiredMark />
                  <span className="sr-only">(required)</span>
                </span>
              </label>
              <FieldError id="rs-attestation-err" message={err("attestation")} />
            </div>

            <div className="rounded-xl border border-border-soft/50 bg-green-wash/20 px-4 py-4 sm:px-5 sm:py-5">
              <label className="flex cursor-pointer gap-3.5 touch-manipulation sm:gap-4">
                <input
                  id="rs-acknowledgement"
                  type="checkbox"
                  name="acknowledgement"
                  checked={acknowledgement}
                  onChange={(event) => {
                    setAcknowledgement(event.target.checked);
                    clearField("acknowledgement");
                  }}
                  className={`mt-1 size-[1.125rem] shrink-0 rounded border-border-soft text-harmony-green focus:ring-2 focus:ring-harmony-green/25 ${ringOffsetFocus}`}
                  aria-invalid={!!err("acknowledgement")}
                  aria-describedby={
                    err("acknowledgement")
                      ? "rs-acknowledgement-err"
                      : undefined
                  }
                />
                <span className="text-sm leading-[1.6] text-foreground">
                  I understand that submitting this request does not guarantee
                  funded or reduced-cost services. Assistance depends on
                  available funding, resources, provider availability and the
                  type of support requested. <RequiredMark />
                  <span className="sr-only">(required)</span>
                </span>
              </label>
              <FieldError
                id="rs-acknowledgement-err"
                message={err("acknowledgement")}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8">
            <p className="text-sm leading-relaxed text-muted">
              {requestSupportPage.privacy}
            </p>
            <button
              type="submit"
              disabled={isPending}
              className={`${buttonBase} ${buttonVariantClass.primary} min-h-[3rem] w-full min-w-0 text-base focus-visible:ring-offset-cream sm:min-h-12 sm:w-auto sm:min-w-[13.5rem] sm:self-start sm:px-8 sm:text-[0.9375rem]`}
            >
              {isPending ? "Sending…" : "Request Support"}
            </button>
            <p className="text-xs leading-relaxed text-muted">
              <RequiredMark /> Required fields.
            </p>
          </div>
        </form>
      </div>
    </article>
  );
}
