export const faqItems = [
  {
    id: "who-is-daily-network",
    question: "Who is Daily Network",
    answer:
      "We are an education-driven organization focused on preparing the next generation of entrepreneurs. Our mission is to bridge the gap between academic learning and real-world experience by helping students develop essential skills, gain professional exposure, and connect with meaningful opportunities.",
  },
  {
    id: "what-does-daily-network-do",
    question: "What does Daily Network do",
    answer:
      "We empower students, entrepreneurs, and professionals through mentorship, career resources, and community programs. By collaborating with local organizations and chambers of commerce, we provide access to expert insights, business development tools, and opportunities for professional growth.",
  },
  {
    id: "internship-opportunities",
    question: "How do you offer internship opportunities",
    answer:
      "We partner with businesses and organizations to create tailored internship and apprenticeship programs. By matching students with opportunities that align with their studies and goals, we make it easier for them to gain hands-on experience, build strong networks, and prepare for long-term career success.",
  },
] as const;

export type FaqItem = (typeof faqItems)[number];
