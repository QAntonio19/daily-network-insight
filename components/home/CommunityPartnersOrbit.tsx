import Image from "next/image";
import {
  communityCenterLogo,
  communityPartnerLogos,
} from "@/lib/communityPartners";

const N = communityPartnerLogos.length;

/**
 * Vitrina con logos de socios en cuadrados; orbitan alrededor del logo DNI (solo CSS).
 */
export function CommunityPartnersOrbit() {
  return (
    <div className="community-orbit-root relative w-full min-w-0 max-w-full shrink-0">
      <div
        className="community-orbit-size-fallback relative aspect-square w-full max-w-full [--orbit-r:clamp(8.5rem,40cqi,15rem)]"
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-stone-300"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="currentColor"
            strokeWidth="0.55"
            opacity="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="72"
            stroke="currentColor"
            strokeWidth="0.48"
            opacity="0.4"
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            stroke="currentColor"
            strokeWidth="0.42"
            opacity="0.3"
          />
        </svg>
        {/* Indicadores decorativos (ref. “orbital”) */}
        <span
          className="absolute right-[4%] top-[8%] h-2 w-2 rounded-full bg-amber-400/90"
          aria-hidden
        />
        <span
          className="absolute bottom-[6%] left-[6%] h-2 w-2 rounded-full bg-emerald-500/80"
          aria-hidden
        />
        <span
          className="absolute right-[10%] bottom-[10%] h-2 w-2 rounded-full bg-rose-500/80"
          aria-hidden
        />

        <ul
          className="absolute inset-0 m-0 list-none p-0"
          aria-label="Rotating community partner logos"
        >
          {communityPartnerLogos.map((item, i) => {
            const deg = -90 + (360 / N) * i;
            // Negative delay offsets each card to its starting angle.
            // Delay = -(i/N) * duration so card i begins at deg on the orbit.
            const delayS = -((i / N) * 55).toFixed(3);
            return (
              <li
                key={item.src}
                className="community-orbit-card absolute left-1/2 top-1/2 h-0 w-0"
                style={{
                  // Fallback static position used when animation is disabled
                  // (prefers-reduced-motion). The animation overrides this.
                  transform: `rotate(${deg}deg) translateY(calc(-1 * var(--orbit-r))) rotate(${-deg}deg)`,
                  ['--orbit-card-delay' as string]: `${delayS}s`,
                }}
              >
                <div
                  className="absolute aspect-square size-[7.75rem] shrink-0 -left-[3.875rem] -top-[3.875rem] sm:size-[8.5rem] sm:-left-[4.25rem] sm:-top-[4.25rem] md:size-[9.25rem] md:-left-[4.625rem] md:-top-[4.625rem]"
                  title={item.alt}
                >
                  <div
                    className="relative h-full w-full min-h-0 min-w-0 overflow-hidden rounded-2xl border border-stone-900/8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-2.5 sm:p-3"
                      sizes="(min-width: 768px) 160px, (min-width: 640px) 140px, 124px"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div
          className="absolute left-1/2 top-1/2 z-10 size-[9.5rem] -translate-x-1/2 -translate-y-1/2 sm:size-[11.5rem] lg:size-[12.5rem]"
          aria-hidden
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-2xl border border-stone-900/10 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          >
            <Image
              src={communityCenterLogo.src}
              alt={communityCenterLogo.alt}
              fill
              className="object-contain p-3.5 sm:p-4"
              sizes="(min-width: 1024px) 200px, (min-width: 640px) 184px, 152px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
