'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EVENT_CONFIG from '@/config/event';

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
    <nav className="sticky top-0 bg-black/95 border-b border-[#2b2b2b] z-50 backdrop-blur-md">
      <div className="wrap flex items-center justify-between h-16">
        <Link className="brand text-white font-display font-bold text-[15px] no-underline hover:text-white" href="/">
          {EVENT_CONFIG.name}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7 list-none p-0 m-0 text-[15px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`no-underline transition-colors hover:text-white ${
                  pathname === link.href ? 'text-white font-medium' : 'text-[#a8a8a8]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link className="btn primary text-sm !py-2 !px-4" href="/apply">
            Apply
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#a8a8a8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2b2b2b] bg-black px-6 py-4">
          <ul className="flex flex-col gap-4 list-none p-0 m-0 text-[15px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-[#a8a8a8] hover:text-white py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
