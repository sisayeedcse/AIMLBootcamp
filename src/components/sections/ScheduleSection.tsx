'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Wifi, Building2, Presentation, FlaskConical, Rocket, Coffee } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { SCHEDULE } from '@/lib/constants';

const SESSION_COLORS: Record<string, string> = {
  lecture: '#3B82F6',
  lab: '#10B981',
  project: '#8B5CF6',
  break: 'rgba(255,255,255,0.2)',
  keynote: '#FFB000',
};

const SESSION_ICONS: Record<string, React.ElementType> = {
  lecture: Presentation,
  lab: FlaskConical,
  project: Rocket,
  break: Coffee,
  keynote: Presentation,
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);
  const day = SCHEDULE[activeDay];

  return (
    <section id="schedule" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Schedule</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Day-by-Day <span className="gradient-text">Bootcamp Plan</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A structured daily agenda designed for maximum learning impact — from morning sessions to evening wrap-ups.
          </p>
        </ScrollReveal>

        {/* Phase labels */}
        <ScrollReveal className="mb-6 flex flex-wrap gap-4 items-center justify-center" delay={0.1}>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Wifi className="w-4 h-4" style={{ color: '#3B82F6' }} />
            Days 1–3: Online Python Foundation (Aug 25–27)
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Building2 className="w-4 h-4" style={{ color: '#FFB000' }} />
            Days 4–8: Offline AI/ML Bootcamp (Sep 3–7)
          </div>
        </ScrollReveal>

        {/* Day selector */}
        <ScrollReveal className="mb-8 overflow-x-auto pb-2" delay={0.15}>
          <div className="flex gap-2 min-w-max mx-auto w-fit">
            {SCHEDULE.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className="flex flex-col items-center px-4 py-3 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] min-w-[80px]"
                style={
                  activeDay === i
                    ? {
                        background: d.type === 'online' ? 'rgba(59,130,246,0.2)' : 'rgba(255,176,0,0.15)',
                        border: `1px solid ${d.type === 'online' ? 'rgba(59,130,246,0.5)' : 'rgba(255,176,0,0.4)'}`,
                        color: d.type === 'online' ? '#60A5FA' : '#FFB000',
                      }
                    : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
                }
              >
                <span className="text-[10px] uppercase tracking-wider">{d.type === 'online' ? 'Online' : 'Offline'}</span>
                <span className="text-base font-bold mt-0.5">Day {d.day}</span>
                <span className="text-[10px] mt-0.5 text-center leading-tight">{d.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Day detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Day header */}
            <div className="glass-card p-5 mb-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {day.type === 'online'
                    ? <Wifi className="w-4 h-4" style={{ color: '#60A5FA' }} />
                    : <Building2 className="w-4 h-4" style={{ color: '#FFB000' }} />}
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: day.type === 'online' ? '#60A5FA' : '#FFB000' }}>
                    {day.type === 'online' ? 'Online Session' : 'Offline at Premier University'}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">Day {day.day}: {day.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Clock className="w-4 h-4" />
                {day.date}
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-3">
              {day.sessions.map((session, si) => {
                const Icon = SESSION_ICONS[session.type] || Presentation;
                const color = SESSION_COLORS[session.type] || '#fff';
                return (
                  <motion.div
                    key={si}
                    className="glass-card p-4 flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: si * 0.06 }}
                    style={session.type === 'break' ? { opacity: 0.6 } : {}}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="font-semibold text-white text-sm">{session.topic}</p>
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          <Clock className="w-3 h-3" />
                          {session.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        {session.instructor && (
                          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                            {session.instructor}
                          </span>
                        )}
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                          style={{ background: `${color}18`, color, border: `1px solid ${color}25` }}
                        >
                          {session.type}
                        </span>
                      </div>
                      {session.outcome && (
                        <p className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                          🎯 {session.outcome}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <ScrollReveal className="mt-8 flex flex-wrap gap-4 justify-center" delay={0.2}>
          {Object.entries(SESSION_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
