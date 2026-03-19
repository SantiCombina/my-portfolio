import { Suspense } from 'react';

import { getUser } from '@/app/services/users';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { ProjectsSkeletonSection, SkillsSkeletonSection } from '@/components/skeletons';
import { Navbar, Footer } from '@/components/ui';

export default async function HomePage() {
  const user = await getUser();
  const cvUrls = { es: user.curriculum ?? null, en: user.resume ?? null };

  return (
    <>
      <Navbar />
      <Header cvUrls={cvUrls} />
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
