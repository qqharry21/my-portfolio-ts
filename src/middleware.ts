import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './lib/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix: 'never',
  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-TW|en-US)/:path*'],
};
