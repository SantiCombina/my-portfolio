import { Suspense } from 'react';

import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { ProjectsSkeletonSection, SkillsSkeletonSection } from '@/components/skeletons';
import { ScrollProgress, Navbar, Footer } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Header />
      <Suspense fallback={<ProjectsSkeletonSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SkillsSkeletonSection />}>
        <Skills />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
}
