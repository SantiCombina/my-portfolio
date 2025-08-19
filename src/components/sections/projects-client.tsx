'use client';

import { motion } from 'motion/react';

import { useLanguage } from '@/lib/contexts/language-context';
import { Project } from '@/payload-types';

import { ProjectCard } from '../project-card';
import { Title } from '../ui/title';

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const { t } = useLanguage();

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="relative min-h-[100dvh] py-10 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Title h2={t.projects.title} h3={t.projects.subtitle} />
          </motion.div>
          <div className="text-center text-gray-400">
            <p>{t.projects.no_projects}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative min-h-[100dvh] py-10 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title h2={t.projects.title} h3={t.projects.subtitle} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto place-items-start">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
