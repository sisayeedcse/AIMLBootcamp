'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(FAQS.map(faq => faq.category).filter(Boolean)))];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQS 
    : FAQS.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="section-padding relative bg-[#07070A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,176,0,0.1)', border: '1px solid rgba(255,176,0,0.2)' }}>
              <MessageCircleQuestion className="w-6 h-6 text-[#FFB000]" />
            </div>
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Everything you need to know about the bootcamp format, requirements, and logistics.
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10" delay={0.1}>
          {categories.map(cat => (
            <button
              key={cat || 'unknown'}
              onClick={() => { setActiveCategory(cat || 'All'); setOpenIndex(null); }}
              className="px-4 py-2 rounded-full text-xs font-medium transition-all"
              style={{
                background: activeCategory === cat ? 'rgba(255,176,0,0.15)' : 'rgba(255,255,255,0.03)',
                border: activeCategory === cat ? '1px solid rgba(255,176,0,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: activeCategory === cat ? '#FFB000' : 'rgba(255,255,255,0.6)'
              }}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <div 
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{ 
                    background: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isOpen ? 'rgba(255,176,0,0.3)' : 'rgba(255,255,255,0.06)'}`
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <span className="font-medium text-sm sm:text-base text-white pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" style={{ color: isOpen ? '#FFB000' : 'rgba(255,255,255,0.4)' }} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            {faq.answer}
                          </p>
                          {faq.category && (
                            <div className="mt-4 inline-block px-2 py-1 rounded text-[10px] uppercase tracking-wider font-semibold" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                              {faq.category}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
