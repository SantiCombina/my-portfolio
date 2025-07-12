import { useEffect, useState } from 'react';

interface UseActiveSection {
  activeSection: string;
  isScrolled: boolean;
}

export function useActiveSection(): UseActiveSection {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sections = ['home', 'projects', 'skills', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Ejecutar una vez al cargar para establecer el estado inicial
    handleScroll();

    // Usar un throttle más directo y eficiente
    let isThrottled = false;
    const throttledHandleScroll = () => {
      if (!isThrottled) {
        handleScroll();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 16); // ~60fps
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // También escuchar resize para recalcular
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [mounted]);

  return { activeSection, isScrolled };
}
