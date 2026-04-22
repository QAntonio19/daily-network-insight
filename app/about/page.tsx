import type { Metadata } from "next";
import { AboutToHomeHash } from "./AboutToHomeHash";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Daily Network Insights is a premium media platform connecting audiences with research-based, industry-informed insight.",
};

export default function AboutPage() {
  return <AboutToHomeHash />;
}
