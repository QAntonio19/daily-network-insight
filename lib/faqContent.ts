export const faqItems = [
  {
    id: "what-is-daily-network-insights",
    question: "What is Daily Network Insights?",
    answer:
      "Daily Network Insights is an online media and marketing platform that transforms industry expertise into high-impact content. We connect brands, professionals, and audiences through insight-driven media and strategic storytelling.",
  },
  {
    id: "what-does-daily-network-insights-offer",
    question: "What does Daily Network Insights offer?",
    answer:
      "We offer media and marketing solutions including sponsored content, brand features, newsletter placements, and digital storytelling. Our platform helps businesses increase visibility while delivering valuable insights to our audience.",
  },
  {
    id: "who-is-your-platform-for",
    question: "Who is your platform for?",
    answer:
      "Our platform is built for ambitious individuals, forward-thinking brands, professionals, entrepreneurs, and organizations looking to gain insight, share expertise, and grow their presence.",
  },
  {
    id: "how-can-businesses-partner",
    question: "How can businesses partner with you?",
    answer:
      "Businesses can partner with us through sponsored insights, premium newsletter placements, and event & media collaborations. We help brands turn their expertise into content that builds authority and reaches the right audience.",
  },
  {
    id: "mentorship-or-internship-programs",
    question: "Do you offer mentorship or internship programs?",
    answer:
      "No. Our focus is on media and marketing. We create value through content, exposure, and strategic partnerships rather than structured programs.",
  },
  {
    id: "how-stay-connected-or-get-involved",
    question: "How can I stay connected or get involved?",
    answer:
      "You can stay connected by subscribing to our newsletter, engaging with our content, attending events, or partnering with us. We're always open to working with individuals and brands that bring valuable insight.",
  },
] as const;

export type FaqItem = (typeof faqItems)[number];
