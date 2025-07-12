'use server';

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
  try {
    const data = await getCachedSkills();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error fetching skills:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch skills',
      data: [],
    };
  }
}

export async function getSkillById(id: string) {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const skill = await payload.findByID({
      collection: 'skills',
      id,
    });

    return {
      success: true,
      data: skill,
    };
  } catch (error) {
    console.error('Error fetching skill:', error);
    return {
      success: false,
      error: 'Failed to fetch skill',
      data: null,
    };
  }
}
