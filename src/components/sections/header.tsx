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
      className="relative flex flex-col items-center justify-center w-full min-h-[100dvh] gap-2 pt-22 pb-20 lg:py-10 lg:gap-32 lg:flex-row overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-36">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col gap-3 items-start justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-0 items-start">
            <motion.p
              className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-none text-purple-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1
              className="font-bold text-[52px] sm:text-[68px] lg:text-[84px] leading-none text-white -mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Santiago.
            </motion.h1>
          </div>

          <div className="flex flex-col items-start gap-5">
            <motion.p
              className="text-[#DFD9FF] max-w-[420px] text-[15px] sm:text-[17px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.hero.description}
            </motion.p>

            {cvUrl && (
              <motion.a
                className="group relative flex px-8 py-2.5 transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-purple-500/25 active:scale-100"
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
          <motion.div
            className="relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          >
            <Image
              unoptimized
              priority
              alt="Santiago Combina - Developer"
              className="rounded-3xl select-none w-72 md:w-[340px] h-auto ring-1 ring-white/10"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px rgba(0,0,0,0.5), 0 0 70px rgba(236,72,153,0.45)',
              }}
              height={800}
              src="/santiago.jpg"
              width={576}
            />
            <div className="absolute bottom-6 -left-6 bg-[#0d0d0d] border border-white/10 rounded-r-2xl px-4 py-3 shadow-2xl">
              <p className="text-[11px] font-light tracking-[0.3em] uppercase text-white/80 leading-none">
                {t.navbar_logo}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-16 left-1/2 -translate-x-1/2 text-gray-500"
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
