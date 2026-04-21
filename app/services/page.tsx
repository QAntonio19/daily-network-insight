import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { benefitCards, serviceCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic storytelling, curated exposure, and media partnerships for brands and organizations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Partnerships for brands, founders, and organizations"
        description="At Daily Network Insights, we partner with brands, founders, and organizations to transform expertise into high-impact media. Through strategic storytelling, curated exposure, and real-world experiences, we position your brand with clarity, intention, and lasting influence."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <article key={s.title} className="card-hover premium-surface flex h-full flex-col p-8">
              <h2 className="font-serif text-2xl text-navy">{s.title}</h2>
              <p className="mt-3 text-sm font-medium text-stone-700">{s.summary}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">{s.body}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-20 font-serif text-3xl text-navy">Benefits for your business</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {benefitCards.map((b) => (
            <article key={b.title} className="premium-surface p-8">
              <h3 className="font-serif text-xl text-navy">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{b.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonLink href="/contact">Start a partnership conversation</ButtonLink>
        </div>
      </Container>
    </>
  );
}
