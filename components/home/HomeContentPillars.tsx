import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Daily Network Insights",
    href: "/insights",
    description: "Long form analysis, interviews, and field notes, grounded in practice.",
  },
  {
    title: "Curated Newsletter",
    href: "/#newsletter",
    description: "A premium digest for professionals who want signal, not noise.",
  },
  {
    title: "Podcast Conversations",
    href: "/podcast",
    description: "Leaders and operators in candid dialogue, tight edits, clear takeaways.",
  },
  {
    title: "Community Events",
    href: "/events",
    description: "Gatherings designed for conversation, not crowds, online and in person.",
  },
] as const;

export function HomeContentPillars() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-navy py-20 text-ivory sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Content Ecosystem"
          title="How we show up consistently"
          description="A connected system of media and experiences designed to inform, elevate, and connect."
          align="center"
          invert
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="glass-dark-tile group rounded-2xl p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory/40"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 transition-colors group-hover:text-stone-200">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300 transition-colors group-hover:text-stone-200">
                {p.description}
              </p>
              <p className="mt-5 text-sm font-medium text-stone-400 transition-colors group-hover:text-ivory">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
