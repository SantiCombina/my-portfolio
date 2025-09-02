'use client';

import { motion } from 'motion/react';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useState } from 'react';

import { ProjectCard, Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';
import type { Project } from '@/payload-types';

import { ProjectsSkeleton } from '../skeletons/project-skeleton';

import { getProjectsAction } from './actions';

export function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const { execute, result, isExecuting, hasErrored } = useAction(getProjectsAction);

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    if (result?.data?.success) {
      setProjects(result.data.data);
    }
  }, [result]);

  if (hasErrored) {
    return (
      <section id="projects" className="py-10 min-h-[100dvh] flex items-center justify-center">
        <div className="flex flex-col container items-center justify-center gap-5">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-red-500">Error loading projects</p>
          <button
            type="button"
            onClick={() => execute()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (isExecuting) {
    return (
      <section id="projects" className="py-10 min-h-[100dvh] flex items-center justify-center">
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
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="relative min-h-[100dvh] py-10 overflow-hidden flex items-center justify-center">
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
