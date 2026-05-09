'use client';

import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/components/LanguageProvider';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container-shell grid gap-8 pb-20 pt-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
      <Reveal>
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t.contact.eyebrow}</p>
        <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.contact.title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.contact.description}</p>
      </Reveal>
      <Reveal>
        <div className="glass-panel soft-glow rounded-[2rem] p-6">
          <div className="grid h-36 place-items-center rounded-[1.5rem] bg-gradient-to-br from-teal-300/20 to-cyan-300/10">
            <div className="h-20 w-28 rounded-3xl border border-teal-200/30 bg-white/10 shadow-2xl shadow-teal-950/40" aria-label="Message illustration" />
          </div>
          <dl className="mt-6 grid gap-4">
            <div>
              <dt className="text-sm font-bold text-slate-400">{t.contact.emailLabel}</dt>
              <dd className="mt-1">
                <a className="text-lg font-black text-teal-200 hover:text-teal-100" href="mailto:contact@nioonyprojects.com">
                  contact@nioonyprojects.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-400">{t.contact.websiteLabel}</dt>
              <dd className="mt-1 text-lg font-black text-white">nioonyprojects.com</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
