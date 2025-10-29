"use client";

import Image from 'next/image';
import { useEffect } from 'react';

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

export default function HomePage() {
  useRevealOnScroll();

  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative">
        <div className="container pt-0 pb-24 sm:pt-0 sm:pb-32">
          <div className="max-w-2xl reveal">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="Cesar Transport" width={40} height={40} className="h-10 w-10" />
              <span className="text-sm uppercase tracking-widest text-slate-500">Cesar Transport</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Pouzdana dostava i prijevoz za poduzeća(B2B) i pojedince širom Hrvatske i EU.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
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
      <section id="services" className="container py-20 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold">Usluge</h2>
          <p className="mt-2 text-white/70 dark:text-neutral-300 max-w-2xl">
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
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-neutral-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold">O nama</h2>
            <p className="mt-4 text-slate-700 dark:text-neutral-300">
              Cesar transport je pouzdani partner za kombi prijevoz robe diljem Hrvatske i Europe. Specijalizirani smo za smo za B2B suradnje, ali jednako pažljivo pristupamo i privatnim klijentima. Naša misija je pružiti brzu, sigurnu i točnu dostavu.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 dark:text-neutral-300">
              <li>• Hrvatska pokrivenost i fleksibilni termini</li>
              <li>• Uredna vozila i profesionalni vozači</li>
              <li>• Transparentna komunikacija i cijene</li>
            </ul>
          </div>
          <div className="reveal order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              <Image
                src="/van.jpg"
                alt="Cesar Transport kombi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container py-20 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold">Galerija</h2>
          <p className="mt-2 text-slate-600 dark:text-neutral-300">Pogledajte naš kombi u akciji.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              <Image src="/van.jpg" alt="Kombi" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold">Kontakt</h2>
            <p className="mt-2 text-slate-600 dark:text-neutral-300">Pošaljite upit i javit ćemo se uskoro.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p>Telefon: <a className="text-brand-primary hover:underline" href="tel:+385912345678">+385 91 234 5678</a></p>
              <p>Email: <a className="text-brand-primary hover:underline" href="mailto:info@cesar-transport.hr">info@cesar-transport.hr</a></p>
            </div>
          </div>

          <form
            className="reveal rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            action="mailto:info@cesar-transport.hr"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600">Ime</label>
                <input name="Ime" required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Email</label>
                <input type="email" name="Email" required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600">Poruka</label>
                <textarea name="Poruka" rows={4} required className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-white font-semibold transition-transform hover:scale-[1.02]">
              Pošalji email
            </button>
            <p className="mt-2 text-xs text-slate-500 dark:text-neutral-400">Slanje otvara vaš email klijent (bez backend-a).</p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-20 sm:py-28">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold">Česta pitanja</h2>
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
              <summary className="cursor-pointer select-none text-lg font-medium list-none flex items-center justify-between">
                {item.q}
                <span className="ml-4 text-slate-400 dark:text-neutral-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-slate-600 dark:text-neutral-300">{item.a}</p>
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

