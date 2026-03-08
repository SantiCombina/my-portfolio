'use client';

import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '@/lib/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="relative py-12 border-t border-gray-800/50 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816]/80 to-transparent pointer-events-none" />
      <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
        {t.footer.made_with} <Heart className="w-4 h-4 text-red-500" />
      </p>
      <p className="text-gray-400 text-xs mt-2">
        © {new Date().getFullYear()} Santiago Combina. {t.footer.rights}
      </p>
    </motion.footer>
  );
}
