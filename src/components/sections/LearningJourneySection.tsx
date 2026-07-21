'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { LEARNING_STAGES } from '@/lib/constants';

type LucideIconName = keyof typeof LucideIcons;

export default function LearningJourneySection() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,176,0,0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Learning Journey</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Your Path to <span className="gradient-text">AI Mastery</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Five structured stages designed to progressively build your skills from zero to deployment-ready.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,176,0,0.4) 10%, rgba(255,176,0,0.4) 90%, transparent)' }} />

          <div className="space-y-12">
            {LEARNING_STAGES.map((stage, i) => {
              const Icon = LucideIcons[stage.icon as LucideIconName] as React.ElementType;
              const isLeft = i % 2 === 0;
              const isActive = activeStage === stage.stage;

              return (
                <ScrollReveal
                  key={stage.stage}
                  direction={isLeft ? 'left' : 'right'}
                  delay={i * 0.1}
                >
                  <div className={`relative flex flex-col md:flex-row items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card */}
                    <motion.div
                      className="w-full md:w-[calc(50%-3rem)] glass-card p-6 cursor-pointer"
                      onClick={() => setActiveStage(isActive ? null : stage.stage)}
                      whileHover={{ scale: 1.02 }}
                      style={{
                        borderColor: isActive ? `${stage.color}40` : undefined,
                        boxShadow: isActive ? `0 0 30px ${stage.color}15` : undefined,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${stage.color}18`, border: `1px solid ${stage.color}30` }}
                        >
                          {Icon && <Icon className="w-5 h-5" style={{ color: stage.color }} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: stage.color }}>
                              Stage {stage.stage}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-lg text-white">{stage.title}</h3>
                          <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{stage.description}</p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Key Topics</p>
                              <div className="flex flex-wrap gap-2">
                                {stage.topics.map((topic) => (
                                  <span
                                    key={topic}
                                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                                    style={{ background: `${stage.color}15`, color: stage.color, border: `1px solid ${stage.color}25` }}
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                        style={{
                          background: stage.color,
                          boxShadow: `0 0 20px ${stage.color}50`,
                          color: '#000',
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {stage.stage}
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal className="mt-12 text-center" delay={0.3}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Click any stage to explore the topics covered
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
