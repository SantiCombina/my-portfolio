import { motion } from 'motion/react';

interface Props {
  h2: string;
  h3: string;
}

export function Title({ h2, h3 }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <motion.h3
        className="text-lg font-medium text-purple-400 mb-2 tracking-wider uppercase"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {h2}
      </motion.h3>
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          {h3}
        </span>{' '}
      </motion.h2>

      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
