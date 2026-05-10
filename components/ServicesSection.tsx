'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

const serviceColors = ['var(--magenta)', 'var(--cyan)', 'var(--sun)', 'var(--violet)'];

export function ServicesSection() {
  const { language, t } = useLanguage();
  const cards = [
    ...t.services.cards,
    language === 'tr'
      ? ['Yayın Sonrası Destek', 'Güncelleme, analiz, iyileştirme ve kullanıcı geri bildirimlerini düzenli takip ediyoruz.']
      : ['Live Operations', 'We support updates, analytics, improvements, and user feedback after launch.']
  ] as const;

  return (
    <section id="services" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{t.services.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {language === 'tr' ? (
              <>
                Fikrinizi <span className="text-gradient">üretime</span> dönüştürüyoruz
              </>
            ) : (
              <>
                We turn ideas into <span className="text-gradient">shipped</span> products
              </>
            )}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {language === 'tr' ? 'Konsept aşamasından yayına kadar tüm süreci tek bir yaratıcı ekiple yönetin.' : 'Move from concept to launch with one focused creative team.'}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, desc], index) => (
            <motion.article
              key={title}
              whileHover={{ y: -6 }}
              className="glass shadow-card group relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" style={{ background: serviceColors[index] }} />
              <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `color-mix(in oklab, ${serviceColors[index]} 22%, transparent)`, color: serviceColors[index] }}>
                <ServiceIcon index={index} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    'M6 12h12M9 9v6m7-2h.01M18 10h.01M7.5 7h9A4.5 4.5 0 0 1 21 11.5v1A4.5 4.5 0 0 1 16.5 17h-9A4.5 4.5 0 0 1 3 12.5v-1A4.5 4.5 0 0 1 7.5 7Z',
    'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2',
    'M12 3 4 7l8 4 8-4-8-4Zm-8 8 8 4 8-4M4 15l8 4 8-4',
    'M5 19c3.5-1 5.8-3.3 7-7 3.7-1.2 6-3.5 7-7-3.5 1-5.8 3.3-7 7-3.7 1.2-6 3.5-7 7Zm8-8 3 3'
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
      <path d={paths[index]} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
