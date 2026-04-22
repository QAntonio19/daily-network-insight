import { HomeAtOurCore } from "@/components/home/HomeAtOurCore";
import { HomeHeart } from "@/components/home/HomeHeart";
import { HomeValues } from "@/components/home/HomeValues";
import { PageHeader } from "@/components/PageHeader";

/**
 * Contenido que antes estaba en /values, ahora anclado en Home (#values).
 */
export function HomeValuesSection() {
  return (
    <section
      id="values"
      className="scroll-mt-24 border-b border-stone-900/10 sm:scroll-mt-28"
      aria-label="Values"
    >
      <PageHeader
        as="h2"
        eyebrow="Values"
        title="The principles behind our work"
        description="Clear standards, a grounded mission, and a purpose you’ll feel in how we show up in media, events, and community."
      />
      <HomeAtOurCore />
      <HomeValues />
      <HomeHeart />
    </section>
  );
}
