/*
 * Tailwind Screens Settings
 */

import { settings } from './settings';

const remToPx = (rem: number) => {
  return `${rem * 16}px`;
};

export const screens = {
  '2xs': remToPx(settings.screensRem['2xs']),
  xs: remToPx(settings.screensRem.xs),
  sm: remToPx(settings.screensRem.sm),
  md: remToPx(settings.screensRem.md),
  lg: remToPx(settings.screensRem.lg),
  xl: remToPx(settings.screensRem.xl),
  '2xl': remToPx(settings.screensRem['2xl']),
};
