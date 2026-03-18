import { Suspense } from 'react';

import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { ProjectsSkeletonSection, SkillsSkeletonSection } from '@/components/skeletons';
import { Navbar, Footer } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
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
