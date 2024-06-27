import { AboutSection } from './_components/about-section';
import { ExperienceSection } from './_components/experience-section';
import { HeroBanner } from './_components/hero-banner';
import { HomeSideProjectList } from './_components/home-side-project-list';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ExperienceSection />
      <HomeSideProjectList />
    </>
  );
}
