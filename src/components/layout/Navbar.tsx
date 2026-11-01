'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EVENT from '@/config/event';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === '/';

  const navLinks = [
    { label: 'Journey', href: isHome ? '#journey' : '/#journey' },
    { label: 'Selection', href: isHome ? '#selection' : '/#selection' },
    { label: 'Curriculum', href: '/curriculum' },
    { label: 'Fees', href: isHome ? '#fees' : '/#fees' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="site-header">
      <nav className="wrap flex items-center justify-between h-16" aria-label="Main Navigation">
        <Link className="wordmark hover:text-accent transition-colors duration-150" href="/">
          {EVENT.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none p-0 m-0 text-[15px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`transition-colors duration-150 ${
                  pathname === link.href ? 'text-text font-medium' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link className="btn btn-primary text-sm !min-h-[38px] !py-2 !px-4" href="/apply">
            Apply
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-text rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-black px-5 py-4">
          <ul className="flex flex-col gap-4 list-none p-0 m-0 text-[15px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-muted hover:text-text py-1 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
