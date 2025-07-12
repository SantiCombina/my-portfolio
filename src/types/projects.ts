import { Media, Project } from '@/payload-types';

export interface ProjectWithMedia extends Omit<Project, 'image'> {
  image: Media;
}

export interface ProjectsResponse {
  success: boolean;
  data: ProjectWithMedia[];
  error?: string;
}

export interface ProjectResponse {
  success: boolean;
  data: ProjectWithMedia | null;
  error?: string;
}
