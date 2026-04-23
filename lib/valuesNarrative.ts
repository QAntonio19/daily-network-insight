/**
 * Copy exclusivo de Daily Network Insights para el bloque de narrativa
 * (rueda de scroll) — alineado con Values, At Our Core, Mission, Purpose e Initiatives.
 */
export const valuesNarrativeSteps = [
  {
    id: "values" as const,
    eyebrow: "Values",
    title: "The principles behind our work",
    body:
      "Clear standards, a grounded mission, and a purpose you’ll feel in how we show up in media, events, and community.",
    mark: "◆",
  },
  {
    id: "at-our-core" as const,
    eyebrow: "At Our Core",
    title: "A media platform built on substance",
    body:
      "We are a media platform delivering industry-backed insights that educate and connect driven individuals. By turning real-world expertise into accessible content, we make knowledge easy to understand and apply for growth.",
    mark: "◎",
  },
  {
    id: "mission" as const,
    eyebrow: "Mission",
    title: "The values that shape our work",
    body:
      "Principles you’ll feel in every story, episode, and community moment. Entrepreneurial Spirit, Support for Every Journey, Insight Driven Growth, and Credibility Through Real Voices our compass for content and community.",
    mark: "↗",
  },
  {
    id: "purpose" as const,
    eyebrow: "Purpose",
    title: "The heart behind what we do",
    body:
      "We believe the right information can change someone’s direction. We connect industry expertise with everyday understanding, making growth more accessible and empowering the next generation of leaders.",
    mark: "◇",
  },
  {
    id: "initiatives" as const,
    eyebrow: "Initiatives",
    title: "Featured projects & collaborations",
    body:
      "From California to Mexico, we create platforms for industry insight, storytelling, and real-world connection. Through media, cross-border collaborations, and community events, we bring together professionals, brands, and ideas to share knowledge, increase visibility, and create meaningful opportunities.",
    mark: "⬡",
  },
] as const;

export type ValuesNarrativeStepId = (typeof valuesNarrativeSteps)[number]["id"];
