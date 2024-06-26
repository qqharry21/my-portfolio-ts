import { Link } from '@/lib/navigation';

import { AboutBanner } from './_components/about-banner';
import { HeroBanner } from './_components/hero-banner';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutBanner />

      <div className='h-screen'>
        <Link href='/side-projects'>Side projects</Link>
      </div>
    </>
  );
}
