import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCards } from "@/lib/content";

export function HomeServices() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Partnerships for brands and organizations"
          description="At Daily Network Insights, we partner with brands, founders, and organizations to transform expertise into high-impact media. Through strategic storytelling, curated exposure, and real-world experiences, we position your brand with clarity, intention, and lasting influence."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <article
              key={s.title}
              className="card-hover premium-surface flex h-full flex-col p-8"
            >
              <h3 className="font-serif text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm font-medium text-stone-700">{s.summary}</p>
              <p className="mt-5 text-sm leading-relaxed text-stone-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
