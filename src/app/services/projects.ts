import { unstable_cache } from 'next/cache';

import { getPayloadClient } from '@/lib/payload';

const CACHE_TAGS = {
  PROJECTS: 'projects',
} as const;

const getCachedProjects = unstable_cache(
  async () => {
    const payload = await getPayloadClient();

    const projects = await payload.find({
      collection: 'projects',
      sort: 'order',
      limit: 100,
      depth: 2,
    });

    return projects.docs;
  },
  ['projects-list'],
  {
    revalidate: 300,
    tags: [CACHE_TAGS.PROJECTS],
  },
);

export async function getProjects() {
  const data = await getCachedProjects();
  return data;
}

export async function getProjectById(id: string) {
  const payload = await getPayloadClient();

  const project = await payload.findByID({
    collection: 'projects',
    id: id,
    depth: 2,
  });

  return project;
}
