import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  titleId?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  as: headingLevel = "h1",
  titleId,
}: PageHeaderProps) {
  const TitleTag = headingLevel;
  return (
    <div className="page-header-editorial">
      <Container className="relative py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            {eyebrow}
          </p>
        ) : null}
        <TitleTag
          className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl"
          id={titleId}
        >
          {title}
        </TitleTag>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
