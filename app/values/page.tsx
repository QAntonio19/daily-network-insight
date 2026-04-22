import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Values",
  description:
    "What we stand for at Daily Network Insights—editorial rigor, access, and intent.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Values"
        title="The principles behind our work"
        description="We build media that people return to: clear, honest, and grounded in real experience—not noise for its own sake."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="mx-auto max-w-2xl space-y-8 text-sm leading-relaxed text-stone-600 sm:text-base">
          <p>
            <span className="font-medium text-navy">Credibility first.</span> We
            interview practitioners, source carefully, and avoid empty trends. If we
            publish it, you can expect structure, context, and care.
          </p>
          <p>
            <span className="font-medium text-navy">Access without dilution.</span>{" "}
            Complex ideas deserve plain language and strong editing—so insight travels
            to busy readers without losing substance.
          </p>
          <p>
            <span className="font-medium text-navy">Community with intent.</span> We
            connect brands, leaders, and audiences through content, events, and
            follow-through that respects everyone&apos;s time.
          </p>
        </div>
      </Container>
    </>
  );
}
