'use client';

import { useLanguage } from '@/components/LanguageProvider';
import type { Language } from '@/data/content';

const languages: Language[] = ['tr', 'en'];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="glass flex rounded-full p-1" aria-label="Language selector">
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
          className={`min-h-10 min-w-11 rounded-full px-3 text-sm font-bold transition ${
            language === item ? 'bg-aurora text-white shadow-glow-magenta' : 'text-muted-foreground hover:bg-white/10 hover:text-white'
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
