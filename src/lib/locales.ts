import type { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'zh-TW';

export const locales = [defaultLocale, 'en-US'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix = {
  mode: 'never',
} satisfies LocalePrefix<typeof locales>;

export const pathnames = {} satisfies Pathnames<typeof locales>;
