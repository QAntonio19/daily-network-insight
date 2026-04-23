import { ValuesScrollWheel } from "@/components/home/ValuesScrollWheel";

/** #values: narrativa con scroll (rueda). */
export function HomeValuesSection() {
  return (
    <section
      id="values"
      className=""
      aria-label="Values"
    >
      <ValuesScrollWheel />
    </section>
  );
}
