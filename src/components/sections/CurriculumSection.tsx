'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Wifi, Building2, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { CURRICULUM } from '@/lib/constants';

export default function CurriculumSection() {
  const [openPhase, setOpenPhase] = useState<number>(0);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section id="curriculum" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Curriculum</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Structured <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Two phases. Ten days. A complete journey from Python fundamentals to deployed AI applications.
          </p>
        </ScrollReveal>

        {/* Phase tabs */}
        <ScrollReveal className="flex gap-3 mb-8 flex-wrap" delay={0.1}>
          {CURRICULUM.map((phase, pi) => (
            <button
              key={pi}
              onClick={() => { setOpenPhase(pi); setOpenModule(0); }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]"
              style={
                openPhase === pi
                  ? { background: 'rgba(255,176,0,0.15)', border: '1px solid rgba(255,176,0,0.4)', color: '#FFB000' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }
              }
            >
              {phase.type === 'online' ? <Wifi className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
              {phase.type === 'online' ? 'Phase 1 · Online' : 'Phase 2 · Offline'}
            </button>
          ))}
        </ScrollReveal>

        {/* Phase content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={openPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-5 p-4 rounded-xl" style={{ background: 'rgba(255,176,0,0.06)', border: '1px solid rgba(255,176,0,0.15)' }}>
              <p className="text-sm font-semibold" style={{ color: '#FFB000' }}>{CURRICULUM[openPhase].phase}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{CURRICULUM[openPhase].dates}</p>
            </div>

            <div className="space-y-3">
              {CURRICULUM[openPhase].modules.map((mod, mi) => (
                <ScrollReveal key={mi} delay={mi * 0.06}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: `1px solid ${openModule === mi ? 'rgba(255,176,0,0.3)' : 'rgba(255,255,255,0.06)'}`, background: openModule === mi ? 'rgba(255,176,0,0.05)' : 'rgba(255,255,255,0.03)' }}
                  >
                    <button
                      onClick={() => setOpenModule(openModule === mi ? null : mi)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FFB000]"
                    >
                      <div>
                        <p className="font-semibold text-white text-sm">{mod.title}</p>
                        {mod.duration && <p className="text-xs mt-0.5" style={{ color: 'rgba(255,176,0,0.7)' }}>{mod.duration}</p>}
                      </div>
                      <motion.div
                        animate={{ rotate: openModule === mi ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" style={{ color: openModule === mi ? '#FFB000' : 'rgba(255,255,255,0.4)' }} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openModule === mi && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                            {mod.description && (
                              <p className="text-sm mt-4 mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                {mod.description}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {mod.topics.map((topic, ti) => (
                                <li key={ti} className="flex items-start gap-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#FFB000' }} />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
