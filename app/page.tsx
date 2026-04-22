import { HomeAboutUs } from "@/components/home/HomeAboutUs";
import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeContentPillars } from "@/components/home/HomeContentPillars";
import { HomeAmbassadors } from "@/components/home/HomeAmbassadors";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeValuesSection } from "@/components/home/HomeValuesSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutUs />
      <HomeAmbassadors />
      <HomeContentPillars />
      <HomeValuesSection />
      <HomeProjects />
      <HomeGallery />
      <HomeFaq />
      <HomeClosing />
    </>
  );
}
