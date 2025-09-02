'use client';

import { motion } from 'motion/react';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useState } from 'react';

import { SkillCard, Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';
import type { Skill } from '@/payload-types';

import { SkillsSkeleton } from '../skeletons/skill-skeleton';

import { getSkillsAction } from './actions';

export function Skills() {
  const { t } = useLanguage();
  const [skills, setSkills] = useState<Skill[]>([]);
  const { execute, result, isExecuting, hasErrored } = useAction(getSkillsAction);

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    if (result?.data?.success) {
      setSkills(result.data.data);
    }
  }, [result]);

  if (hasErrored) {
    return (
      <section id="skills" className="py-10 min-h-[100dvh] flex items-center justify-center">
        <div className="flex flex-col container items-center justify-center gap-5">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
          <p className="text-red-500">Error loading skills</p>
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
      <section id="skills" className="py-10 min-h-[100dvh] flex items-center justify-center">
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
    );
  }

  return (
    <section id="skills" className="relative min-h-[100dvh] flex items-center justify-center py-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title h2={t.skills.title} h3={t.skills.subtitle} />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
