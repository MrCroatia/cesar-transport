import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeToggle from './ThemeToggle';

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
      <body className={`${inter.className} bg-white text-slate-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}>
        {/* Top-right theme toggle */}
        <div
          className="fixed z-40"
          style={{
            right: 'calc(1rem + env(safe-area-inset-right))',
            top: 'calc(1rem + env(safe-area-inset-top))',
          }}
        >
          <ThemeToggle />
        </div>
        <div className="relative z-10">{children}</div>
        {/* Sticky decorative blue glow (center-right, behind content) */}
        <div className="pointer-events-none fixed -right-20 top-1/2 -translate-y-1/2 opacity-20 blur-2xl z-0" aria-hidden="true">
          <div className="h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-primary"></div>
        </div>
        <div
          className="fixed z-50 flex flex-col items-end gap-3"
          style={{
            right: 'calc(1rem + env(safe-area-inset-right))',
            bottom: 'calc(1rem + env(safe-area-inset-bottom))',
          }}
        >
          <a
            href="https://wa.me/385992087142"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kontaktirajte nas preko WhatsAppa"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <path d="M19.11 17.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.56-1.48-1.82-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.03.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32z"/>
              <path d="M26.62 5.38C23.89 2.65 20.1 1.16 16.09 1.18 8.5 1.22 2.35 7.41 2.38 15c.01 2.35.62 4.53 1.7 6.42L2 31l9.75-2.03c1.82.99 3.89 1.52 6.07 1.53h.03c7.58 0 13.78-6.17 13.82-13.76.02-3.69-1.41-7.16-4.05-9.8zM17.85 28.9h-.02c-1.92-.01-3.79-.5-5.44-1.41l-.39-.22-5.78 1.2 1.23-5.64-.25-.41c-1.03-1.69-1.58-3.64-1.59-5.63-.03-6.03 4.86-10.95 10.89-10.98h.05c2.91 0 5.64 1.13 7.69 3.17 2.06 2.05 3.19 4.77 3.17 7.68-.03 6.03-4.95 10.94-10.96 10.94z"/>
            </svg>
          </a>

          <a
            href="https://www.facebook.com/share/1GfBP7ivdP/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Posjetite nas na Facebooku"
            className="h-14 w-14 rounded-full bg-[#1877F2] hover:bg-[#166FE0] active:bg-[#145FC6] text-white shadow-lg shadow-blue-500/30 flex items-center justify-center transition-colors"
          >
            {/* Facebook Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}

