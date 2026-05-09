'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Logo } from '@/components/Logo';
import { useLanguage } from '@/components/LanguageProvider';
import { navItems } from '@/data/content';

export function Header({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled || compact ? 'border-white/10 bg-slate-950/72 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-shell flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" aria-label="Nioony Projects home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass-panel grid gap-2 rounded-3xl p-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="px-2 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
