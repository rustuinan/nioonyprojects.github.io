'use client';

import { useLanguage } from '@/components/LanguageProvider';
import type { Language } from '@/data/content';

const languages: Language[] = ['tr', 'en'];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-full border border-white/10 bg-white/5 p-1" aria-label="Language selector">
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
          className={`min-h-10 min-w-11 rounded-full px-3 text-sm font-bold transition ${
            language === item ? 'bg-teal-300 text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
