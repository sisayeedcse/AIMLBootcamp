'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, Users, Zap, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from '@/components/common/ScrollReveal';
import { REGISTRATION_TIERS, EVENT } from '@/lib/constants';
import { formatCountdown } from '@/lib/utils';

function CountdownTimer({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState(formatCountdown(deadline));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(formatCountdown(deadline));
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  if (!isMounted) return <div className="h-[72px]" />; // Placeholder to prevent layout shift

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4 mb-10">
      {timeBlocks.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="glass-card w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl mb-2">
            <span className="font-display font-bold text-2xl sm:text-3xl gradient-text">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function RegistrationSection() {
  const progressPercentage = (EVENT.registration.seatsLeft / EVENT.registration.totalSeats) * 100;

  const handleRegisterClick = (tierTitle: string) => {
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFB000', '#3B82F6', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFB000', '#3B82F6', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Alert for demo purposes (would normally open a form/link)
    alert(`Registration process initiated for: ${tierTitle}`);
  };

  return (
    <section id="registration" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(255,176,0,0.05) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="section-label mx-auto mb-6">Secure Your Spot</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Registration <span className="gradient-text">Open Now</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Choose the tier that applies to you. Seats are strictly limited to ensure quality mentorship.
          </p>
          
          {/* Countdown */}
          <div className="mb-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold" style={{ color: '#FFB000' }}>
              <Clock className="w-4 h-4" /> Registration closes in:
            </div>
            <CountdownTimer deadline={EVENT.registration.deadline} />
          </div>

        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REGISTRATION_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 0.1} direction="up" className="flex">
              <div 
                className={`w-full flex flex-col rounded-2xl relative transition-all duration-300 ${tier.highlighted ? 'scale-100 md:scale-105 z-10' : 'scale-100'}`}
                style={{
                  background: tier.highlighted ? 'rgba(20,20,25,0.95)' : 'rgba(10,10,15,0.9)',
                  border: `1px solid ${tier.highlighted ? 'rgba(255,176,0,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  boxShadow: tier.highlighted ? '0 0 40px rgba(255,176,0,0.15), 0 8px 32px rgba(0,0,0,0.5)' : '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#FFB000] text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-[0_0_15px_rgba(255,176,0,0.5)]">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <h3 className="font-display font-bold text-xl text-white mb-1">{tier.title}</h3>
                  <p className="text-xs min-h-[32px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{tier.subtitle}</p>
                  
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-sm font-bold" style={{ color: '#FFB000' }}>{tier.currency}</span>
                    <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                  </div>
                </div>

                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.highlighted ? '#FFB000' : '#10B981' }} />
                        <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.7)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleRegisterClick(tier.title)}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      tier.highlighted 
                        ? 'btn-ieee text-black hover:shadow-[0_0_20px_rgba(255,176,0,0.4)]' 
                        : 'bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    Register Now <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
