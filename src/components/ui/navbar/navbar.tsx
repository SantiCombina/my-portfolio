'use client';

import { Twirl as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useState, useEffect } from 'react';

import { LanguageToggle } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';
import { useActiveSection } from '@/lib/hooks/use-active-section';

export function Navbar() {
  const { t } = useLanguage();
  const { activeSection, isScrolled } = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [activeSection]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  const navItems = [
    { id: 'home', label: t.navbar_sections.home },
    { id: 'projects', label: t.navbar_sections.work },
    { id: 'skills', label: t.navbar_sections.skills },
    { id: 'contact', label: t.navbar_sections.contact },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 z-50 flex items-center justify-center w-full h-16 transition-all duration-500 ${
          isScrolled ? 'bg-gray-950/85 backdrop-blur-xl shadow-lg shadow-purple-500/5' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between gap-2 w-full container">
          <motion.div
            className="flex gap-1 text-lg font-bold items-center cursor-pointer group whitespace-nowrap"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white group-hover:text-purple-300 transition-colors">
              Santiago Combina
              <span className="inline-block align-middle px-1 text-xs md:text-base text-gray-400 group-hover:text-purple-400 whitespace-nowrap">
                | {t.navbar_logo}
              </span>
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex flex-row gap-8 text-lg list-none">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  className={`relative cursor-pointer font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" size={20} />
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

            <motion.div
              className="absolute top-16 left-0 right-0 h-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-purple-500/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.div
                className="container py-6 flex flex-col items-center justify-center min-h-[50dvh]"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
              >
                <ul className="space-y-6 mb-8 w-full">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button
                        type="button"
                        className={`w-full text-center py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="pt-4 border-t border-gray-800/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="flex justify-center">
                    <LanguageToggle />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
