import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeAtOurCore() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="At Our Core"
          title="A media platform built on substance"
        />
        <div className="editorial-rule my-10" />
        <p className="max-w-3xl font-serif text-2xl leading-relaxed text-navy sm:text-[1.65rem]">
          We are a media platform dedicated to delivering industry backed insights that
          inform, educate, and connect driven individuals. By engaging with professionals
          and leaders across multiple industries, we transform real world experience into
          accessible, impactful content. Our goal is simple: to make knowledge easier to
          understand, apply, and use for growth.
        </p>
      </Container>
    </section>
  );
}
