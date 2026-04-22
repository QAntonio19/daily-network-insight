import type { Metadata } from "next";
import { PartnershipOfferings } from "@/components/services/PartnershipOfferings";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Partnership offerings",
  description:
    "Industry features, content amplification, and event & media partnerships—strategic storytelling for brands and organizations.",
};

export default function ServicePartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Partnerships for brands, founders, and organizations"
        description="At Daily Network Insights, we partner with brands, founders, and organizations to transform expertise into high-impact media. Through strategic storytelling, curated exposure, and real-world experiences, we position your brand with clarity, intention, and lasting influence."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <PartnershipOfferings />
      </Container>
    </>
  );
}
