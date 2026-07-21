'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Heart, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, EVENT } from '@/lib/constants';
import ieeeCsLogo from '@/assets/logos/ieee-cs.png';
import ieeePuSbLogo from '@/assets/logos/ieee-pu-sb.png';
import premierUniversityLogo from '@/assets/logos/premier-university.jpeg';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const SOCIAL = [
  { icon: FacebookIcon, href: EVENT.contact.facebook, label: 'Facebook' },
  { icon: LinkedinIcon, href: EVENT.contact.linkedin, label: 'LinkedIn' },
  { icon: YoutubeIcon, href: EVENT.contact.youtube, label: 'YouTube' },
  { icon: InstagramIcon, href: EVENT.contact.instagram, label: 'Instagram' },
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
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={chapterLogo}
                  alt="IEEE CS Premier University SB Chapter"
                  fill className="object-contain p-1 brightness-0 invert"
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
            <div className="mt-6 flex flex-wrap items-center gap-6 bg-white/95 border border-white/20 rounded-full px-6 py-3 shadow-lg w-fit">
              <div className="relative w-12 h-12">
                <Image src={ieeeCsLogo} alt="IEEE CS" fill className="object-contain mix-blend-multiply" />
              </div>
              <div className="relative w-12 h-12">
                <Image src={premierUniversityLogo} alt="Premier University" fill className="object-contain mix-blend-multiply" />
              </div>
              <div className="relative w-12 h-12">
                <Image src={ieeePuSbLogo} alt="IEEE PU SB" fill className="object-contain mix-blend-multiply" />
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
