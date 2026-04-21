import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeJoinMission() {
  return (
    <section className="section-join-mission reveal-on-scroll border-b border-stone-900/10 py-20 sm:py-24">
      <Container>
        <div className="premium-surface p-8 sm:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Join the mission"
            title="Build with us—credibly, clearly, and with care"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-14">
            <p className="text-base leading-relaxed text-stone-600">
              We’re building a platform designed to inform, educate, and empower through
              industry-driven insight. Daily Network Insights connects audiences with
              real-world knowledge by engaging directly with professionals, leaders, and
              credible sources across various fields.
            </p>
            <p className="text-base leading-relaxed text-stone-600">
              Through media, we bridge the gap between complex industry information and
              everyday understanding—delivering insights, perspectives, and resources that
              help individuals stay informed and grow with confidence.
            </p>
          </div>
          <p className="mt-8 max-w-4xl text-base leading-relaxed text-stone-600">
            Partner with us to share expertise, amplify impactful ideas, and reach an
            audience eager to learn and evolve. Together, we can create meaningful
            content, spark new opportunities, and build a more informed, connected
            community.
          </p>
          <div className="editorial-rule my-10" />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Become a Partner</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Collaborate With Us
            </ButtonLink>
            <ButtonLink href="/newsletter" variant="secondary">
              Join the Newsletter
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
