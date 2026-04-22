import { HomeAtOurCore } from "@/components/home/HomeAtOurCore";
import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeContentPillars } from "@/components/home/HomeContentPillars";
import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHeart } from "@/components/home/HomeHeart";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLatestInsights } from "@/components/home/HomeLatestInsights";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeValues } from "@/components/home/HomeValues";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAtOurCore />
      <HomeValues />
      <HomeHeart />
      <HomeContentPillars />
      <HomeServices />
      <HomeLatestInsights />
      <HomeProjects />
      <HomeFounder />
      <HomeGallery />
      <HomeClosing />
    </>
  );
}
