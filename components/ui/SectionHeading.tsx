interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  /** Use h3 when this block sits under a page-level h2 (e.g. home value sections). */
  as?: "h2" | "h3";
  /** Ancla para `aria-labelledby` en la sección padre. */
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  as: headingTag = "h2",
  id: titleId,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const TitleTag = headingTag;
  const titleClass =
    headingTag === "h3"
      ? `mt-2 font-serif text-xl leading-tight sm:text-2xl ${invert ? "text-ivory" : "text-navy"}`
      : `mt-3 font-serif text-3xl leading-tight sm:text-4xl ${invert ? "text-ivory" : "text-navy"}`;
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${invert ? "text-ivory/85" : "text-terracotta"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <TitleTag id={titleId} className={titleClass}>
        {title}
      </TitleTag>
      {description ? (
        <p
          className={`${
            headingTag === "h3" ? "mt-2 text-sm sm:text-base" : "mt-4 text-base"
          } leading-relaxed ${invert ? "text-stone-300" : "text-stone-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
