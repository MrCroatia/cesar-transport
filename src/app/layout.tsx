import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cesar Transport | Dostava i Prijevoz za Ugostiteljstvo i B2B',
  description:
    'Pouzdana dostava kombijem i redovni prijevoz za kafiće, restorane, barove i B2B klijente u Hrvatskoj.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}

