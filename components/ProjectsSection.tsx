'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { projects } from '@/data/content';

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t.projects.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {language === 'tr' ? (
                <>
                  Oynanan, sevilen, <span className="text-gradient">indirilen</span> işler
                </>
              ) : (
                <>
                  Played, loved, <span className="text-gradient">downloaded</span> products
                </>
              )}
            </h2>
          </motion.div>
          <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/15">
            {language === 'tr' ? 'Proje konuşalım' : 'Start a project'} <ArrowUpRightIcon />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1000 }}>
          {featured.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, language }: { project: (typeof projects)[number]; index: number; language: 'tr' | 'en' }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const category = language === 'tr' ? project.categoryTr : project.categoryEn;
  const description = language === 'tr' ? project.descriptionTr : project.descriptionEn;

  const handleMove = (event: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
    my.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative block overflow-hidden rounded-3xl shadow-card will-change-transform"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={project.image} alt={`${project.name} ${category}`} loading="lazy" width={768} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: `color-mix(in oklab, var(--magenta) 30%, transparent)` }}>
          {category}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-white drop-shadow-lg">{project.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-white/80">{description}</p>
        <StoreBadges />
      </div>
      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <ArrowUpRightIcon />
      </div>
    </motion.article>
  );
}

function StoreBadges() {
  return (
    <div className="mt-3 flex gap-2">
      <a href="#" aria-label="App Store" className="flex items-center gap-1.5 rounded-lg bg-black/80 px-2.5 py-1.5 text-white ring-1 ring-white/15 backdrop-blur transition-transform hover:scale-105">
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[8px] opacity-70">Download on the</span>
          <span className="block text-[10px] font-semibold">App Store</span>
        </span>
      </a>
      <a href="#" aria-label="Google Play" className="flex items-center gap-1.5 rounded-lg bg-black/80 px-2.5 py-1.5 text-white ring-1 ring-white/15 backdrop-blur transition-transform hover:scale-105">
        <GooglePlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[8px] opacity-70">GET IT ON</span>
          <span className="block text-[10px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 384 512" className="h-4 w-4" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM228.3 89.4c25.2-29.9 22.9-57.1 22.2-66.9-26.4 1.5-56.9 17.9-74.3 38.2-19.2 21.7-30.5 48.6-28.1 73.7 28.5 2.2 54.5-12.4 80.2-45z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className="h-4 w-4">
      <path fill="#00C2FF" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
      <path fill="#FFCE00" d="m104.6 499 220.7-221.3 60.1 60.1L104.6 499z" />
      <path fill="#00DE7A" d="M104.6 13v486l228-243-228-243z" />
      <path fill="#FF3A44" d="M385.4 174.2 432.9 256l-47.5 81.8L325.3 277.7l60.1-60.1z" opacity=".9" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
