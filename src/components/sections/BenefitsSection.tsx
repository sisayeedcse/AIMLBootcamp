'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { BENEFITS } from '@/lib/constants';

type LucideIconName = keyof typeof LucideIcons;

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding relative overflow-hidden bg-[#0A0A12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(255,176,0,0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Benefits</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Beyond Just <span className="gradient-text">Coding</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The IEEE AI/ML Bootcamp is designed to provide holistic value—boosting your technical skills, expanding your professional network, and accelerating your career.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => {
            const Icon = LucideIcons[benefit.icon as LucideIconName] as React.ElementType;
            const color = benefit.color || '#FFB000';
            return (
              <ScrollReveal key={benefit.title} delay={i * 0.05} direction="up">
                <motion.div
                  className="glass-card p-6 h-full cursor-default relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: color }} />
                  
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    {Icon && <Icon className="w-6 h-6" style={{ color }} />}
                  </div>
                  
                  <h3 className="font-bold text-white text-lg mb-3 relative z-10">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {benefit.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
