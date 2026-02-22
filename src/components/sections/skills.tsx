import { getSkills } from '@/app/services/skills';

import { SkillsClient } from './skills-client';

export async function Skills() {
  const skills = await getSkills();
  return <SkillsClient initialSkills={skills} />;
}
