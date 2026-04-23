import type { Metadata } from "next";
import { TimelineSection } from "@/components/insights/TimelineSection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Key moments in our journey of building community, sharing insights, and creating impact.",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Our Timeline"
        description="Key moments in our journey of building community, sharing insights, and creating impact."
        align="center"
      />
      <TimelineSection />
    </>
  );
}
