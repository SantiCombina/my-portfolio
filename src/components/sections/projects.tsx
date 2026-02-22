import { getProjects } from '@/app/services/projects';

import { ProjectsClient } from './projects-client';

export async function Projects() {
  const projects = await getProjects();
  return <ProjectsClient initialProjects={projects} />;
}
