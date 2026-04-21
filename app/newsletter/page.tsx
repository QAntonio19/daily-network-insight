import type { Metadata } from "next";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "A premium digest: curated insight, credible sources, and formats designed for busy professionals.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Insight in your inbox—curated, not cluttered"
        description="Weekly dispatches built for signal—no clutter, no gimmicks. Just editorial discipline and real-world relevance."
      />
      <Container narrow className="reveal-on-scroll py-14 sm:py-20">
        <div className="premium-surface p-8 sm:p-10">
          <h2 className="font-serif text-2xl text-navy">What to expect</h2>
          <ul className="mt-6 list-inside list-disc space-y-3 text-sm leading-relaxed text-stone-600 marker:text-terracotta">
            <li>One flagship idea worth your attention</li>
            <li>Curated links from practitioners—not algorithms</li>
            <li>Occasional invites to community moments and events</li>
            <li>Clear unsubscribe, always</li>
          </ul>
          <div className="editorial-rule my-10" />
          <p className="text-sm font-medium text-navy">Join the list</p>
          <div className="mt-4">
            <NewsletterForm variant="inline" tone="light" />
          </div>
        </div>
      </Container>
    </>
  );
}
