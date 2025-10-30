import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BackgroundOrbs from './BackgroundOrbs';
import './globals.css';
import Header from './Header'; // Import the new header

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
        <Header /> {/* Add the new header */}
        <BackgroundOrbs />
        <div className="relative z-10">{children}</div>
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
              viewBox="0 0 448 512"
              className="h-8 w-8 fill-current"
              aria-hidden="true"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-66-13.1-90.4-36.4l-6.4-6.4-67.1 17.6 17.9-65.7-7.1-6.7c-24.6-23.8-38.2-56.2-38.2-91.5 0-108.8 88.4-197.3 197.3-197.3 53.3 0 104.1 20.8 141.1 57.8 37.1 37.1 57.8 87.8 57.8 141.1-.2 108.8-88.6 197.3-197.5 197.3zm101.3-143.8c-.5-2.5-3.2-4.1-6.1-5.6-2.9-1.5-17.3-8.6-20-9.6-2.7-1-4.6-.5-6.6 2.5-2 3-7.6 9.6-9.3 11.6-1.7 2-3.4 2.2-6.3 1.2-2.9-1-12.3-4.5-23.4-14.4-8.6-7.7-14.4-17.3-16.1-20.3-1.7-3-1.8-4.6-.5-6.1 1.2-1.5 2.7-3.8 4.1-5.1 1.3-1.3 1.7-2.2 2.5-3.7 1-1.5 1.2-2.9.1-5.1-1.1-2.2-10-24.1-13.6-33-3.6-8.9-7.2-7.7-9.8-7.8-2.4-.1-5.1-.1-7.6-.1-2.5 0-6.6.5-10 4.1-3.4 3.6-13.1 12.8-13.1 31.1 0 18.3 13.4 36.1 15.3 38.6 1.9 2.5 26.2 40.1 63.4 55.7 8.6 3.6 15.2 5.8 20.3 7.4 9.4 2.9 17.9 2.5 24.5 1.5 7.7-1.2 23.2-9.5 26.5-18.3 3.3-8.9 3.3-16.4 2.3-18.3z"/>
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

