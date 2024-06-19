import FlipText from '@/components/flip-text';

import { Link } from '@/lib/navigation';

export default function Home() {
  return (
    <div>
      <div className='h-screen'>
        <FlipText word='src/app/page.tsx' />
      </div>
      <Link href='/side-projects'>Side projects</Link>
    </div>
  );
}
