import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Partnerships",
  description:
    "Partner with Daily Network Insights: media, events, newsletters, and strategic storytelling.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Partner with us"
        description="Tell us what you’re building. We’ll respond with clarity on fit, timing, and the right collaboration model, media first, always."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="text-sm font-medium text-navy">Direct email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-lg font-medium text-terracotta underline-offset-4 transition-colors hover:text-navy hover:underline"
            >
              {siteConfig.email}
            </a>
            <p className="mt-8 text-sm leading-relaxed text-stone-600">
              We work with brands, founders, and organizations that want credible storytelling
              and thoughtful distribution. If that’s you, reach out.
            </p>
          </div>
          <div className="premium-surface p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
