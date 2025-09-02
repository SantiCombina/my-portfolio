'use client';

import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      href: 'mailto:santicombina@gmail.com',
      icon: Mail,
      label: 'Email',
      color: 'hover:text-amber-600',
    },
    {
      href: 'https://linkedin.com/in/santiago-combina',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:text-[#1B7FD8]',
    },
    {
      href: 'https://github.com/santicombina',
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-[#E6EDF3]',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-gradient-to-t from-gray-900/50 to-transparent border-t border-gray-800/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Santiago Combina</h3>
            <p className="text-gray-400 text-sm">{t.footer.role}</p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 transition-all duration-200 ${link.color} hover:border-purple-500/50 hover:bg-gray-700/50`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              size="sm"
            >
              {t.footer.back_to_top}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-800/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            {t.footer.made_with} <Heart className="w-4 h-4 text-red-500" /> {t.footer.using}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Santiago Combina. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
