import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic storytelling, curated exposure, and media partnerships for brands and organizations—explore offerings or get in touch.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Partnerships for brands and organizations"
        description="We work with teams that want their expertise to show up with editorial care—on the page, in the inbox, and in the room. Explore the ways we partner, or go straight to a conversation."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-sm leading-relaxed text-stone-600">
            From sponsored insight features to newsletter production and event-driven media, we build programs that feel credible to your audience and sustainable for your team.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/services/partnerships">View partnership offerings</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
