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
          <a href="#" aria-label={`${project.name} ${playLabel}`} className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-black text-slate-200 transition hover:bg-white/10">
            GP
          </a>
          <a href="#" aria-label={`${project.name} ${appStoreLabel}`} className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-black text-slate-200 transition hover:bg-white/10">
            AS
          </a>
        </div>
      </div>
    </motion.article>
  );
}
