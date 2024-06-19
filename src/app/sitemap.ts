import type { MetadataRoute } from 'next';

import { headers } from 'next/headers';

// import { getPostsForSite } from '@/lib/fetchers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();

  const domain = headersList
    .get('host')
    ?.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_BASE_URL}`);

  // const posts = await getPostsForSite(domain);

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
    },
    // ...posts.map(({ slug }) => ({
    //   url: `https://${domain}/${slug}`,
    //   lastModified: new Date(),
    // })),
  ];
}
