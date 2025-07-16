'use client';

import { motion } from 'motion/react';

import { useLanguage } from '@/contexts/language-context';
import { Project } from '@/payload-types';

import { ProjectCard } from '../project-card';
import { Title } from '../ui/title';

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const { t, language } = useLanguage();

  const getLocalizedText = (project: Project, field: 'name' | 'description') => {
    if (field === 'name') {
      return language === 'es' ? project.nameES : project.nameEN;
    }
    return language === 'es' ? project.descriptionES : project.descriptionEN;
  };

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="relative min-h-[100vh] py-10 overflow-hidden">
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
    <section id="projects" className="relative min-h-[100vh] py-10 overflow-hidden">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-items-center">
          {projects.map((project, index) => {
            const imageUrl = typeof project.image === 'object' && project.image ? project.image.publicUrl || '' : '';
            const projectName = getLocalizedText(project, 'name');
            const projectDescription = getLocalizedText(project, 'description');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  deploy={project.deploy || ''}
                  description={projectDescription || ''}
                  image={imageUrl}
                  name={projectName || ''}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
