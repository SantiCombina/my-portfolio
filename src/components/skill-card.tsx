import { motion } from 'motion/react';

interface Props {
  image: string;
  name: string;
}

export function SkillCard({ image, name }: Props) {
  return (
    <div className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl backdrop-blur-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative">
        <motion.div
          className="relative p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-600/30 group-hover:border-purple-500/50 transition-all duration-500"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            alt={`${name} technology logo`}
            className="w-8 h-8 md:w-12 md:h-12 filter group-hover:brightness-110 transition-all duration-500"
            src={image}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
      </div>

      <span className="relative text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
        {name}
      </span>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full" />
    </div>
  );
}
