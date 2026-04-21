import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/content";

export function HomeGallery() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Media gallery & community moments"
          description="Interviews, events, networking, speaking, collaborations, and community engagement—captured with editorial restraint."
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((g) => (
            <figure
              key={g.title}
              className="gallery-figure mb-5 break-inside-avoid"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={g.imageSrc}
                  alt={g.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-stone-900/10 bg-white/40 p-4 backdrop-blur-sm">
                <p className="font-serif text-lg text-navy">{g.title}</p>
                <p className="mt-1 text-xs text-stone-600">{g.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
