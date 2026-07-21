'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/common/ScrollReveal';
import { TECH_STACK } from '@/lib/constants';

const CATEGORIES = ['All', 'Language', 'Data', 'Visualization', 'ML', 'Deployment', 'Tools'];

const TECH_ICONS: Record<string, string> = {
  Python: '🐍',
  NumPy: '🔢',
  Pandas: '🐼',
  Matplotlib: '📊',
  Seaborn: '🎨',
  'Scikit-learn': '🤖',
  Streamlit: '⚡',
  Joblib: '💾',
  Git: '🔧',
  GitHub: '🐙',
  'VS Code': '💻',
  'Google Colab': '☁️',
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filtered =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[300px]" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,176,0,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Technology Stack</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Industry-Standard <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Every tool you&apos;ll master is used daily by professional AI engineers and data scientists worldwide.
          </p>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10" delay={0.1}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]"
              style={
                activeCategory === cat
                  ? { background: 'rgba(255,176,0,0.15)', border: '1px solid rgba(255,176,0,0.4)', color: '#FFB000' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 0.05}>
              <motion.div
                className="glass-card p-5 text-center cursor-default relative overflow-hidden"
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                whileHover={{ scale: 1.04, y: -4 }}
              >
                {/* Color accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                />
                <div className="text-3xl mb-3">{TECH_ICONS[tech.name] || '🔬'}</div>
                <p className="font-bold text-white text-sm">{tech.name}</p>
                <span
                  className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: `${tech.color}18`, color: tech.color }}
                >
                  {tech.category}
                </span>

                {/* Hover tooltip */}
                {hoveredTech === tech.name && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-3 rounded-xl"
                    style={{ background: 'rgba(5,5,8,0.92)', backdropFilter: 'blur(8px)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs leading-relaxed text-center" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tech.description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
