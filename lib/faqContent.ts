export const faqItems = [
  {
    id: "what-is-daily-network-insights",
    question: "What is Daily Network Insights?",
    answer:
      "Daily Network Insights is a media platform dedicated to delivering industry-driven insights, expert perspectives, and curated knowledge. We transform real-world experience into accessible content that informs, educates, and connects individuals across industries.",
  },
  {
    id: "what-does-daily-network-insights-offer",
    question: "What does Daily Network Insights offer?",
    answer:
      "We provide insight-driven content through features, interviews, newsletters, and digital media. Our platform highlights industry trends, practical advice, and valuable resources designed to help individuals and professionals stay informed and continue growing.",
  },
  {
    id: "who-is-your-platform-for",
    question: "Who is your platform for?",
    answer:
      "Our content is designed for ambitious individuals—students, professionals, entrepreneurs, and curious minds—who are seeking clarity, direction, and real-world insight to support their personal and professional growth.",
  },
  {
    id: "how-can-businesses-partner",
    question: "How can businesses partner with you?",
    answer:
      "We partner with brands through sponsored insights, premium newsletter placements, and event & media collaborations. These opportunities allow businesses to share their expertise, expand their reach, and connect with a targeted, engaged audience.",
  },
  {
    id: "mentorship-or-internship-programs",
    question: "Do you offer mentorship or internship programs?",
    answer:
      "Our primary focus is media and content. While we no longer offer structured internship programs, we create opportunities for learning and connection through insights, conversations, and community-driven experiences.",
  },
  {
    id: "how-stay-connected-or-get-involved",
    question: "How can I stay connected or get involved?",
    answer:
      "You can engage with Daily Network Insights by subscribing to our newsletter, attending community events, or following our content across platforms. We also welcome collaborations with individuals and organizations who share valuable insights.",
  },
] as const;

export type FaqItem = (typeof faqItems)[number];
