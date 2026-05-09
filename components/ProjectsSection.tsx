'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';
import { projects } from '@/data/content';

type Filter = 'all' | 'games' | 'apps' | 'experimental';

const filterMap: Filter[] = ['all', 'games', 'apps', 'experimental'];

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const visibleProjects = useMemo(() => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)), [filter]);

  return (
    <section id="projects" className="container-shell py-20">
      <Reveal className="max-w-3xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t.projects.eyebrow}</p>
        <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.projects.title}</h2>
      </Reveal>

      <div className="mt-9 flex flex-wrap gap-2">
        {t.projects.filters.map((label, index) => {
          const key = filterMap[index];
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(key)}
              className={`min-h-11 rounded-full px-5 text-sm font-bold transition ${
                filter === key ? 'bg-teal-300 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} language={language} playLabel={t.projects.storeLabels.play} appStoreLabel={t.projects.storeLabels.appStore} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  language,
  playLabel,
  appStoreLabel
}: {
  project: (typeof projects)[number];
  language: 'tr' | 'en';
  playLabel: string;
  appStoreLabel: string;
}) {
  const category = language === 'tr' ? project.categoryTr : project.categoryEn;
  const description = language === 'tr' ? project.descriptionTr : project.descriptionEn;

  return (
    <motion.article
      layout
      className="group rounded-[1.75rem] border border-white/10 bg-slate-950/62 p-4 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-teal-300/45 hover:shadow-teal-950/30"
    >
      <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.color}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_13rem)]" />
        <div className="relative h-24 w-24 rotate-6 rounded-[1.6rem] border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition duration-300 group-hover:rotate-0 group-hover:scale-105" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/72 px-3 py-1 text-xs font-black text-white">{category}</div>
      </div>
      <div className="p-2 pt-5">
        <h3 className="text-xl font-black text-white">{project.name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{description}</p>
        <div className="mt-5 flex gap-2">
          <StoreButton href="#" label={`${project.name} ${playLabel}`} icon="play" text="Google Play" />
          <StoreButton href="#" label={`${project.name} ${appStoreLabel}`} icon="apple" text="App Store" />
        </div>
      </div>
    </motion.article>
  );
}

function StoreButton({ href, label, icon, text }: { href: string; label: string; icon: 'play' | 'apple'; text: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-black text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-teal-300/20"
    >
      {icon === 'play' ? <GooglePlayIcon /> : <AppStoreIcon />}
      <span className="hidden min-[420px]:inline sm:hidden lg:inline">{text}</span>
    </a>
  );
}

function GooglePlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path d="M5.2 3.4c-.32.18-.52.54-.52 1.04v15.12c0 .5.2.86.52 1.04l8.2-8.61L5.2 3.4Z" fill="#38bdf8" />
      <path d="m14.08 11.28 2.36-2.48-8.82-5.05c-.78-.45-1.42-.5-1.9-.28l8.36 7.81Z" fill="#34d399" />
      <path d="m14.08 12.72-8.36 7.81c.48.22 1.12.17 1.9-.28l8.82-5.05-2.36-2.48Z" fill="#fbbf24" />
      <path d="m15.02 12 2.62 2.75 1.04-.6c1.18-.67 1.18-1.63 0-2.3l-1.04-.6L15.02 12Z" fill="#fb7185" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <rect width="24" height="24" rx="7" fill="#2563eb" />
      <path d="M8 16.9h8M10.2 15.1l3.3-5.7M13.8 15.1l-3.3-5.7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7.65v-.9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
