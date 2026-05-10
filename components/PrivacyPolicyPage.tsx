'use client';

import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';

export function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <section className="container-shell pb-16 pt-36">
      <Reveal className="max-w-3xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-secondary">{t.privacy.eyebrow}</p>
        <h1 className="text-balance font-display text-5xl font-black tracking-tight text-white sm:text-6xl">{t.privacy.title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.privacy.intro}</p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
        <aside className="glass-panel sticky top-28 rounded-[2rem] p-6">
          <dl className="grid gap-5">
            <MetaItem label={t.privacy.updated} value="May 9, 2026" />
            <MetaItem label={t.privacy.appStudio} value="Nioony Projects" />
            <MetaItem label={t.privacy.email} value="contact@nioonyprojects.com" link="mailto:contact@nioonyprojects.com" />
          </dl>
        </aside>

        <article className="rounded-[2rem] border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-10">
          {t.privacy.sections.map(([title, body]) => (
            <section key={title} className="border-b border-slate-200 py-7 first:pt-0 last:border-0 last:pb-0">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{body}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

function MetaItem({ label, value, link }: { label: string; value: string; link?: string }) {
  return (
    <div>
      <dt className="text-sm font-bold text-slate-400">{label}</dt>
      <dd className="mt-1 text-base font-black text-white">
        {link ? (
          <a className="text-teal-200 hover:text-teal-100" href={link}>
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
