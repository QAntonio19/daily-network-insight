export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavSubItem[];
}

/** Sección de home usada para el pill del header (scroll). */
export type HomeNavKey = "top" | "about-us" | null;

/** Three-line editorial block: small label, headline, body (reused e.g. on About). */
export interface EditorialIntroBlock {
  eyebrow: string;
  title: string;
  description: string;
}

export type InsightCategory =
  | "Our Story"
  | "Local Community Insights"
  | "Industry Insights"
  | "Economic Insights"
  | "Educational";

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  category: InsightCategory[];
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
