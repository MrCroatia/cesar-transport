"use client";

import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

import InteractiveGallery from './InteractiveGallery';

export default function HomePage() {
  useRevealOnScroll();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);

  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative">
        <div className="container pt-32 pb-24 sm:pt-48 sm:pb-32">
          <div className="max-w-2xl reveal">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-shadow-custom" style={{ color: 'var(--text-primary)' }}>
              Pouzdan B2B i privatni prijevoz u Hrvatskoj i EU
            </h1>
            <p className="mt-6 text-lg text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>
              Vaša roba. Na vrijeme. Bez stresa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-white font-semibold transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
              >
                Zatraži ponudu
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-800 transition-colors hover:bg-slate-50"
              >
                Usluge
              </a>
            </div>
          </div>
        </div>
        {/* Hero glow removed in favor of global sticky glow in layout */}
      </section>

      {/* Services */}
      <section id="services" className="container pt-20 pb-6 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-shadow-custom" style={{ color: 'var(--text-primary)' }}>Usluge</h2>
          <p className="mt-2 max-w-2xl text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>
            Specijalizirani za redoviti i fleksibilni prijevoz za privatne i B2B klijente.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Redovni prijevoz',
              desc: 'Tjedni i dnevni rasporedi za stabilnu opskrbu vašeg poslovanja.',
            },
            {
              title: 'Brza dostava kombijem',
              desc: 'Hitne i planirane dostave na području RH uz praćenje.',
            },
            {
              title: 'HoReCa logistika',
              desc: 'Prilagođeno kafićima, restoranima i barovima – od skladišta do lokala.',
            },
            {
              title: 'B2B prijevoz',
              desc: 'Pouzdan partner za male i srednje poslovne korisnike.',
            },
            {
              title: 'Usluga od vrata do vrata',
              desc: 'Preuzimanje, transport i isporuka uz maksimalnu pažnju.',
            },
            {
              title: 'Dostava po mjeri',
              desc: 'Fleksibilna logistika prema vašim specifičnim zahtjevima.',
            },
          ].map((item) => (
            <div key={item.title} className="reveal relative">
              <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-brand-primary/20 blur-2xl"></div>
              <div className="relative rounded-xl border border-brand-primary/30 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/40 ring-1 ring-brand-primary/10 hover:ring-brand-primary/20 transition-shadow">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container pt-4 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-shadow-custom" style={{ color: 'var(--text-primary)' }}>O nama</h2>
            <p className="mt-4 text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>
              Cesar transport je pouzdani partner za kombi prijevoz robe diljem Hrvatske i Europe. Specijalizirani smo za smo za B2B suradnje, ali jednako pažljivo pristupamo i privatnim klijentima. Naša misija je pružiti brzu, sigurnu i točnu dostavu.
            </p>
            <ul className="mt-6 space-y-2 text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>
              <li>• Hrvatska pokrivenost i fleksibilni termini</li>
              <li>• Uredna vozila i profesionalni vozači</li>
              <li>• Transparentna komunikacija i cijene</li>
            </ul>
          </div>
          <div className="reveal order-1 lg:order-2 flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Cesar Transport logo"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery - Interactive Carousel */}
      <section id="gallery" className="container py-20 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-shadow-custom" style={{ color: 'var(--text-primary)' }}>Galerija</h2>
          <p className="mt-2 text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>Pogledajte naš kombi u akciji.</p>
        </div>
        <div className="mt-8">
          <InteractiveGallery />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-shadow-custom" style={{ color: 'var(--text-primary)' }}>Kontakt</h2>
            <p className="mt-2 text-shadow-custom" style={{ color: 'var(--text-secondary)' }}>Pošaljite upit i javit ćemo se uskoro.</p>
            <div className="mt-6 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <p>Telefon: <a className="text-brand-primary hover:underline" href="tel:+385992087142">+385 99 208 7142</a></p>
              <p>Email: <a className="text-brand-primary hover:underline" href="mailto:cesartransport.hr@gmail.com">cesartransport.hr@gmail.com</a></p>
            </div>
          </div>

          <form
            className="reveal rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            onSubmit={async (e) => {
              e.preventDefault();
              if (sending) return;
              setSent(null);
              setSending(true);
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = (data.get('Ime') || '').toString();
              const email = (data.get('Email') || '').toString();
              const message = (data.get('Poruka') || '').toString();
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message }),
                });
                if (res.ok) {
                  setSent('ok');
                  form.reset();
                } else {
                  setSent('err');
                }
              } catch {
                setSent('err');
              } finally {
                setSending(false);
              }
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Ime</label>
                <input name="Ime" required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
              <div>
                <label className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" name="Email" required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Poruka</label>
                <textarea name="Poruka" rows={4} required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-white font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? 'Šaljem…' : 'Pošalji upit'}
            </button>
            {sent === 'ok' && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">Poruka je poslana. Hvala!</p>
            )}
            {sent === 'err' && (
              <p className="mt-2 text-sm text-red-600">Slanje nije uspjelo. Pokušajte ponovno.</p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-20 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-shadow-custom" style={{ color: 'var(--text-primary)' }}>Česta pitanja</h2>
        </div>
        <div className="mt-6 space-y-3">
          {[
            {
              q: 'Na kojim relacijama vozite?',
              a: 'Fleksibilno pokrivamo cijelu Hrvatsku prema dogovoru i rasporedu.',
            },
            { q: 'Imate li redovne linije?', a: 'Da, organiziramo tjedne i dnevne linije za stalne klijente.' },
            { q: 'Kako do ponude?', a: 'Ispunite formu ili nazovite – odgovaramo isti dan.' },
          ].map((item, idx) => (
            <details key={idx} className="reveal group rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-sm">
              <summary className="cursor-pointer select-none text-lg font-medium list-none flex items-center justify-between" style={{ color: 'var(--text-primary)' }}>
                {item.q}
                <span className="ml-4 text-slate-400 dark:text-neutral-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="container py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Cesar Transport logo" width={36} height={36} />
            <span className="text-slate-600 dark:text-neutral-400">© {new Date().getFullYear()} Cesar Transport</span>
          </div>
          <nav className="flex gap-5 text-slate-600 dark:text-neutral-400">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-neutral-200">Početna</a>
            <a href="#services" className="hover:text-slate-900 dark:hover:text-neutral-200">Usluge</a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-neutral-200">O nama</a>
            <a href="#gallery" className="hover:text-slate-900 dark:hover:text-neutral-200">Galerija</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-neutral-200">Kontakt</a>
            <a href="#faq" className="hover:text-slate-900 dark:hover:text-neutral-200">FAQ</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

