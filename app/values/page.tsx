import type { Metadata } from "next";
import { HomeAtOurCore } from "@/components/home/HomeAtOurCore";
import { HomeHeart } from "@/components/home/HomeHeart";
import { HomeValues } from "@/components/home/HomeValues";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Values",
  description:
    "Substance, mission, and purpose at Daily Network Insights—how we work and what we stand for.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Values"
        title="The principles behind our work"
        description="Clear standards, a grounded mission, and a purpose you’ll feel in how we show up in media, events, and community."
      />
      <HomeAtOurCore />
      <HomeValues />
      <HomeHeart />
    </>
  );
}
