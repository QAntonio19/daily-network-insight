import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  titleId?: string;
  /** Tighter spacing and type scale for long-form sections on the home page */
  compact?: boolean;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  as: headingLevel = "h1",
  titleId,
  compact = false,
}: PageHeaderProps) {
  const TitleTag = headingLevel;
  return (
    <div className="page-header-editorial">
      <Container
        className={
          compact
            ? "relative py-8 sm:py-10"
            : "relative py-16 sm:py-20"
        }
      >
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            {eyebrow}
          </p>
        ) : null}
        <TitleTag
          className={
            compact
              ? "mt-2 max-w-3xl font-serif text-3xl leading-snug text-navy sm:text-4xl"
              : "mt-4 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl"
          }
          id={titleId}
        >
          {title}
        </TitleTag>
        {description ? (
          <p
            className={
              compact
                ? "mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base"
                : "mt-6 max-w-2xl text-lg leading-relaxed text-stone-600"
            }
          >
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
