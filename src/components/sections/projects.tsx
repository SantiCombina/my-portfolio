import { Suspense } from 'react';

import { getProjects } from '@/app/actions/projects';
import { ProjectsSkeleton } from '@/components/skeletons';

import { ProjectsClient } from './projects-client';

async function ProjectsContent() {
  const result = await getProjects();

  if (!result.success) {
    return (
      <section id="projects" className="py-10 min-h-[100dvh]">
        <div className="flex flex-col container items-center justify-center gap-5">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-red-500">Error loading projects: {result.error}</p>
        </div>
      </section>
    );
  }

  return <ProjectsClient projects={result.data} />;
}

export function Projects() {
  return (
    <Suspense
      fallback={
        <section id="projects" className="py-10 min-h-[100dvh]">
          <div className="flex flex-col container items-center justify-center gap-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Projects
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Loading projects...</p>
            </div>
            <ProjectsSkeleton />
          </div>
        </section>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
