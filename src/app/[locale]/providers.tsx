'use client';

import { ThemeProvider } from 'next-themes';

import { MotionProvider } from '@/components/motion-provider';
import { QueryProvider } from '@/components/query-provider';
import { SmoothScroll } from '@/components/smooth-scroll';

import { useI18nZodErrors } from '@/hooks/use-i18n-zod-errors';

export const Providers = ({ children }: PropsWithChildren) => {
  useI18nZodErrors();

  return (
    <QueryProvider>
      <ThemeProvider
        attribute='class'
        themes={['light', 'dark']}
      >
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
