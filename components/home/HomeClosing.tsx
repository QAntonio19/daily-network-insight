import { Container } from "@/components/ui/Container";

export function HomeClosing() {
  return (
    <section className="closing-band py-20 sm:py-28">
      <Container narrow>
        <div className="premium-surface p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Gratitude
          </p>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-[2.6rem]">
            Thank you for being part of the mission
          </h2>
          <div className="editorial-rule my-10" />
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              We’re grateful for every business, organization, and individual who believes
              in empowering the next generation. Your support helps create pathways for
              emerging professionals, aspiring leaders, and growing communities.
            </p>
            <p>
              Together, we’re shaping a community built on opportunity, collaboration,
              and growth. Thank you for making a lasting impact.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
