'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Heart, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, EVENT } from '@/lib/constants';
import ieeeCsLogo from '@/assets/logos/ieee-cs.png';
import ieeePuSbLogo from '@/assets/logos/ieee-pu-sb.png';
import premierUniversityLogo from '@/assets/logos/premier-university.jpeg';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

const SOCIAL = [
  { icon: ArrowRight, href: EVENT.contact.facebook, label: 'Facebook' },
  { icon: ArrowRight, href: EVENT.contact.linkedin, label: 'LinkedIn' },
  { icon: ArrowRight, href: EVENT.contact.youtube, label: 'YouTube' },
];

const QUICK_LINKS_1 = NAV_ITEMS.slice(0, 5);
const QUICK_LINKS_2 = NAV_ITEMS.slice(5);

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#030305' }}>
      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,176,0,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-md p-1">
                <Image
                  src={chapterLogo}
                  alt="IEEE CS Premier University SB Chapter"
                  fill className="object-contain p-1"
                />
              </div>
            </div>
            <h3 className="font-bold text-white font-display mb-2">IEEE AI/ML Bootcamp 2.0</h3>
            <p className="text-xs mb-1" style={{ color: '#FFB000' }}>Learn • Build • Deploy</p>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A flagship event by IEEE Computer Society Premier University Student Branch Chapter, Chattogram, Bangladesh.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,176,0,0.15)', borderColor: 'rgba(255,176,0,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {QUICK_LINKS_1.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-sm hover:text-[#FFB000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] rounded"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">More</h4>
            <ul className="space-y-3">
              {QUICK_LINKS_2.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-sm hover:text-[#FFB000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] rounded"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a href={EVENT.contact.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#FFB000] transition-colors flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  IEEE CS Website <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#FFB000' }} />
                <a href={`mailto:${EVENT.contact.email}`} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {EVENT.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#FFB000' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{EVENT.contact.phone}</span>
              </li>
            </ul>

            {/* Partner Logos */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded p-1">
                <Image src={ieeeCsLogo} alt="IEEE CS" fill className="object-contain p-0.5" />
              </div>
              <div className="relative w-10 h-10 bg-white rounded p-1">
                <Image src={premierUniversityLogo} alt="Premier University" fill className="object-contain rounded-sm" />
              </div>
              <div className="relative w-10 h-10 bg-white rounded p-1">
                <Image src={ieeePuSbLogo} alt="IEEE PU SB" fill className="object-contain p-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} IEEE Computer Society Premier University Student Branch Chapter. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Made with <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> by IEEE CS PU SB Chapter
          </p>
        </div>
      </div>
    </footer>
  );
}
