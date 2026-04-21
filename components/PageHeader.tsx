import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="page-header-editorial">
      <Container className="relative py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
