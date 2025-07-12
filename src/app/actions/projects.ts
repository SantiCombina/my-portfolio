'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import configPromise from '@/payload.config';

const CACHE_TAGS = {
  PROJECTS: 'projects',
} as const;

// Cache the projects for 5 minutes
const getCachedProjects = unstable_cache(
  async () => {
    const payload = await getPayload({
      config: configPromise,
    });

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
    revalidate: 300, // 5 minutes
    tags: [CACHE_TAGS.PROJECTS],
  },
);

export async function getProjects() {
  try {
    const data = await getCachedProjects();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch projects',
      data: [],
    };
  }
}

export async function getProjectById(id: string) {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const project = await payload.findByID({
      collection: 'projects',
      id: id,
      depth: 2,
    });

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return {
      success: false,
      error: 'Failed to fetch project',
      data: null,
    };
  }
}
