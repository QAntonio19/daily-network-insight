interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${invert ? "text-terracotta-soft" : "text-terracotta"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-3xl leading-tight sm:text-4xl ${invert ? "text-ivory" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${invert ? "text-stone-300" : "text-stone-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
