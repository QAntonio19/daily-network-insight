import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Daily Network Insights handles information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="A concise overview of how we approach data, built for a premium media platform."
      />
      <Container narrow className="reveal-on-scroll py-14 sm:py-20">
        <div className="premium-surface space-y-6 p-8 text-sm leading-relaxed text-stone-600 sm:p-10">
          <p>
            Daily Network Insights respects your privacy. This policy describes how we
            collect and use information when you browse our site, subscribe to our
            newsletter, or contact us about partnerships.
          </p>
          <p>
            <strong className="font-semibold text-navy">Information we collect.</strong>{" "}
            We may collect your email address and basic contact details when you submit
            forms. We use this information to respond to inquiries and deliver newsletters
            you’ve opted into.
          </p>
          <p>
            <strong className="font-semibold text-navy">How we use information.</strong>{" "}
            We use data to operate the platform, improve content, and communicate with you
            about programs you’ve asked to hear about. We do not sell your personal
            information.
          </p>
          <p>
            <strong className="font-semibold text-navy">Cookies &amp; analytics.</strong>{" "}
            We may use first party analytics to understand aggregate usage patterns. You
            can control cookies through your browser settings.
          </p>
          <p>
            <strong className="font-semibold text-navy">Contact.</strong> For privacy
            questions, email us through the contact page.
          </p>
          <p className="border-t border-stone-900/10 pt-6 text-xs text-stone-500">
            This summary is provided for transparency. Update dates and full legal text can
            be expanded as your organization formalizes policies.
          </p>
        </div>
      </Container>
    </>
  );
}
