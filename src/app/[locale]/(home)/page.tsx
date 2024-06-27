import { HeroBanner } from './_components/hero-banner';
import { HomeAboutSection } from './_components/home-about-section';
import { HomeExperiences } from './_components/home-experiences';
import { HomeSideProjects } from './_components/home-side-projects';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeAboutSection />
      <HomeExperiences />
      <HomeSideProjects />
    </>
  );
}
