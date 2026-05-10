'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Logo } from '@/components/Logo';
import { useLanguage } from '@/components/LanguageProvider';
import { navItems } from '@/data/content';

export function Header({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1200px,92%)] -translate-x-1/2">
      <div className={`glass flex items-center justify-between rounded-full px-5 py-3 shadow-card ${compact ? 'bg-background/70' : ''}`}>
        <Link href="/#home" aria-label="Nioony Projects home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#contact" className="bg-aurora shadow-glow-magenta rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="glass mt-2 rounded-3xl p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
