'use client';

import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';

const visuals = ['rounded-[2rem] rotate-6', 'rounded-full', 'rounded-[1.4rem] -rotate-6'];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="light-section py-20">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-teal-700">{t.services.eyebrow}</p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{t.services.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {t.services.cards.map(([title, description], index) => (
            <Reveal key={title}>
              <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                <div className="grid h-40 place-items-center rounded-[1.5rem] bg-slate-950">
                  <div className={`h-20 w-20 bg-gradient-to-br from-teal-300 via-emerald-300 to-cyan-300 shadow-[0_0_48px_rgba(45,212,191,0.35)] ${visuals[index]}`} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
