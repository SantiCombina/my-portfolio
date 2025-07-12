import { Suspense } from 'react';

import { getSkills } from '@/app/actions/skills';
import { SkillsSkeleton } from '@/components/skeletons';

import { SkillsClient } from './skills-client';

async function SkillsContent() {
  const result = await getSkills();

  if (!result.success) {
    return (
      <section id="skills" className="py-10 min-h-[100dvh]">
        <div className="flex flex-col container items-center justify-center gap-5">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
          <p className="text-red-500">Error loading skills: {result.error}</p>
        </div>
      </section>
    );
  }

  return <SkillsClient skills={result.data} />;
}

export function Skills() {
  return (
    <Suspense
      fallback={
        <section id="skills" className="py-10 min-h-[100dvh]">
          <div className="flex flex-col container items-center justify-center gap-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Skills
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Loading skills...</p>
            </div>
            <SkillsSkeleton />
          </div>
        </section>
      }
    >
      <SkillsContent />
    </Suspense>
  );
}
