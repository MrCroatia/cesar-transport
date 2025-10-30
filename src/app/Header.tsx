"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 h-24 lg:h-28 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`container mx-auto h-full flex items-center transition-all duration-500 ease-in-out ${
          isScrolled ? 'justify-center' : 'justify-between'
        }`}
      >
        <div
          className={`flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'gap-0' : 'gap-3'
          }`}
        >
          <Link href="#home">
            <Image
              src="/logo.svg"
              alt="Cesar Transport"
              width={96}
              height={96}
              className={`block dark:hidden h-18 w-18 lg:h-24 lg:w-24 will-change-transform transition-all duration-500 ease-in-out ${
                isScrolled ? 'scale-[1.3]' : 'scale-100'
              }`}
            />
            <Image
              src="/logolight.svg"
              alt="Cesar Transport"
              width={96}
              height={96}
              className={`hidden dark:block h-18 w-18 lg:h-24 lg:w-24 will-change-transform transition-all duration-500 ease-in-out ${
                isScrolled ? 'scale-[1.3]' : 'scale-100'
              }`}
            />
          </Link>
          <span
            className={`inline text-xl lg:text-2xl font-bold uppercase tracking-wider transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              isScrolled ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
            }`}
          >
            Cesar Transport
          </span>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isScrolled ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
          }`}
        >
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
