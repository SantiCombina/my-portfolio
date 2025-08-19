'use client';

import { Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useLanguage } from '@/lib/contexts/language-context';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  if (!mounted) {
    return (
      <button
        className="flex items-center gap-1 px-2 py-1 cursor-pointer text-gray-300 hover:text-white font-medium transition-colors duration-300 rounded-md hover:bg-white/5"
        type="button"
      >
        <Languages size={18} />
        <span className="text-sm">EN</span>
      </button>
    );
  }

  return (
    <button
      className="flex items-center gap-1 px-2 py-1 cursor-pointer text-gray-300 hover:text-white font-medium transition-colors duration-300 rounded-md hover:bg-white/5"
      onClick={toggleLanguage}
      type="button"
    >
      <Languages size={18} />
      <span className="text-lg">{language}</span>
    </button>
  );
}
