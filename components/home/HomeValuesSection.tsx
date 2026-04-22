import { ValuesScrollWheel } from "@/components/home/ValuesScrollWheel";

/** #values: narrativa con scroll (rueda). */
export function HomeValuesSection() {
  return (
    <section
      id="values"
      className="scroll-mt-[6.5rem] sm:scroll-mt-32 md:scroll-mt-[8.5rem]"
      aria-label="Values"
    >
      <ValuesScrollWheel />
    </section>
  );
}
