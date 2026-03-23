type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const descMax =
    align === "center" ? "mx-auto max-w-xl md:max-w-2xl" : "max-w-xl md:max-w-2xl";

  return (
    <header className={`mb-12 md:mb-14 lg:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base md:mt-5 ${descMax}`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
