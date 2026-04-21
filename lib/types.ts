export interface NavItem {
  label: string;
  href: string;
}

export type InsightCategory =
  | "Leadership"
  | "Business"
  | "Education"
  | "Media"
  | "Community"
  | "Industry Trends";

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ProjectCard {
  title: string;
  region: string;
  description: string;
  tags: string[];
}

export interface GalleryItem {
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceCard {
  title: string;
  summary: string;
  body: string;
}

export interface BenefitCard {
  title: string;
  body: string;
}
