'use client';

import React from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { Link } from '@/lib/navigation';

export const NavigationLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ href, ...rest }, ref) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      ref={ref}
      {...rest}
    />
  );
});
