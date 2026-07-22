'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, Download, BookOpen, ArrowRight } from 'lucide-react';
import NeuralNetworkCanvas from '@/components/effects/NeuralNetworkCanvas';
import { EVENT } from '@/lib/constants';
import ieeeCsLogo from '@/assets/logos/ieee-cs.png';
import ieeePuSbLogo from '@/assets/logos/ieee-pu-sb.png';
import premierUniversityLogo from '@/assets/logos/premier-university.png';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

const TYPEWRITER_WORDS = ['Intelligence', 'Innovation', 'Deployment', 'Excellence'];

function TypewriterText() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[currentWord];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  return (
    <span className="gradient-text">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-[0.9em] ml-1 align-middle"
        style={{ background: '#FFB000' }}
      />
    </span>
  );
}

const HERO_CHIPS = [
  { label: 'Premier University, Chattogram', icon: MapPin },
  { label: 'Aug 25 – Oct 1, 2026', icon: Calendar },
];

const CTA_ACTIONS = [
  {
    id: 'cta-register',
    label: 'Register Now',
    href: '#registration',
    primary: true,
    icon: ArrowRight,
  },
  {
    id: 'cta-curriculum',
    label: 'View Curriculum',
    href: '#curriculum',
    primary: false,
    icon: BookOpen,
  },
  {
    id: 'cta-brochure',
    label: 'Download Brochure',
    href: '#',
    primary: false,
    icon: Download,
  },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    if (!href || href === '#') return;
    try {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      // Ignore invalid selectors
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,176,0,0.08) 0%, #050508 60%)' }}
    >
      {/* Neural Network */}
      <NeuralNetworkCanvas />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,176,0,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Top badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#FFB000' }}>
              IEEE Computer Society · Premier University SB Chapter
            </span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-display font-bold leading-tight mb-2" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
            <span className="text-white">IEEE AI/ML</span>
            <br />
            <span className="gradient-text">Bootcamp 2.0</span>
          </h1>
        </motion.div>

        {/* Subtitle with typewriter */}
        <motion.p
          className="mt-4 text-xl md:text-2xl font-medium"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          From Fundamentals to&nbsp;<TypewriterText />
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-base md:text-lg tracking-[0.25em] uppercase font-semibold"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {EVENT.tagline}
        </motion.p>

        {/* Info chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {HERO_CHIPS.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
            >
              <Icon className="w-4 h-4" style={{ color: '#FFB000' }} />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {CTA_ACTIONS.map(({ id, label, href, primary, icon: Icon }) => (
            <motion.button
              key={id}
              id={id}
              onClick={() => handleScroll(href)}
              className={`group flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base transition-all ${
                primary ? 'btn-ieee' : 'btn-outline-ieee'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {label}
              <Icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[
            { value: '5', label: 'Weeks of Training' },
            { value: '100+', label: 'Participants' },
            { value: '5', label: 'Learning Stages' },
            { value: '100%', label: 'Hands-On' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{ background: 'rgba(5,5,8,0.9)' }}
            >
              <span className="text-2xl md:text-3xl font-bold font-display gradient-text">{value}</span>
              <span className="text-xs mt-1 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Organizer logos removed from Hero */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(255,176,0,0.5)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
