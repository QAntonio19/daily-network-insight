import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsItems } from "@/lib/achievementsContent";

/**
 * Línea de tiempo de logros, debajo de Values en home.
 */
export function HomeAchievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-b border-stone-900/10 bg-transparent sm:scroll-mt-28"
      aria-labelledby="achievements-heading"
    >
      <Container className="reveal-on-scroll py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="achievements-heading"
          align="center"
          eyebrow="Milestones"
          title="Achievements"
          description="Highlights from our work in media, community, and partnership."
        />
        <ol className="mt-12 list-none space-y-0 p-0 lg:mt-16">
          {achievementsItems.map((item, index) => {
            const imageOnRight = index % 2 === 1;
            return (
              <li
                key={item.id}
                className="border-t border-stone-900/10 pt-10 first:border-t-0 first:pt-0 sm:pt-12 sm:first:pt-0"
              >
                <div
                  className={
                    "min-w-0 grid grid-cols-1 gap-5 sm:gap-6 " +
                    "lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:items-center " +
                    "lg:gap-x-10 lg:gap-y-3"
                  }
                >
                  <div
                    className={
                      "min-w-0 " +
                      (imageOnRight
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-2 lg:row-start-1")
                    }
                  >
                    <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full border border-stone-900/20 bg-navy"
                        aria-hidden
                      />
                      {item.period}
                    </p>
                    <h3 className="mt-1.5 font-sans text-xl font-normal leading-tight text-navy sm:mt-2 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <figure
                    className={
                      "min-w-0 w-full " +
                      (imageOnRight
                        ? "lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center"
                        : "lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center")
                    }
                  >
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-stone-900/10 bg-stone-100 sm:aspect-[5/3] lg:aspect-[4/3]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 38vw, 90vw"
                      />
                    </div>
                  </figure>
                  <div
                    className={
                      "min-w-0 max-w-3xl space-y-3 text-base leading-relaxed text-stone-600 sm:space-y-3.5 sm:text-[1.05rem] " +
                      (imageOnRight
                        ? "lg:col-start-1 lg:row-start-2"
                        : "lg:col-start-2 lg:row-start-2")
                    }
                  >
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
