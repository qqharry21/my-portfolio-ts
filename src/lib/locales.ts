import type { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'en';

export const locales = [defaultLocale, 'zh-TW'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix = {
  mode: 'always',
} satisfies LocalePrefix<typeof locales>;

export const pathnames = {} satisfies Pathnames<typeof locales>;
