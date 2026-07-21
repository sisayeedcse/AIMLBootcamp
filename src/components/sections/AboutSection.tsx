'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Zap, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import { STATS_2025 } from '@/lib/constants';

const ICONS: Record<string, typeof Target> = { Target, Eye, Zap };

const VISION_CARDS = [
  {
    icon: 'Eye',
    title: 'Our Vision',
    description:
      'To cultivate a generation of AI-ready engineers in Bangladesh who can build, deploy, and innovate with machine learning technology — bridging the gap between classroom theory and industry practice.',
    color: '#FFB000',
  },
  {
    icon: 'Target',
    title: 'Our Mission',
    description:
      'To deliver a world-class, project-driven AI/ML learning experience that equips students with the Python skills, machine learning knowledge, and deployment capabilities demanded by the modern tech industry.',
    color: '#3B82F6',
  },
  {
    icon: 'Zap',
    title: 'Why Bootcamp 2.0',
    description:
      'Building on the resounding success of Bootcamp 2025, version 2.0 introduces enhanced curriculum depth, a structured AI Innovation Challenge, expanded IEEE networking opportunities, and a formal capstone deployment showcase.',
    color: '#8B5CF6',
  },
];

const OBJECTIVES = [
  'Provide a structured Python and AI/ML learning pathway for beginners',
  'Develop practical, industry-applicable data science and ML skills',
  'Foster collaborative learning through team-based capstone projects',
  'Strengthen the IEEE CS community at Premier University',
  'Enable students to build portfolio-worthy deployed AI applications',
  'Bridge the gap between academic knowledge and industry expectations',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,176,0,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">About the Bootcamp</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Transforming Students Into{' '}
            <span className="gradient-text">AI Engineers</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A 10-day intensive, project-based learning experience that takes you from Python fundamentals to deploying real-world AI applications — designed for beginners, crafted by IEEE.
          </p>
        </ScrollReveal>

        {/* Vision/Mission/Why Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {VISION_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <ScrollReveal key={card.title} delay={i * 0.1} direction="up">
                <div className="glass-card p-7 h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Objectives + 2025 Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Objectives */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
                What We&apos;re Building <span className="gradient-text">Together</span>
              </h3>
              <ul className="space-y-4">
                {OBJECTIVES.map((obj, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FFB000' }} />
                    {obj}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 2025 Achievements */}
          <ScrollReveal direction="right">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(145deg, rgba(255,176,0,0.08), rgba(255,176,0,0.03))',
                border: '1px solid rgba(255,176,0,0.2)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#FFB000' }}>
                  Bootcamp 2025 — Proven Track Record
                </p>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-8">
                The Numbers Speak for Themselves
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {STATS_2025.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: 'rgba(5,5,8,0.6)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-3xl font-bold font-display gradient-text">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t" style={{ borderColor: 'rgba(255,176,0,0.15)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Participants built portfolio projects, earned certificates, and left with practical AI/ML skills ready for the job market.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
