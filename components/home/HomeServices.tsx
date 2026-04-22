import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeServices() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Partnerships for brands and organizations"
          description="At Daily Network Insights, we partner with brands, founders, and organizations to transform expertise into high-impact media. Through strategic storytelling, curated exposure, and real-world experiences, we position your brand with clarity, intention, and lasting influence."
        />
        <div className="mt-10">
          <ButtonLink href="/services/partnerships">Explore partnership offerings</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
