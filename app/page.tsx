import { HomeAtOurCore } from "@/components/home/HomeAtOurCore";
import { HomeBenefits } from "@/components/home/HomeBenefits";
import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeContentPillars } from "@/components/home/HomeContentPillars";
import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHeart } from "@/components/home/HomeHeart";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeJoinMission } from "@/components/home/HomeJoinMission";
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
      <HomeBenefits />
      <HomeLatestInsights />
      <HomeProjects />
      <HomeJoinMission />
      <HomeFounder />
      <HomeGallery />
      <HomeClosing />
    </>
  );
}
