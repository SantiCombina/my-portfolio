import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://santicombina.vercel.app',
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
