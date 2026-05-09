'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { useLanguage } from '@/components/LanguageProvider';
import { navItems } from '@/data/content';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-400">© 2026 Nioony Projects. {t.footer.rights}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {t.nav[item.key]}
            </Link>
          ))}
        </div>
        <div className="flex gap-2" aria-label={t.footer.social}>
          {['X', 'IG', 'YT'].map((item) => (
            <span key={item} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-black text-slate-400">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
