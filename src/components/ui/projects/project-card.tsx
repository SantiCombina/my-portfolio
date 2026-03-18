'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { useLanguage } from '@/lib/contexts/language-context';
import { Media, Project } from '@/payload-types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const getLocalizedText = (prefix: 'name' | 'description') => {
    const key = `${prefix}${language === 'en' ? 'EN' : 'ES'}` as keyof Project;
    return project[key] as string;
  };

  const getImageUrl = () => {
    if (typeof project.image === 'object' && project.image) {
      return (project.image as Media).publicUrl || '';
    }
    return '';
  };

  const projectName = getLocalizedText('name');
  const projectDescription = getLocalizedText('description');
  const imageUrl = getImageUrl();

  return (
    <article className="group relative rounded-2xl w-full overflow-hidden bg-white/[0.03] backdrop-blur-xs border border-white/10 hover:border-purple-500/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col">
        {project.deploy ? (
          <a
            aria-label={`Go to ${projectName} demo`}
            className="relative cursor-pointer block overflow-hidden"
            href={project.deploy}
            rel="noreferrer"
            target="_blank"
          >
            <div className="relative overflow-hidden">
              {imageUrl && (
                <div className="relative aspect-video">
                  <Image
                    fill
                    alt={`${projectName} project screenshot`}
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={imageUrl}
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <motion.div
                className="absolute top-3 right-3 p-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/15"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </a>
        ) : (
          <div className="relative overflow-hidden">
            {imageUrl && (
              <div className="relative aspect-video">
                <Image
                  fill
                  alt={`${projectName} project screenshot`}
                  className="object-cover transition-all duration-500 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={imageUrl}
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}

        <div className="relative p-4 space-y-2 w-full">
          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors break-words w-full">
            {projectName}
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs min-h-[2.5rem] break-words w-full">
            {projectDescription}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 w-0 group-hover:w-full transition-all duration-500" />
    </article>
  );
}
