'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="section-padding relative overflow-hidden bg-[#050508]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Testimonials</div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Hear From Our <span className="gradient-text">Alumni</span>
          </h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div 
            className="overflow-hidden rounded-2xl relative p-8 md:p-12 glass-card"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#FFB000] opacity-20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB000] fill-[#FFB000]" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-base">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-sm" style={{ color: '#FFB000' }}>
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {TESTIMONIALS[currentIndex].batch}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-[#FFB000]' : 'w-2 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
