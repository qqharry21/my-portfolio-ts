'use client';

import React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

export const BlurImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithRef<typeof Image>
>(({ src, alt, className, ...props }, ref) => {
  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      className={cn('blur-sm transition-all duration-500 ease-in-out', className)}
      onLoad={(e) => {
        e.currentTarget.classList.remove('blur-sm');
        props.onLoad?.(e);
      }}
      {...props}
    />
  );
});
