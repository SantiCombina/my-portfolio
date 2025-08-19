'use client';

import { motion } from 'motion/react';

import { useLanguage } from '@/lib/contexts/language-context';
import { Skill } from '@/payload-types';

import { SkillCard } from '../skill-card';
import { Title } from '../ui/title';

interface SkillsClientProps {
  skills: Skill[];
}

export function SkillsClient({ skills }: SkillsClientProps) {
  const { t } = useLanguage();

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
