'use server';

import { z } from 'zod';

import { getProjects as getProjectsService, getProjectById as getProjectByIdService } from '@/app/services/projects';
import { getSkills as getSkillsService, getSkillById as getSkillByIdService } from '@/app/services/skills';
import { actionClient } from '@/lib/safe-action-client';

export const getProjectsAction = actionClient.schema(z.void()).action(async () => {
  try {
    const projects = await getProjectsService();
    return {
      success: true,
      data: projects,
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch projects');
  }
});

export const getProjectByIdAction = actionClient
  .schema(
    z.object({
      id: z.string().min(1, 'Project ID is required'),
    }),
  )
  .action(async ({ parsedInput: { id } }) => {
    try {
      const project = await getProjectByIdService(id);
      return {
        success: true,
        data: project,
      };
    } catch (error) {
      console.error('Error fetching project:', error);
      throw new Error('Failed to fetch project');
    }
  });

export const getSkillsAction = actionClient.schema(z.void()).action(async () => {
  try {
    const skills = await getSkillsService();
    return {
      success: true,
      data: skills,
    };
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch skills');
  }
});

export const getSkillByIdAction = actionClient
  .schema(
    z.object({
      id: z.string().min(1, 'Skill ID is required'),
    }),
  )
  .action(async ({ parsedInput: { id } }) => {
    try {
      const skill = await getSkillByIdService(id);
      return {
        success: true,
        data: skill,
      };
    } catch (error) {
      console.error('Error fetching skill:', error);
      throw new Error('Failed to fetch skill');
    }
  });
