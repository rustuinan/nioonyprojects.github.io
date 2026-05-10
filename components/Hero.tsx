'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

const ThreeHeroScene = dynamic(() => import('@/components/ThreeHeroScene').then((mod) => mod.ThreeHeroScene), {
  ssr: false,
  loading: () => <div className="scene-fallback-grid h-full w-full" />
});

export function Hero() {
  const { language, t } = useLanguage();

  const heroTitle =
    language === 'tr'
      ? ['Mobil oyunlar', 'hayal gücünden', 'doğar.']
      : ['Mobile products', 'begin with', 'imagination.'];

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pb-24 pt-32">
      <div className="absolute inset-0 -z-10">
        <ThreeHeroScene className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/10 to-background" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {heroTitle[0]}
            <br />
            <span className="text-gradient">{heroTitle[1]}</span>
            <br />
            {heroTitle[2]}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{t.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="group bg-aurora shadow-glow-magenta inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-primary/30">
              {t.hero.primary}
              <ArrowRightIcon />
            </Link>
            <Link href="#about" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-foreground transition-colors hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20">
              <PlayIcon />
              {t.hero.secondary}
            </Link>
          </div>

          <a href="#services" aria-label={t.hero.scrollHint} className="glass mt-7 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-bold text-foreground/75 transition hover:bg-white/15 hover:text-foreground">
            <span className="relative flex h-7 w-4 items-start justify-center rounded-full border border-secondary/45 p-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-secondary" />
            </span>
            {t.hero.scrollHint}
          </a>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {t.stats.slice(0, 3).map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold text-gradient">{value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1">
      <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="m8 5 11 7-11 7V5Z" fill="currentColor" />
    </svg>
  );
}
