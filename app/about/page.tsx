import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daily Network Insights is a premium media platform connecting audiences with research-based, industry-informed insight.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A media platform built for clarity and credibility"
        description="We translate real-world expertise into accessible media—so insight travels further and lands with intention."
      />
      <Container className="reveal-on-scroll py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Daily Network Insights exists to bridge the distance between complex industry
              knowledge and everyday understanding. Our work is grounded in interviews,
              research, and lived experience—then shaped into formats people can actually
              use.
            </p>
            <p>
              We’re not a job board, a school outreach program, or a generic career portal.
              We’re a media-driven platform: editorial first, community-centered, and
              built for professionals who care about quality.
            </p>
          </div>
          <div className="premium-surface p-8 lg:p-10">
            <h2 className="font-serif text-2xl text-navy">What we publish</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-sm marker:text-terracotta">
              <li>Expert interviews and long-form insight</li>
              <li>Curated industry content and explainers</li>
              <li>A premium newsletter with signal-first curation</li>
              <li>Podcast conversations with leaders and operators</li>
              <li>Community events and mentorship opportunities</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
