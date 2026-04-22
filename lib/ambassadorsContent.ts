export interface AmbassadorSocial {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface Ambassador {
  id: string;
  department: string;
  name: string;
  email: string;
  phone: string;
  imageSrc: string;
  imageAlt: string;
  social: AmbassadorSocial;
}

export const ambassadorsIntro = {
  eyebrow: "Ambassadors",
  title: "Meet the people behind the mission",
  description:
    "Our ambassadors extend Daily Network’s mission into the field offering guidance, sharing professional experience, and helping individuals connect with the ideas, people, and opportunities that support their path forward.",
} as const;

export const ambassadors: Ambassador[] = [
  {
    id: "farah-kanchar",
    department: "Organization & Diversity",
    name: "Farah Kanchar",
    email: "info@aabchamber.org",
    phone: "949-287-2465",
    imageSrc: "/images/IMG_3358-Picsart-BackgroundRemover.JPG",
    imageAlt: "Farah Kanchar, professional portrait",
    social: {
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "yosmal-gutierrez",
    department: "Banking & Lending",
    name: "Yosmal Gutierrez",
    email: "yosmel@geegoals.com",
    phone: "949-910-5559",
    imageSrc: "/images/image_2025-08-30_084133287.png",
    imageAlt: "Yosmal Gutierrez, professional portrait",
    social: {
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];
