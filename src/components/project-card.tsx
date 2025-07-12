import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  image: string;
  name: string;
  description: string;
  deploy: string;
}

export function ProjectCard({ image, name, description, deploy }: Props) {
  return (
    <article className="group relative rounded-2xl max-w-[370px] h-full overflow-hidden backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col">
        <a
          aria-label={`Go to ${name} demo`}
          className="relative cursor-pointer block overflow-hidden"
          href={deploy}
          rel="noreferrer"
          target="_blank"
        >
          <div className="relative overflow-hidden">
            <img
              alt={`${name} project screenshot`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              src={image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <motion.div
              className="absolute top-3 right-3 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </a>

        <div className="relative p-6 space-y-4">
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{name}</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
        </div>
      </div>

      {/* Línea de hover en la parte inferior del article */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 w-0 group-hover:w-full transition-all duration-500" />
    </article>
  );
}
