import type { Metadata } from "next";
import { EditorialInsightsSection } from "@/components/insights/EditorialInsightsSection";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research informed perspectives: filter by category or explore the featured story and latest pieces from the editorial desk.",
};

export default function InsightsPage() {
  return (
    <>
      <h1 className="sr-only">Insights</h1>
      <EditorialInsightsSection />
    </>
  );
}
