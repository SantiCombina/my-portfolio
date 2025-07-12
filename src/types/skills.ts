import { Media, Skill } from '@/payload-types';

export interface SkillWithMedia extends Omit<Skill, 'image'> {
  image: Media;
}

export interface SkillsResponse {
  success: boolean;
  data: SkillWithMedia[];
  error?: string;
}

export interface SkillResponse {
  success: boolean;
  data: SkillWithMedia | null;
  error?: string;
}
