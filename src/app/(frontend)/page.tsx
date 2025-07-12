import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { Contact, Header, Projects, Skills } from '@/components/sections';

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
