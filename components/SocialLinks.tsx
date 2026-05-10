const socialLinks = [
  { label: 'YouTube', href: '#', icon: YouTubeIcon },
  { label: 'X', href: '#', icon: XIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon }
] as const;

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Social media links">
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`glass grid place-items-center rounded-full text-foreground transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-primary/25 ${
              compact ? 'h-10 w-10' : 'h-12 w-12'
            }`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M22 12s0-3.4-.44-5.02a3.02 3.02 0 0 0-2.12-2.14C17.78 4.4 12 4.4 12 4.4s-5.78 0-7.44.44a3.02 3.02 0 0 0-2.12 2.14C2 8.6 2 12 2 12s0 3.4.44 5.02a3.02 3.02 0 0 0 2.12 2.14c1.66.44 7.44.44 7.44.44s5.78 0 7.44-.44a3.02 3.02 0 0 0 2.12-2.14C22 15.4 22 12 22 12Z" fill="#FF0033" />
      <path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M4 4h4.5l4.15 5.55L17.4 4H20l-6.08 7.1L20.5 20H16l-4.72-6.32L5.86 20H3.25l6.75-7.88L4 4Zm3.25 1.5 9.5 13h1.5l-9.5-13h-1.5Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M5.2 8.8h3.1V19H5.2V8.8Zm1.55-4.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.2 8.8h3v1.4h.04c.42-.8 1.44-1.65 2.96-1.65 3.17 0 3.75 2.08 3.75 4.78V19h-3.1v-5.03c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.31-1.94 2.66V19h-3.04V8.8Z" fill="#0A66C2" />
    </svg>
  );
}
