'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { navItems } from '@/data/content';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 pb-10 pt-8 text-xs text-muted-foreground sm:flex-row">
      <span>© 2026 Nioony Projects. {t.footer.rights}</span>
      <div className="flex flex-wrap justify-center gap-3">
        {navItems.slice(0, 5).map((item) => (
          <Link key={item.key} href={item.href} className="hover:text-foreground">
            {t.nav[item.key]}
          </Link>
        ))}
      </div>
      <span>{language === 'tr' ? 'Hayal gücüyle inşa edildi' : 'Built with imagination'}</span>
    </footer>
  );
}
