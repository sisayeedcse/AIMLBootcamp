'use client';

import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Rocket, Heart, Users, Star } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { AWARDS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = { Trophy, Lightbulb, Rocket, Heart };

const JUDGING_CRITERIA = [
  { label: 'Technical Excellence', weight: 30, description: 'Quality of ML model, feature engineering, and code structure' },
  { label: 'Innovation & Creativity', weight: 25, description: 'Originality of problem choice and solution approach' },
  { label: 'Deployment Quality', weight: 25, description: 'User experience, stability, and production readiness of the app' },
  { label: 'Presentation & Communication', weight: 20, description: 'Clarity, confidence, and ability to answer judge questions' },
];

export default function InnovationChallengeSection() {
  return (
    <section id="challenge" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(255,176,0,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">AI Innovation Challenge</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Compete. Innovate. <span className="gradient-text">Win.</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The AI Innovation Challenge transforms the capstone into a friendly competition. Build the most impressive AI application, present it to a panel of expert judges, and earn recognition for your work.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Competition info */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5" style={{ color: '#FFB000' }} />
                  <h3 className="font-semibold text-white">Competition Format</h3>
                </div>
                <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <li>• Teams of 2–4 students per group</li>
                  <li>• Each team selects a unique real-world problem domain</li>
                  <li>• Development spans the full 10-day bootcamp</li>
                  <li>• Final presentations on Demo Day (September 7)</li>
                  <li>• Audience and peer voting for People&apos;s Choice Award</li>
                </ul>
              </div>

              {/* Judging criteria */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Star className="w-5 h-5" style={{ color: '#FFB000' }} />
                  <h3 className="font-semibold text-white">Judging Criteria</h3>
                </div>
                <div className="space-y-4">
                  {JUDGING_CRITERIA.map((criterion) => (
                    <div key={criterion.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-white">{criterion.label}</span>
                        <span className="text-xs font-bold" style={{ color: '#FFB000' }}>{criterion.weight}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #FFB000, #FF8C00)' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${criterion.weight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                      <p className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{criterion.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Awards */}
          <ScrollReveal direction="right">
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              Awards & <span className="gradient-text">Recognition</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AWARDS.map((award, i) => {
                const Icon = ICON_MAP[award.icon] || Trophy;
                const colors = ['#FFB000', '#3B82F6', '#10B981', '#EC4899'];
                const color = colors[i % colors.length];
                return (
                  <motion.div
                    key={award.title}
                    className="glass-card p-5"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                    </div>
                    <h4 className="font-bold text-white mb-2">{award.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {award.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="mt-6 p-5 rounded-xl text-center"
              style={{ background: 'rgba(255,176,0,0.06)', border: '1px solid rgba(255,176,0,0.2)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">All Participants</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Receive official certificates, IEEE recognition, and permanent GitHub portfolio projects regardless of competition outcome.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
