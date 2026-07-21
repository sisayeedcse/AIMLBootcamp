'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { FEATURE_CARDS } from '@/lib/constants';

type LucideIconName = keyof typeof LucideIcons;

export default function WhyJoinSection() {
  return (
    <section id="why-join" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px]" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(59,130,246,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Why Join</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Everything You Need to{' '}
            <span className="gradient-text">Level Up</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            From beginner to AI engineer in 5 weeks — with mentorship, hands-on labs, networking, and a portfolio project to show for it.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURE_CARDS.map((card, i) => {
            const Icon = LucideIcons[card.icon as LucideIconName] as React.ElementType;
            return (
              <ScrollReveal key={card.title} delay={i * 0.06} direction="up">
                <motion.div
                  className="glass-card p-6 h-full group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{
                      background: 'rgba(255,176,0,0.1)',
                      border: '1px solid rgba(255,176,0,0.2)',
                    }}
                  >
                    {Icon && <Icon className="w-5 h-5" style={{ color: '#FFB000' }} />}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{card.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {card.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Target audience pill */}
        <ScrollReveal className="mt-12 text-center" delay={0.3}>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Designed for
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Undergraduate Students',
              'IEEE Student Members',
              'IEEE CS Members',
              'Future AI Engineers',
              'Beginners in AI/ML',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
