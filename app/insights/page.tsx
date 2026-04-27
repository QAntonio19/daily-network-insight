import type { Metadata } from "next";
import { EditorialInsightsSection } from "@/components/insights/EditorialInsightsSection";
import { readPosts } from "@/lib/postsStore";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research informed perspectives: filter by category or explore the featured story and latest pieces from the editorial desk.",
};

export default async function InsightsPage() {
  const posts = await readPosts();
  return (
    <>
      <h1 className="sr-only">Insights</h1>
      <EditorialInsightsSection posts={posts} />
    </>
  );
}
