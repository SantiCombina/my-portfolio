'use client';

import { FileDown } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '@/contexts/language-context';

export function Header() {
  const { t } = useLanguage();

  return (
    <header
      id="home"
      className="relative flex flex-col-reverse items-center justify-center w-full min-h-[100dvh] gap-2 py-10 md:gap-32 md:flex-row hero-bg overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col gap-1 items-center justify-center mt-6"
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      >
        <motion.h1
          className="font-bold lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] md:leading-[60px] text-center leading-[45px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.hero.greeting}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-purple-400 to-pink-600 animate-gradient-x">
            Santiago
          </span>
        </motion.h1>

        <div className="flex flex-col items-center gap-4 px-4 sm:px-6">
          <motion.p
            className="text-[#DFD9FF] max-w-[550px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center text-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.a
            className="group relative flex px-5 py-1.5 transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 hover:scale-105 active:scale-100 shadow-lg hover:shadow-purple-500/25"
            href={t.hero.resumeUrl}
            rel="noopener noreferrer"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              {t.hero.resume}
              <FileDown className="w-4 h-4 group-hover:animate-bounce" />
            </span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.3,
        }}
      >
        <motion.img
          alt="face"
          className="rounded-full select-none w-60 h-60 md:h-80 md:w-80 border-2 border-purple-500/20 shadow-2xl"
          height="320"
          src="./face.webp"
          style={{
            filter: 'drop-shadow(0px 0px 30px rgba(168, 85, 247, 0.4))',
          }}
          width="320"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -top-5 -right-5 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute -bottom-5 -left-5 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-8 w-2 h-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </motion.div>
    </header>
  );
}
