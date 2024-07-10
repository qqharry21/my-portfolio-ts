import { ThemeChanger } from '@/components/theme-changer';

import { HeroBanner } from './_components/hero-banner';
import { HomeAboutSection } from './_components/home-about-section';
import { HomeContactSection } from './_components/home-contact-section';
import { HomeExperiences } from './_components/home-experiences';
import { HomeSideProjects } from './_components/home-side-projects';

export default function Home() {
  return (
    <ThemeChanger theme='dark'>
      <HeroBanner />
      <HomeAboutSection />
      <HomeExperiences />
      <HomeSideProjects />
      <HomeContactSection />
    </ThemeChanger>
  );
}
