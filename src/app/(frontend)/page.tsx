import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { ScrollProgress, Navbar, Footer } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
