'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

const statColors = ['var(--magenta)', 'var(--cyan)', 'var(--sun)', 'var(--violet)'];

export function AboutSection() {
  const { language, t } = useLanguage();
  const stats = [
    [language === 'tr' ? '40+' : '40+', language === 'tr' ? 'Yayında proje' : 'Shipped projects'],
    [language === 'tr' ? '8M+' : '8M+', language === 'tr' ? 'Toplam indirme' : 'Total downloads'],
    [language === 'tr' ? '12+' : '12+', language === 'tr' ? 'Yıllık deneyim' : 'Years experience'],
    ['100%', language === 'tr' ? 'Tutku' : 'Passion']
  ];

  return (
    <section id="about" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            <SparkleIcon /> {t.about.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {language === 'tr' ? (
              <>
                Küçük bir ekip, <span className="text-gradient">büyük hayaller</span> peşinde
              </>
            ) : (
              <>
                A small team chasing <span className="text-gradient">big dreams</span>
              </>
            )}
          </h2>
          <p className="mt-5 text-lg leading-8 text-foreground/80">{t.about.description}</p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.article
              key={label}
              whileHover={{ y: -4 }}
              className="glass shadow-card group relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40" style={{ background: statColors[index] }} />
              <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: `color-mix(in oklab, ${statColors[index]} 22%, transparent)`, color: statColors[index] }}>
                <StatIcon index={index} />
              </div>
              <div className="mt-5 font-display text-4xl font-black text-gradient">{value}</div>
              <div className="mt-1 text-sm text-foreground/70">{label}</div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-5 lg:items-center">
          <motion.div className="lg:col-span-2">
            <div className="relative">
              <div className="glass shadow-card relative overflow-hidden rounded-[2.5rem] p-8">
                <div className="bg-cosmic absolute inset-0 opacity-90" />
                <div className="relative z-10 flex min-h-[360px] flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                      <GamepadIcon />
                    </span>
                    <div>
                      <div className="font-display text-2xl font-bold text-white">Nioony</div>
                      <div className="text-xs uppercase tracking-widest text-white/70">est. 2026</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold leading-tight text-white">
                      {language === 'tr' ? '"Oyun, en saf haliyle bir hikayedir."' : '"Play is a story in its purest form."'}
                    </div>
                    <div className="mt-3 text-sm text-white/80">- Nioony Projects</div>
                  </div>
                  <div className="mt-auto grid grid-cols-3 gap-2 text-center">
                    {['Unity', 'Flutter', 'React'].map((item) => (
                      <div key={item} className="rounded-xl bg-white/15 py-2 text-xs font-semibold text-white backdrop-blur">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-aurora shadow-glow-magenta absolute -bottom-5 -right-5 h-24 w-24 animate-float rounded-3xl" />
              <div className="absolute -left-4 -top-4 h-16 w-16 animate-spin-slow rounded-full bg-accent shadow-glow-cyan" />
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3">
            <h3 className="font-display text-3xl font-bold sm:text-4xl">
              {language === 'tr' ? (
                <>
                  Bizi <span className="text-gradient">biz yapan</span> değerler
                </>
              ) : (
                <>
                  Values that make us <span className="text-gradient">Nioony</span>
                </>
              )}
            </h3>
            <p className="mt-3 text-foreground/75">{language === 'tr' ? 'İşimize aşığız ve bunu her ürettiğimiz detayda hissettirmek istiyoruz.' : 'We care deeply about the craft and show it in every detail we ship.'}</p>
            <div className="mt-8 space-y-4">
              {t.about.values.map((value, index) => (
                <motion.div
                  key={value}
                  className="glass shadow-card group flex items-start gap-4 rounded-2xl p-5"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ background: statColors[index], boxShadow: `0 0 20px ${statColors[index]}` }} />
                  <div>
                    <div className="font-display text-lg font-bold text-foreground">{value}</div>
                    <div className="mt-1 text-sm text-foreground/75">
                      {language === 'tr' ? ['Her projede kullanıcıya net bir his vermeye odaklanıyoruz.', 'Konseptten optimizasyona kadar her detayı titizlikle ele alıyoruz.', 'Ürünleri yayından sonra da geliştirmeye devam ediyoruz.'][index] : ['Every project starts with a clear user feeling.', 'We care about every detail from concept to optimization.', 'We keep improving products after launch.'][index]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent">
      <path d="m12 2 1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2Z" fill="currentColor" />
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 text-white">
      <path d="M6 12h12M9 9v6m7-2h.01M18 10h.01M7.5 7h9A4.5 4.5 0 0 1 21 11.5v1A4.5 4.5 0 0 1 16.5 17h-9A4.5 4.5 0 0 1 3 12.5v-1A4.5 4.5 0 0 1 7.5 7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatIcon({ index }: { index: number }) {
  const paths = [
    'M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Zm10 2h3v1a3 3 0 0 1-3 3M7 6H4v1a3 3 0 0 0 3 3',
    'M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 10v-2a3 3 0 0 0-2-2.8M18 4a3 3 0 0 1 0 6',
    'M13 2 4 14h7l-1 8 10-14h-7l1-6Z',
    'M8 17.5 15.5 10 12 6.5 4.5 14 8 17.5Zm7-14 5.5 5.5'
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path d={paths[index]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
