'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach(({ href }) => {
      try {
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (el) observer.observe(el);
      } catch (e) {
        // Ignore invalid selectors
      }
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!href || href === '#') return;
    try {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      // Ignore invalid selectors
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[60] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5,5,8,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group" aria-label="IEEE AI/ML Bootcamp 2.0 Home">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-white rounded-md p-1">
                <Image
                  src={chapterLogo}
                  alt="IEEE CS Premier University Student Branch Chapter"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight font-display">IEEE AI/ML Bootcamp</p>
                <p className="text-[10px] font-semibold" style={{ color: '#FFB000' }}>2.0 · Premier University</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]"
                  style={{
                    color: activeSection === href.slice(1) ? '#FFB000' : 'rgba(255,255,255,0.65)',
                  }}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: '#FFB000' }}
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={() => handleNavClick('#registration')}
                className="btn-ieee px-5 py-2.5 text-sm font-bold flex items-center gap-1.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(5,5,8,0.95)', backdropFilter: 'blur(20px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="relative flex flex-col items-center justify-center h-full gap-2 px-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.1 }}
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex flex-col items-center">
                <div className="relative w-16 h-16 mb-3 bg-white rounded-md p-1">
                  <Image
                    src={chapterLogo}
                    alt="IEEE CS Premier University SB Chapter"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <p className="text-white font-bold text-lg font-display">IEEE AI/ML Bootcamp 2.0</p>
              </div>
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="w-full max-w-sm text-center py-3 text-lg font-medium rounded-xl transition-colors"
                  style={{ color: activeSection === href.slice(1) ? '#FFB000' : 'rgba(255,255,255,0.8)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#registration')}
                className="btn-ieee mt-6 w-full max-w-sm py-3.5 text-base font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply Now →
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
