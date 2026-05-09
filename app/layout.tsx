import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'Nioony Projects | Mobile Games & Apps',
  description: 'Nioony Projects develops mobile games, apps and small digital products for Google Play and App Store.',
  metadataBase: new URL('https://nioonyprojects.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Nioony Projects | Mobile Games & Apps',
    description: 'Mobile games, apps and small digital products for Google Play and App Store.',
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
