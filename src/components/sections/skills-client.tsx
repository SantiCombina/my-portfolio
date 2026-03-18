'use client';

import { motion } from 'motion/react';

import { SkillCard, Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';
import { Skill } from '@/payload-types';

interface SkillsClientProps {
  initialSkills: Skill[];
}

export function SkillsClient({ initialSkills }: SkillsClientProps) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-20 flex items-center justify-center overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title h2={t.skills.title} h3={t.skills.subtitle} />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {initialSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
