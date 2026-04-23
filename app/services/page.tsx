import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Daily Network Insights works with brands and professionals to turn expertise into media that drives visibility, connection, and growth.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we offer"
        description="Daily Network Insights works with brands and professionals to turn expertise into media that drives visibility, connection, and growth. For a tailored quote on your project, contact us at info@dailynetworkinsights.com."
      />
      <Container className="reveal-on-scroll pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Industry Features & Sponsored Insights</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              We highlight your story through curated features and interviews that place your brand within meaningful, insight-driven content.
            </p>
          </article>
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Content & Newsletter Distribution</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              Your ideas are shaped into clear, high-quality content and shared through our platform and newsletter to reach the right audience.
            </p>
          </article>
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Event & Media Coverage</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              We create opportunities for real-world connection through events and media collaborations, bringing brands and communities together through shared experiences.
            </p>
          </article>
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </Container>
    </>
  );
}
