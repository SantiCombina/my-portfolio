'use client';

import { ChevronDown, FileDown } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { useLanguage } from '@/lib/contexts/language-context';

interface HeaderProps {
  cvUrls: { es: string | null; en: string | null };
}

export function Header({ cvUrls }: HeaderProps) {
  const { t, language } = useLanguage();
  const cvUrl = language === 'es' ? cvUrls.es : cvUrls.en;

  return (
    <header
      id="home"
      className="relative flex flex-col-reverse items-center justify-center w-full min-h-[100dvh] gap-2 py-10 lg:gap-32 lg:flex-row overflow-hidden"
    >
      <div className="container w-full px-4 sm:px-6 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-32">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col gap-1 items-center justify-center mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-bold lg:text-[56px] sm:text-[44px] xs:text-[36px] text-[28px] lg:leading-[68px] md:leading-[52px] text-center leading-[36px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t.hero.greeting}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-purple-400 to-pink-600 animate-gradient-x">
              Santiago
            </span>
          </motion.h1>

          <motion.h2
            className="text-sm font-medium tracking-widest uppercase text-purple-400/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {t.hero.role}
          </motion.h2>

          <div className="flex flex-col items-center gap-4 px-4 sm:px-6">
            <motion.p
              className="text-[#DFD9FF] max-w-[550px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[28px] text-center text-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.hero.description}
            </motion.p>

            {cvUrl && (
              <motion.a
                className="group relative flex px-5 py-1.5 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-purple-500/25 active:scale-100"
                href={cvUrl}
                rel="noopener noreferrer"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  {t.hero.resume}
                  <FileDown className="w-4 h-4 group-hover:animate-bounce" />
                </span>
              </motion.a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}>
            <Image
              priority
              alt="Santiago Combina - Full Stack Developer"
              className="rounded-full select-none w-60 h-60 md:h-80 md:w-80 shadow-2xl"
              height={320}
              sizes="(max-width: 768px) 240px, 320px"
              src="/face.jpg"
              style={{ filter: 'drop-shadow(0px 0px 30px rgba(168, 85, 247, 0.4))' }}
              width={320}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </header>
  );
}
