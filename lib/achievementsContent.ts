/**
 * Logros y hitos (timeline), agrupados por año.
 */
export const achievementsGroups: AchievementGroup[] = [
  {
    year: "2024",
    tagline: "Origin of the initiative",
    items: [
      {
        id: "feb-2024-vision",
        period: "February 2024",
        title: "The spark of a vision",
        imageSrc: "/images/Screenshot 2026-04-23 120725.png",
        imageAlt: "Meeting with industry leaders including Daniel Lubetzky at a professional event",
        paragraphs: [
          "This moment marked the beginning of the entrepreneurial journey — an early experience that sparked the vision behind Daily Network Insights. Through meaningful conversations and exposure to industry leaders like Daniel Lubetzky, it became clear how powerful ideas, connection, and insight can be in shaping new opportunities.",
        ],
      },
      {
        id: "mar-2024-first-spark",
        period: "May 2024",
        title: "First sparks of innovation",
        imageSrc: "/images/first-spark.jpg",
        imageAlt: "Early professional gathering where the first ideas for Daily Network Insights took shape",
        paragraphs: [
          "This moment represents one of the first sparks of innovation that led to the creation of Daily Network Insights. Engaging in early conversations and sharing ideas in professional spaces helped shape the vision of building something centered around insight, connection, and real-world impact.",
        ],
      },
      {
        id: "mar-2024-first-coe",
        period: "July 2024",
        title: "First official collaboration",
        imageSrc: "/images/first-coe.jpg",
        imageAlt: "Daily Network Insights' first official collaboration with a local business at their event",
        paragraphs: [
          "This marked Daily Network Insights' first official collaboration with a local business — supporting their event and helping bring visibility and energy to the experience. As a new name in the space, it was an opportunity to introduce DNI, build momentum, and begin establishing our presence within the community.",
        ],
      },
    ],
  },
  {
    year: "2025",
    tagline: "Implementation of the strategy.",
    items: [
      {
        id: "apr-2024-bmo",
        period: "January 2025",
        title: "Banking & community mixer with BMO",
        imageSrc: "/images/photo_2026-04-23_03-02-27.jpg",
        imageAlt: "Community business mixer in partnership with GeeGoals and BMO",
        paragraphs: [
          "This collaboration brought together the banking and consumer community through a local business mixer in partnership with GeeGoals and BMO. It marked another step in strengthening connections, supporting local initiatives, and creating spaces where professionals and organizations could engage, collaborate, and grow.",
        ],
      },
      {
        id: "apr-2024-letip",
        period: "April 2025",
        title: "Partnership with LeTip Anaheim",
        imageSrc: "/images/photo_2026-04-23_02-58-22.jpg",
        imageAlt: "Networking event with LeTip Anaheim community members",
        paragraphs: [
          "Showing support for local networking groups, Daily Network Insights partnered with LeTip Anaheim to help bring energy and engagement to the community. This moment reflects our commitment to building connections, increasing visibility, and contributing to the growth of local professionals and businesses.",
        ],
      },
      {
        id: "may-2024-ega",
        period: "May 2025",
        title: "GeeGoals & EGA Credit Union collaboration",
        imageSrc: "/images/photo_2026-04-20_00-56-15.jpg",
        imageAlt: "Collaboration event between GeeGoals and EGA Community Credit Union with over 15 vendors",
        paragraphs: [
          "Continuing to build strong relationships within the finance and business community, Daily Network Insights helped foster a collaboration between GeeGoals and EGA Community Credit Union. This event brought together over 15 vendors, creating a space for connection, visibility, and meaningful engagement among community members.",
        ],
      },
      {
        id: "jun-2025-irvine",
        period: "June 2025",
        title: "Speaking at the City of Irvine Economic Forum",
        imageSrc: "/images/photo_2026-04-23_03-00-28.jpg",
        imageAlt: "Speaker at the City of Irvine Economic Forum podium",
        objectPosition: "top",
        paragraphs: [
          "Daily Network Insights was invited to speak at the City of Irvine Economic Forum, contributing to conversations focused on supporting local businesses and navigating growth opportunities. This moment reflects our commitment to sharing insight, engaging with the community, and participating in discussions that drive real impact.",
        ],
      },
      {
        id: "jun-2025-letip",
        period: "June 2025",
        title: "Reconnecting with LeTip Anaheim",
        imageSrc: "/images/photo_2026-04-20_00-55-26.jpg",
        imageAlt: "Networking event with LeTip Anaheim members",
        paragraphs: [
          "Reconnecting with LeTip Anaheim, Daily Network Insights continued to support the growth of a strong networking community — helping attract local businesses and build a more engaged and collaborative environment for professionals.",
        ],
      },
      {
        id: "aug-2025-aabc",
        period: "August 2025",
        title: "Supporting the AABC Chamber",
        imageSrc: "/images/photo_2026-04-20_01-03-15.jpg",
        imageAlt: "Daily Network Insights supporting the AABC Chamber community event",
        paragraphs: [
          "Daily Network Insights showed support for the AABC Chamber, contributing to efforts that promote and strengthen the local community of entrepreneurs. This moment reflects our commitment to supporting organizations that create opportunities for growth, collaboration, and business development.",
        ],
      },
      {
        id: "sep-2025-miracle-noodle",
        period: "September 2025",
        title: "Paramount Studios & Concern Foundation",
        imageSrc: "/images/photo_2026-04-23_03-04-37.jpg",
        imageAlt: "Community initiative at Paramount Studios in partnership with Miracle Noodle",
        paragraphs: [
          "Daily Network Insights partnered with Miracle Noodle to support a community initiative at Paramount Studios, helping raise awareness for children's cancer research through the Concern Foundation. This moment reflects our commitment to supporting meaningful causes while collaborating with brands that make a positive impact.",
        ],
      },
      {
        id: "nov-2025-expo-west",
        period: "November 2025",
        title: "Attending Expo West",
        imageSrc: "/images/expanding-expo.png",
        imageAlt: "Daily Network Insights at Expo West connecting with startups and industry leaders",
        paragraphs: [
          "Daily Network Insights attended Expo West, connecting with startups and industry leaders while expanding its presence within a broader business network. This moment reflects our focus on building relationships, capturing insight, and creating visibility through meaningful industry engagement.",
        ],
      },
    ],
  },
];

export type AchievementGroup = {
  year: string;
  tagline: string;
  items: AchievementItem[];
};

export type AchievementItem = {
  id: string;
  period: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  paragraphs: readonly string[];
};
