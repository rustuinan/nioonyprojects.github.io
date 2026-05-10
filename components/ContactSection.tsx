'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export function ContactSection() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass shadow-card relative overflow-hidden rounded-[3rem] p-10 sm:p-16">
          <div className="bg-aurora pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t.contact.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {language === 'tr' ? (
                <>
                  Bir sonraki <span className="text-gradient">hit projeyi</span> birlikte yapalım
                </>
              ) : (
                <>
                  Let’s build the next <span className="text-gradient">hit project</span> together
                </>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.description}</p>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="mx-auto mt-10 grid max-w-2xl gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder={language === 'tr' ? 'Adınız' : 'Your name'} className="glass rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
              <input required type="email" placeholder={language === 'tr' ? 'E-posta' : 'Email'} className="glass rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <textarea required rows={4} placeholder={language === 'tr' ? 'Projenizden bahsedin...' : 'Tell us about your project...'} className="glass resize-none rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="group bg-aurora shadow-glow-magenta inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition-transform hover:scale-[1.02]">
              {language === 'tr' ? 'Mesajı Gönder' : 'Send Message'} <SendIcon />
            </button>
          </form>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:contact@nioonyprojects.com" className="inline-flex items-center gap-2 hover:text-foreground">
              <MailIcon />
              <span>contact@nioonyprojects.com</span>
            </a>
            <a href="https://nioonyprojects.com" className="inline-flex items-center gap-2 hover:text-foreground">
              <MapIcon />
              <span>nioonyprojects.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2 11 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
