import type { EditorialIntroBlock } from "@/lib/types";

/**
 * Reuses the PageHeader-style hierarchy: small uppercase label, serif headline, muted body.
 * For in-page sections (h2), not the global page hero.
 */
export function EditorialSectionIntro({
  eyebrow,
  title,
  description,
}: EditorialIntroBlock) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{description}</p>
    </div>
  );
}
