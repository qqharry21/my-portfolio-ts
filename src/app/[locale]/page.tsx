import { HeroBanner } from '@/components/hero-banner';

import { Link } from '@/lib/navigation';

export default function Home() {
  return (
    <>
      <HeroBanner />

      <div className='h-screen'>
        <Link href='/side-projects'>Side projects</Link>
      </div>
    </>
  );
}
