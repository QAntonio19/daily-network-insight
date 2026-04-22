import { HomeAboutUs } from "@/components/home/HomeAboutUs";
import { HomeContentPillars } from "@/components/home/HomeContentPillars";
import { HomeAmbassadors } from "@/components/home/HomeAmbassadors";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHashScroll } from "@/components/home/HomeHashScroll";
import { HomeValuesSection } from "@/components/home/HomeValuesSection";

export default function HomePage() {
  return (
    <>
      <HomeHashScroll />
      <HomeHero />
      <HomeContentPillars />
      <HomeValuesSection />
      <HomeGallery />
      <HomeAboutUs />
      <HomeAmbassadors />
      <HomeFaq />
    </>
  );
}
