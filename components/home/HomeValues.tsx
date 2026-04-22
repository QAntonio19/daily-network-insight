import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Entrepreneurial Spirit",
    body:
      "We believe growth starts with curiosity and action. Every challenge is an opportunity to learn, adapt, and innovate. Through our content, we aim to inspire individuals to think bigger, move forward with confidence, and build meaningful paths in their careers and ventures.",
    icon: "↗",
  },
  {
    title: "Support for Every Journey",
    body:
      "Everyone starts somewhere. Whether you're exploring new opportunities or advancing in your field, we provide a space that encourages growth, connection, and learning. Through community and shared experiences, we help individuals feel supported at every stage of their journey.",
    icon: "◇",
  },
  {
    title: "Insight Driven Growth",
    body:
      "We are committed to delivering valuable tips, advice, and resources through media that people can actually use. By curating knowledge from trusted voices and real world experience, we make it easier for individuals to stay informed, develop new skills, and grow with purpose.",
    icon: "◆",
  },
  {
    title: "Credibility Through Real Voices",
    body:
      "Our work is grounded in conversations with professionals, founders, and industry leaders whose experience adds depth, relevance, and practical value to every insight we share.",
    icon: "◎",
  },
] as const;

export function HomeValues() {
  return (
    <section className="border-b border-stone-900/10 bg-beige/35 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Mission"
          title="The values that shape our work"
          description="Principles you’ll feel in every story, episode, and community moment."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <article
              key={v.title}
              className="card-hover premium-surface p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stone-900/10 bg-beige/60 font-serif text-xl text-terracotta"
                  aria-hidden
                >
                  {v.icon}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-navy">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{v.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
