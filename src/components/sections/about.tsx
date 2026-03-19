'use client';

import { motion } from 'motion/react';

import { Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-0 max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col gap-4 flex-1 md:pr-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Title overline={t.about.overline} title={t.about.title} alignment="start" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{t.about.description}</p>
          </motion.div>

          <motion.div
            className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent flex-shrink-0"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col gap-2 flex-1 md:pl-16 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-[#b8a48a]" />
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b8a48a]">
                  {t.about.forge.overline}
                </p>
              </div>
              <p
                className="font-bold tracking-tight text-5xl"
                style={{ fontFamily: 'var(--font-playfair)', color: 'oklch(0.965 0.005 90)' }}
              >
                Forge<span style={{ color: 'oklch(0.75 0.04 80)' }}>.</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm text-gray-400 leading-relaxed">{t.about.forge.description1}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{t.about.forge.description2}</p>
            </div>

            <div className="flex items-center justify-end w-full gap-5">
              <a
                href="https://www.forge.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                forge.ar
              </a>
              <a
                href="https://www.instagram.com/forgestudio.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="Forge Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/forge-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="Forge LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
