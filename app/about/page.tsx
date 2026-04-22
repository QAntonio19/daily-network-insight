import type { Metadata } from "next";
import { EditorialSectionIntro } from "@/components/EditorialSectionIntro";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { aboutNarrative } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Daily Network Insights is a premium media platform connecting audiences with research-based, industry-informed insight.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A media platform built for clarity and credibility"
        description="We translate real-world expertise into accessible media—so insight travels further and lands with intention."
      />
      <Container className="reveal-on-scroll py-16 sm:py-20">
        <div className="space-y-16 sm:space-y-20">
          <EditorialSectionIntro {...aboutNarrative.founder} />

          <div className="border-t border-stone-900/10 pt-16 sm:pt-20">
            <EditorialSectionIntro {...aboutNarrative.companyFoundation} />
          </div>

          <div className="premium-surface p-8 sm:p-10">
            <h2 className="font-serif text-2xl text-navy">What we publish</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-stone-600 marker:text-terracotta">
              <li>Expert interviews and long-form insight</li>
              <li>Curated industry content and explainers</li>
              <li>A premium newsletter with signal-first curation</li>
              <li>Podcast conversations with leaders and operators</li>
              <li>Community events and field programming</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
