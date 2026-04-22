import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Partner with Daily Network Insights—strategic storytelling, curated exposure, and media for brands and organizations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Partnerships for brands and organizations"
        description="At Daily Network Insights, we partner with brands, founders, and organizations to transform expertise into high-impact media. Through strategic storytelling, curated exposure, and real-world experiences, we position your brand with clarity, intention, and lasting influence."
      />
      <Container className="reveal-on-scroll -mt-2 pb-16 sm:pb-20">
        <ButtonLink href="/services/partnerships">
          Explore partnership offerings
        </ButtonLink>
      </Container>
    </>
  );
}
