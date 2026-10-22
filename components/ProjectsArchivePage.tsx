'use client';

import { ProjectCard } from '@/components/ProjectsSection';
import { useLanguage } from '@/components/LanguageProvider';
import { projects } from '@/data/content';

export function ProjectsArchivePage() {
  const { language } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-40">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{language === 'tr' ? 'Tüm projeler' : 'All projects'}</span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
          {language === 'tr' ? (
            <>
              Nioony Projects <span className="text-gradient">arşivi</span>
            </>
          ) : (
            <>
              Nioony Projects <span className="text-gradient">archive</span>
            </>
          )}
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {language === 'tr'
            ? 'RingMatch, Shikaku ve Tet2048: renk, mantık ve sayı bulmacalarını keşfet.'
            : 'Discover RingMatch, Shikaku, and Tet2048: color, logic, and number puzzles.'}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" style={{ perspective: 1000 }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} language={language} />
        ))}
      </div>
    </section>
  );
}
