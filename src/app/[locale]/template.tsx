'use client';

import { useEffect } from 'react';

export default function Template({ children }: PropsWithChildren) {
  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main className='relative min-h-screen'>{children}</main>;
}
