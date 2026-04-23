/**
 * Logros y hitos (home, sección Achievements), orden cronológico.
 */
export const achievementsItems = [
  {
    id: "aug-2025-youtube",
    period: "August 2025",
    title: "First YouTube interview",
    imageSrc: "/images/yt-interview.png",
    imageAlt:
      "YouTube interview with a business guest and host in a professional studio setting",
    paragraphs: [
      "Daily Network Insights launched its first YouTube interview series, spotlighting real business owners and entrepreneurs from within our local community.",
      "Through open conversation, we captured their journeys, challenges, lessons learned, and the passion behind their work. This series was created to inspire students and young professionals by providing authentic insight into what it takes to build and sustain a business.",
      "By sharing real stories from real leaders, we aim to encourage confidence, spark creativity, and remind the next generation that success begins with taking the first step and learning from those who came before them.",
    ],
  },
  {
    id: "sep-2025-aabc",
    period: "September 2025",
    title: "Sponsor of AABC Gala",
    imageSrc: "/images/AABC_Gala-39.jpg",
    imageAlt:
      "Group photo at the Arab American Business Chamber Gala, formal event",
    paragraphs: [
      "Daily Network Insights proudly served as a sponsor for the Arab American Business Chamber (AABC) Gala, supporting an evening dedicated to celebrating entrepreneurship, cultural leadership, and business growth in the community.",
      "Our involvement helped bring together business owners, community leaders, and emerging professionals for a night of networking, recognition, and collaboration.",
      "This sponsorship reflects our ongoing commitment to empowering diverse business communities, building meaningful partnerships, and expanding opportunities for the next generation of entrepreneurs.",
    ],
  },
  {
    id: "oct-2025-foothill",
    period: "October 2025",
    title: "Press release on newspaper",
    imageSrc: "/images/newspaper.png",
    imageAlt:
      "Team holding the Foothill Sentry newspaper featuring Daily Network Insights",
    paragraphs: [
      "Daily Network Insights celebrates one year of growth, empowering students, young professionals, and the local community through meaningful connections, community engagement, and access to real-world insights.",
      "Our impact was recognized in the Foothill Sentry, helping expand our visibility and strengthen relationships with local leaders, organizations, and business communities. This recognition reflects the real moments we’ve created bringing people together, sharing ideas, and building connections that move individuals forward.",
      "This milestone reflects the dedication of our community and our ongoing commitment to inspiring, supporting, and preparing the next generation of entrepreneurs and leaders.",
    ],
  },
  {
    id: "nov-2025-restaurant-hub",
    period: "November 2025",
    title: "Speaking at The Restaurant Hub Synergy Exchange event",
    imageSrc: "/images/restaurant-speak.png",
    imageAlt:
      "The Restaurant Hub Synergy Exchange at Moc Kitchen Pho & Grill, group photo",
    paragraphs: [
      "Daily Network Insights was invited to speak at The Restaurant Hub Synergy Exchange event hosted at Moc Kitchen Pho & Grill. This 2-hour networking event brought together local business owners focused on improving cash flow, customer relationships, and community impact.",
      "We shared our mission and highlighted opportunities for collaboration, mentorship, and supporting the next generation of entrepreneurs. Thank you to GeeGoals for the invitation and partnership in building meaningful business connections.",
    ],
  },
] as const;

export type AchievementItem = (typeof achievementsItems)[number];
