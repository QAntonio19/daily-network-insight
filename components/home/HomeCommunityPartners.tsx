import Link from "next/link";
import { CommunityPartnersOrbit } from "@/components/home/CommunityPartnersOrbit";
import { CommunityPartnersQuoteCarousel } from "@/components/home/CommunityPartnersQuoteCarousel";
import { communityPartnersCopy } from "@/lib/communityPartners";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/**
 * Socios y comunidad: órbita con logo DNI (izquierda) + copy (derecha en lg).
 */
export function HomeCommunityPartners() {
  return (
    <section
      className="border-b border-stone-900/10 bg-ivory"
      aria-labelledby="community-partners-heading"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <RevealOnScroll className="grid min-w-0 grid-cols-1 items-center gap-12 overflow-x-clip lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-0 xl:gap-x-20 2xl:gap-x-24">
          {/*
            container-type: el radio de órbita (cqi) escala a la columna y evita
            que los satélites se metan en el texto, manteniendo el tamaño de las tarjetas.
          */}
          <div className="reveal-left order-2 flex w-full min-w-0 max-w-full flex-col [container-type:inline-size] max-lg:mx-auto lg:order-1 lg:justify-end lg:pr-2 xl:pr-6">
            <div className="flex w-full justify-center lg:justify-end 2xl:justify-center">
              <CommunityPartnersOrbit />
            </div>
          </div>
          <header className="reveal-right order-1 min-w-0 text-center max-lg:mx-auto max-lg:max-w-xl lg:order-2 lg:pl-2 lg:text-left xl:pl-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              {communityPartnersCopy.eyebrow}
            </p>
            <h2
              id="community-partners-heading"
              className="mt-3 max-w-full break-words text-balance font-sans text-3xl font-normal leading-tight text-navy sm:text-4xl"
            >
              {communityPartnersCopy.title}
            </h2>
            <CommunityPartnersQuoteCarousel />
            <Link
              href={communityPartnersCopy.ctaHref}
              className="btn-primary-shine mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft"
            >
              {communityPartnersCopy.ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </header>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
