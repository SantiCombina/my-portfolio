'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

import { translations, type Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        setLanguage(savedLanguage);
      } else {
        const browserLanguage = navigator.language.toLowerCase();
        const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';
        setLanguage(detectedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.cookie = `lang=${language};path=/;max-age=31536000;SameSite=Lax`;
    }
  }, [language, mounted]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
