'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-AM.svg"
              alt="Alberto Maserati"
              width={32}
              height={32}
              
            />
            <span className="font-josefin font-bold text-lg hidden sm:inline">Alberto Maserati</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              locale={locale === 'en' ? 'it' : 'en'}
              className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {locale === 'en' ? 'IT' : 'EN'}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
