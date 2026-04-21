import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Community Events",
  description:
    "Gatherings designed for conversation—panels, salons, and community moments with follow-through.",
};

const upcoming = [
  {
    title: "Leadership Salon: credibility in a noisy market",
    location: "California",
    date: "2026-05-14",
  },
  {
    title: "Cross-border media & community storytelling",
    location: "Virtual + Mexico City",
    date: "2026-06-02",
  },
] as const;

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Community events with intention"
        description="We host programming that prioritizes dialogue, depth, and follow-up content—so the conversation doesn’t end when the room clears."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {upcoming.map((e) => (
            <article key={e.title} className="premium-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                {e.date}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy">{e.title}</h2>
              <p className="mt-3 text-sm text-stone-600">{e.location}</p>
              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                Invitations go to newsletter subscribers first. Partner organizations receive
                tailored opportunities for programming and media coverage.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/newsletter">Get event updates</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Propose a partnership event
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
