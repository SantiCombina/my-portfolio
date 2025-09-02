import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import configPromise from '@/payload.config';

const CACHE_TAGS = {
  SKILLS: 'skills',
} as const;

// Cache the skills for 5 minutes
const getCachedSkills = unstable_cache(
  async () => {
    const payload = await getPayload({
      config: configPromise,
    });

    const skills = await payload.find({
      collection: 'skills',
      sort: 'order',
      limit: 100,
      depth: 2,
    });

    return skills.docs;
  },
  ['skills-list'],
  {
    revalidate: 300, // 5 minutes
    tags: [CACHE_TAGS.SKILLS],
  },
);

export async function getSkills() {
  const data = await getCachedSkills();
  return data;
}

export async function getSkillById(id: string) {
  const payload = await getPayload({
    config: configPromise,
  });

  const skill = await payload.findByID({
    collection: 'skills',
    id,
  });

  return skill;
}
