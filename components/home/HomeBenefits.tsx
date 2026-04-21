import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefitCards } from "@/lib/content";

export function HomeBenefits() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why partner"
          title="Benefits for your business"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {benefitCards.map((b) => (
            <article
              key={b.title}
              className="premium-surface p-8"
            >
              <h3 className="font-serif text-2xl text-navy">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{b.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
