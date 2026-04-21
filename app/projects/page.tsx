import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { projectCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Initiatives",
  description:
    "Cross-border storytelling, community collaborations, educational media, and leadership events.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Initiatives across regions and communities"
        description="California, Mexico, educational storytelling, cross-border initiatives, media partnerships, and leadership events—built with editorial care."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projectCards.map((p) => (
            <article key={p.title} className="card-hover premium-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                {p.region}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{p.description}</p>
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
        <p className="mt-12 text-center text-sm text-stone-600">
          Interested in collaborating on a project?{" "}
          <Link
            href="/contact"
            className="font-medium text-terracotta underline-offset-4 transition-colors hover:text-navy hover:underline"
          >
            Contact us
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
