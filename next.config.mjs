import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {},
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 30 * 24 * 60 * 60,
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wits.com',
        pathname: '/static/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mitac.com.tw',
        pathname: '/wp-content/uploads/2021/12/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
