import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import configPromise from '@/payload.config';

const CACHE_TAGS = {
  MEDIA: 'media',
} as const;

const getCachedMedia = unstable_cache(
  async () => {
    const payload = await getPayload({
      config: configPromise,
    });

    const media = await payload.find({
      collection: 'media',
      limit: 100,
      depth: 2,
    });

    return media.docs;
  },
  ['media-list'],
  {
    revalidate: 300,
    tags: [CACHE_TAGS.MEDIA],
  },
);

export async function getMedia() {
  const data = await getCachedMedia();
  return data;
}

export async function getMediaById(id: string) {
  const payload = await getPayload({
    config: configPromise,
  });

  const media = await payload.findByID({
    collection: 'media',
    id,
  });

  return media;
}
