import { benefitCards, serviceCards } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PartnershipOfferings() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {serviceCards.map((s) => (
          <article
            key={s.title}
            className="card-hover premium-surface flex h-full flex-col p-8"
          >
            <h2 className="font-serif text-2xl text-navy">{s.title}</h2>
            <p className="mt-3 text-sm font-medium text-stone-700">{s.summary}</p>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Why partner"
          title="Benefits for your business"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {benefitCards.map((b) => (
            <article key={b.title} className="premium-surface p-8">
              <h3 className="font-serif text-xl text-navy">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{b.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <ButtonLink href="/contact">Start a partnership conversation</ButtonLink>
      </div>
    </>
  );
}
