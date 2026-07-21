'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Award, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ieeeCsLogo from '@/assets/logos/ieee-cs.png';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

const CS_BENEFITS = [
  { icon: BookOpen, title: 'Digital Library', desc: 'Access to over 800,000 articles, conference papers, and magazines in computing.' },
  { icon: Globe, title: 'Global Network', desc: 'Connect with over 60,000 computing professionals and students worldwide.' },
  { icon: Award, title: 'Certifications', desc: 'Discounts on industry-recognized professional certifications and courses.' },
  { icon: Users, title: 'Local Community', desc: 'Join an active local community at Premier University for hands-on learning.' },
];

export default function IEEESection() {
  return (
    <section id="ieee-cs" className="section-padding relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-[#FFB000] opacity-[0.03] blur-[100px] rounded-full" />
        <div className="absolute right-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,176,0,0.2)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: About Content */}
          <ScrollReveal direction="left">
            <div className="section-label mb-6">Powered By</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              IEEE Computer Society <br />
              <span className="text-xl md:text-2xl mt-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Premier University Student Branch Chapter
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The IEEE Computer Society is the world&apos;s leading membership organization for computing professionals. By joining our local chapter at Premier University, you unlock a world of technical resources, networking opportunities, and career-building experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.computer.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ieee px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group w-fit"
              >
                Become a Member
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://ieee.pu.edu.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ieee px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-fit"
              >
                Learn More About Us
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Benefits Grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CS_BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="glass-card p-6 cursor-default"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,176,0,0.1)', border: '1px solid rgba(255,176,0,0.2)' }}>
                      <Icon className="w-5 h-5 text-[#FFB000]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{benefit.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Logos */}
            <div className="mt-8 flex items-center justify-center sm:justify-start gap-6 opacity-90">
              <div className="relative w-32 h-12 bg-white rounded-md p-1 transition-transform hover:scale-105">
                <Image src={ieeeCsLogo} alt="IEEE CS Logo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-1" />
              </div>
              <div className="relative w-40 h-12 bg-white rounded-md p-1 transition-transform hover:scale-105">
                <Image src={chapterLogo} alt="PU SB Chapter Logo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-1" />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
