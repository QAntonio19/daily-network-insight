/**
 * Sección de socios y organizaciones (logos) en home.
 * Orden fijo: coincide con el diseño de referencia.
 */
export const communityPartnersCopy = {
  eyebrow: "Our Community",
  title: "The wonderful members of our community",
  ctaLabel: "Contact us",
  ctaHref: "/contact" as const,
} as const;

/** Frases del carrusel (columna de texto, apartado Community). */
export const communityPartnersCarouselSlides = [
  "Daily Network is truly fantastic! Their constant encouragement, enthusiastic support, and ability to spark new ideas and share insights about local businesses create endless opportunities for growth and connection in the community.",
  "With a mission to uplift and empower, Daily Network brings people together by sparking conversations, supporting local businesses, and creating opportunities that truly strengthen our community.",
  "Our amazing community members are absolutely thrilled by the incredible impact Daily Network has in supporting young entrepreneurs! Their efforts are truly inspiring and commendable!",
] as const;

/** Logo central en la órbita (cuadrado). */
export const communityCenterLogo = {
  src: "/images/logo-dni.png" as const,
  alt: "Daily Network Insights",
} as const;

export const communityPartnerLogos = [
  {
    src: "/images/mirable-noodle.png" as const,
    alt: "Miracle Noodle",
  },
  {
    src: "/images/aabc-logo.png" as const,
    alt: "Arab American Business Chamber (AABC)",
  },
  {
    src: "/images/octa-logo.png" as const,
    alt: "Orange County Transportation Authority (OCTA)",
  },
  {
    src: "/images/letip-logo.png" as const,
    alt: "LeTip Anaheim",
  },
  {
    src: "/images/free-life.png" as const,
    alt: "Free Life Community Church",
  },
] as const;
