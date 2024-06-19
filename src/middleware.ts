import type { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import type { Locale } from './lib/locales';
import { defaultLocale, localePrefix, locales } from './lib/locales';

export default async function middleware(request: NextRequest) {
  const customDefaultLocale =
    (request.headers.get('x-your-custom-locale') as Locale) ?? defaultLocale;

  const handleI18nRouting = createMiddleware({
    locales,
    localePrefix,
    localeDetection: true,
    defaultLocale: customDefaultLocale,
  });
  const response = handleI18nRouting(request);

  response.headers.set('x-your-custom-locale', customDefaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  // Skip all paths that should not be internationalized.
  matcher: ['/', '/(zh-TW|en)/:path*'],
  // matcher: ['/((?!api|_next/static|_next/image|assets|videos).*)'],
};
