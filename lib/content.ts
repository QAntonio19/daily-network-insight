import type {
  BenefitCard,
  EditorialIntroBlock,
  InsightPost,
  NavItem,
  ProjectCard,
  ServiceCard,
} from "./types";

export const siteConfig = {
  name: "Daily Network Insights",
  tagline:
    "Research-based, industry-informed insights—accessible, relevant, and consistent.",
  email: "hello@dailynetworkinsights.com",
  social: {
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    youtube: "https://www.youtube.com",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Values", href: "/values" },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Podcast", href: "/podcast" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Projects", href: "/projects" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const insightCategories = [
  "Leadership",
  "Business",
  "Education",
  "Media",
  "Community",
  "Industry Trends",
] as const;

export const insightPosts: InsightPost[] = [
  {
    slug: "leading-with-clarity-in-volatile-markets",
    title: "Leading with Clarity in Volatile Markets",
    excerpt:
      "How executives translate uncertainty into direction—and what teams need to hear when stakes are high.",
    category: "Leadership",
    date: "2026-03-12",
    readTime: "8 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Leaders collaborating around a table in a modern office",
    featured: true,
  },
  {
    slug: "the-new-media-stack-for-credible-storytelling",
    title: "The New Media Stack for Credible Storytelling",
    excerpt:
      "From editorial workflow to distribution—what premium media brands get right in 2026.",
    category: "Media",
    date: "2026-03-08",
    readTime: "6 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Microphone and notebook on a desk",
  },
  {
    slug: "cross-border-collaboration-that-actually-scales",
    title: "Cross-Border Collaboration That Actually Scales",
    excerpt:
      "Lessons from California–Mexico initiatives where trust, logistics, and narrative align.",
    category: "Business",
    date: "2026-02-26",
    readTime: "7 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Handshake between professionals",
  },
  {
    slug: "education-without-the-jargon",
    title: "Education Without the Jargon",
    excerpt:
      "Translating complex industry knowledge into formats people can use—without diluting rigor.",
    category: "Education",
    date: "2026-02-18",
    readTime: "5 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "People learning together in a bright space",
  },
  {
    slug: "community-as-a-strategic-advantage",
    title: "Community as a Strategic Advantage",
    excerpt:
      "Why the most durable brands invest in gatherings, mentorship, and shared learning.",
    category: "Community",
    date: "2026-02-02",
    readTime: "6 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Community event with audience",
  },
  {
    slug: "signals-from-the-field-what-leaders-are-watching",
    title: "Signals from the Field: What Leaders Are Watching",
    excerpt:
      "A concise scan of trends shaping hiring, media, and partnership decisions this quarter.",
    category: "Industry Trends",
    date: "2026-01-21",
    readTime: "9 min read",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a screen",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Industry Features & Sponsored Insights",
    summary:
      "Editorial-grade features that align your expertise with narratives audiences trust.",
    body:
      "We develop long-form interviews, spotlight series, and insight packages that position your brand alongside credible voices. Every story is researched, structured for clarity, and designed to earn attention without feeling promotional. Ideal for category leadership, launches, and reputation-building moments.",
  },
  {
    title: "Content & Newsletter Amplification",
    summary:
      "Turn your expertise into a consistent publishing rhythm with premium distribution.",
    body:
      "From narrative strategy to production support, we help brands translate complex ideas into accessible formats—newsletters, essays, and multimedia snippets that match your tone. We focus on consistency, readability, and measurable engagement with a curated professional audience.",
  },
  {
    title: "Event & Media Partnerships",
    summary:
      "Experiences that connect storytelling with real-world presence and follow-through.",
    body:
      "We partner on panels, community gatherings, and cross-border initiatives that blend media coverage with on-the-ground connection. Our approach pairs clear programming, elevated production values, and post-event content so momentum continues after the room clears.",
  },
];

export const benefitCards: BenefitCard[] = [
  {
    title: "Elevated Brand Presence",
    body:
      "Show up with editorial polish: refined visuals, credible sourcing, and messaging that reads intentional—not rushed.",
  },
  {
    title: "Strategic Thought Leadership",
    body:
      "Move beyond buzzwords with frameworks, interviews, and narratives grounded in practitioner experience.",
  },
  {
    title: "Access to a Curated Audience",
    body:
      "Reach professionals and decision-makers who actively seek insight—not passive traffic.",
  },
  {
    title: "High-Value Connections & Collaboration",
    body:
      "Open doors to partnerships, community moments, and cross-industry conversations that compound over time.",
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: "California Leadership Salons",
    region: "California",
    description:
      "Intimate conversations with founders and executives—recorded for podcast distribution and editorial follow-ups.",
    tags: ["leadership events", "media partnerships"],
  },
  {
    title: "Cross-Border Storytelling Series",
    region: "Mexico",
    description:
      "A bilingual-friendly content initiative spotlighting innovation, community impact, and shared economic opportunity.",
    tags: ["cross-border initiatives", "educational storytelling"],
  },
  {
    title: "Community Collaborations Hub",
    region: "Community",
    description:
      "Curated gatherings that pair mentorship moments with live Q&A and published takeaways.",
    tags: ["community collaborations", "mentorship"],
  },
  {
    title: "Educational Media Lab",
    region: "Education",
    description:
      "Short-form explainers and long-form essays that translate industry complexity into practical insight.",
    tags: ["educational storytelling", "media partnerships"],
  },
];

export const aboutNarrative: {
  founder: EditorialIntroBlock;
  companyFoundation: EditorialIntroBlock;
} = {
  founder: {
    eyebrow: "About me",
    title: "I build media where expert knowledge can land without the noise",
    description:
      "I started Daily Network Insights to close the gap between what experts know and what readers can use—without watering down the depth. My work is shaped by ongoing conversations with founders, operators, educators, and leaders who operate in the real world and care about craft. I turn those signal-rich exchanges into long-form insight, audio, and formats people can return to when they are ready to act.",
  },
  companyFoundation: {
    eyebrow: "The company’s foundation",
    title: "Editorial first—grounded in research, interviews, and lived experience",
    description:
      "Daily Network Insights exists to shorten the distance between complex industry information and clear, intentional understanding. We are a media platform by design: not a job board, a school outreach program, or a generic career site. The foundation is a consistent publishing practice—credible sources, careful editing, and community-centered programming—so your audience can stay informed, confident, and connected as the landscape changes.",
  },
};

export const founder = {
  name: "Founder & Editorial Lead",
  role: "Daily Network Insights",
  bio: [
    "I started Daily Network Insights to close the gap between expert knowledge and everyday understanding—without sacrificing depth. Our work is built on conversations with people who operate in the real world: founders, operators, educators, and leaders who care about craft.",
    "If you’re building something worth explaining—or you want your brand to show up with clarity and credibility—I’d love to explore what we can create together.",
  ],
  portraitSrc:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  portraitAlt: "Portrait of the founder in professional attire",
};

export const galleryItems = [
  {
    title: "Executive interview",
    caption: "Long-form conversation, studio capture",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Interview setup with lights",
  },
  {
    title: "Community gathering",
    caption: "Networking + curated programming",
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-027aef7f9f6b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Audience at an event",
  },
  {
    title: "On stage",
    caption: "Keynote moments and panels",
    imageSrc:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Speaker on stage",
  },
  {
    title: "Collaboration",
    caption: "Partners building together",
    imageSrc:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team collaboration",
  },
  {
    title: "Studio session",
    caption: "Podcast production day",
    imageSrc:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Podcast microphones",
  },
  {
    title: "Field moments",
    caption: "Community engagement on location",
    imageSrc:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "People talking outdoors",
  },
] as const;
