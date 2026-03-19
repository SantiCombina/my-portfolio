'use client';

import { motion } from 'motion/react';

import { ProjectCard, Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';
import { Project } from '@/payload-types';

interface ProjectsClientProps {
  initialProjects: Project[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const { t } = useLanguage();

  if (!initialProjects || initialProjects.length === 0) {
    return (
      <section id="projects" className="relative py-20 overflow-hidden flex items-center justify-center">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Title overline={t.projects.title} title={t.projects.subtitle} />
          </div>
          <div className="text-center text-gray-400">
            <p>{t.projects.no_projects}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <Title overline={t.projects.title} title={t.projects.subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto place-items-start">
          {initialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
