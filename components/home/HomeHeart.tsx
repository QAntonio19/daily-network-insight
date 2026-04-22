import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeHeart() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Purpose"
          title="The heart behind what we do"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <p className="text-base leading-relaxed text-stone-600">
            Everything we create is driven by the belief that the right information can
            change someone’s direction. We bridge the gap between industry expertise and
            everyday understanding, turning complex ideas into clear, actionable
            insights.
          </p>
          <p className="text-base leading-relaxed text-stone-600">
            Through media, conversation, and community, we aim to create an environment
            where knowledge flows freely, connections are built, and growth becomes more
            accessible to everyone.
          </p>
        </div>
        <div className="editorial-rule my-12" />
        <p className="max-w-4xl font-serif text-2xl leading-relaxed text-navy sm:text-[1.65rem]">
          We’re not just sharing content, we’re building a platform where ideas, insights,
          and opportunities come together to support the next generation of thinkers,
          creators, and leaders.
        </p>
      </Container>
    </section>
  );
}
