import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'Nioony Projects | RingMatch, Shikaku & Tet2048',
  description: 'Discover RingMatch, Shikaku, and Tet2048. Color, logic, and number puzzles from Nioony Projects. Find our games on Google Play and follow our latest updates.',
  metadataBase: new URL('https://nioonyprojects.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Nioony Projects | RingMatch, Shikaku & Tet2048',
    description: 'Explore our mobile puzzle games: RingMatch, Shikaku, and Tet2048.',
    url: 'https://nioonyprojects.com',
    siteName: 'Nioony Projects',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
