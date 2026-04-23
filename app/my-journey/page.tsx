import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { myJourneyPage } from "@/lib/myJourneyContent";

const SHARK_MARK = "Shark Tank" as const;

function JourneyParagraph({ text, emphasizeShark }: { text: string; emphasizeShark: boolean }) {
  if (!emphasizeShark) {
    return <p className="leading-relaxed text-stone-600">{text}</p>;
  }
  const i = text.indexOf(SHARK_MARK);
  if (i === -1) {
    return <p className="leading-relaxed text-stone-600">{text}</p>;
  }
  return (
    <p className="leading-relaxed text-stone-600">
      {text.slice(0, i)}
      <em>{SHARK_MARK}</em>
      {text.slice(i + SHARK_MARK.length)}
    </p>
  );
}

export const metadata: Metadata = {
  title: "My journey",
  description:
    "From growing up in a Hispanic household to hospitality, marketing, and founding Daily Network Insights, and how mentorship and community shaped the path.",
};

export default function MyJourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Founder"
        title={myJourneyPage.title}
        as="h1"
        titleId="my-journey-heading"
      />
      <Container className="reveal-on-scroll border-b border-stone-900/10 pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:mx-0">
            <div className="editorial-frame">
              <div className="editorial-frame__inner relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <Image
                  src={myJourneyPage.imageSrc}
                  alt={myJourneyPage.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
          <article
            className="min-w-0 space-y-5 text-base sm:text-[1.05rem]"
            aria-labelledby="my-journey-heading"
          >
            {myJourneyPage.paragraphs.map((paragraph, index) => (
              <JourneyParagraph
                key={index}
                text={paragraph}
                emphasizeShark={index === myJourneyPage.paragraphWithSharkTankIndex}
              />
            ))}
          </article>
        </div>
      </Container>
    </>
  );
}
