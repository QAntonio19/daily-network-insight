import { HomeFaqItems } from "@/components/home/HomeFaqItems";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { faqItems } from "@/lib/faqContent";

export function HomeFaq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-stone-900/10 sm:scroll-mt-28"
      aria-labelledby="faq-heading"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <RevealOnScroll className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          <div className="reveal-left shrink-0 max-w-sm lg:col-span-4 xl:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-sans text-3xl font-normal leading-tight text-navy sm:text-4xl"
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="reveal-right min-w-0 lg:col-span-8 xl:col-span-9">
            <HomeFaqItems items={faqItems} />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
