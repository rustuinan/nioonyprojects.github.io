'use client';

import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="container-shell grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <Reveal>
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t.about.eyebrow}</p>
        <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.about.title}</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">{t.about.description}</p>
        <div className="mt-7 grid gap-3">
          {t.about.values.map((value) => (
            <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-slate-100">
              {value}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/68 p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(45,212,191,0.22),transparent_24rem)]" />
          <div className="relative mx-auto mt-8 h-56 w-56 rounded-[3rem] border border-teal-200/20 bg-white/8 shadow-[0_0_80px_rgba(45,212,191,0.18)] backdrop-blur-md" aria-label="Floating cube studio illustration">
            <div className="absolute left-10 top-10 h-12 w-12 rounded-2xl bg-teal-300" />
            <div className="absolute right-10 top-16 h-16 w-16 rounded-full bg-cyan-300" />
            <div className="absolute bottom-10 left-16 h-14 w-14 rotate-12 rounded-2xl bg-emerald-300" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
