import { Noto_Sans_TC, Space_Grotesk } from 'next/font/google';

export const notoSans = Noto_Sans_TC({
  variable: '--font-notoSans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'optional',
  preload: true,
  adjustFontFallback: false,
});

export const spaceGrotesk = Space_Grotesk({
  variable: '--font-spaceGrotesk',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'optional',
  preload: true,
  adjustFontFallback: false,
});
