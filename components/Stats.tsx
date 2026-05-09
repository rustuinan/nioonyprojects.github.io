'use client';

import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="container-shell pb-16">
      <Reveal>
        <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/42 p-5">
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="mt-1 text-sm font-semibold text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
