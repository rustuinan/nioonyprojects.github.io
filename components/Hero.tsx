'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

const ThreeHeroScene = dynamic(() => import('@/components/ThreeHeroScene').then((mod) => mod.ThreeHeroScene), {
  ssr: false,
  loading: () => <HeroSceneFallback />
});

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="container-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-10 pb-20 pt-14 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24 lg:pt-20">
      <div className="relative z-10 pb-3">
        <motion.p
          className="mb-5 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-teal-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          className="text-balance max-w-4xl text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
        >
          {t.hero.description}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
        >
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-300 px-6 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-teal-300/25"
          >
            {t.hero.primary}
          </Link>
          <Link
            href="#about"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus:outline-none focus:ring-4 focus:ring-white/10"
          >
            {t.hero.secondary}
          </Link>
        </motion.div>
        <motion.a
          href="#projects"
          aria-label={t.hero.scrollHint}
          className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-slate-300 shadow-2xl shadow-black/20 backdrop-blur-md transition hover:border-teal-300/35 hover:text-white focus:outline-none focus:ring-4 focus:ring-teal-300/20"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
        >
          <span className="relative flex h-7 w-4 items-start justify-center rounded-full border border-teal-200/40 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal-200" />
          </span>
          {t.hero.scrollHint}
        </motion.a>
      </div>

      <motion.div
        className="relative min-h-[440px] sm:min-h-[590px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22 }}
      >
        <ThreeHeroScene />
      </motion.div>
    </section>
  );
}

function HeroSceneFallback() {
  return (
    <div className="scene-fallback-grid relative grid h-[420px] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 sm:h-[560px]">
      <div className="absolute inset-8 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="relative h-72 w-44 rounded-[2rem] border-[10px] border-slate-800 bg-slate-100 shadow-2xl">
        <div className="mx-auto mt-6 h-2 w-16 rounded-full bg-slate-300" />
        <div className="mt-10 grid grid-cols-3 gap-3 px-5">
          <span className="aspect-square rounded-xl bg-cyan-400" />
          <span className="aspect-square rounded-xl bg-emerald-400" />
          <span className="aspect-square rounded-xl bg-amber-300" />
        </div>
      </div>
    </div>
  );
}
