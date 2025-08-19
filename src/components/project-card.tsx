import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

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
    <article className="group relative rounded-2xl w-full overflow-hidden backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col">
        <a
          aria-label={`Go to ${projectName} demo`}
          className="relative cursor-pointer block overflow-hidden"
          href={project.deploy}
          rel="noreferrer"
          target="_blank"
        >
          <div className="relative overflow-hidden">
            {imageUrl && (
              <img
                alt={`${projectName} project screenshot`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                src={imageUrl}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <motion.div
              className="absolute top-2 right-2 p-1.5 bg-black/20 backdrop-blur-sm rounded-full border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </a>

        <div className="relative p-6 space-y-4 w-full">
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors break-words w-full min-h-[2rem] flex items-start">
            {projectName}
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm min-h-[3rem] flex items-start break-words w-full">
            {projectDescription}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 w-0 group-hover:w-full transition-all duration-500" />
    </article>
  );
}
