import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCards } from "@/lib/content";

export function HomeProjects() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Initiatives"
          title="Featured projects & collaborations"
          description="California to Mexico, and everywhere community shows up with intention."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projectCards.map((p) => (
            <article
              key={p.title}
              className="card-hover premium-surface flex h-full flex-col p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  {p.region}
                </p>
                <Link
                  href="/projects"
                  className="text-xs font-medium text-navy underline-offset-4 hover:underline"
                >
                  Details
                </Link>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-stone-900/10 bg-beige/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
