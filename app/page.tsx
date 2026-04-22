import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeContentPillars } from "@/components/home/HomeContentPillars";
import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjects } from "@/components/home/HomeProjects";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeContentPillars />
      <HomeProjects />
      <HomeFounder />
      <HomeGallery />
      <HomeClosing />
    </>
  );
}
