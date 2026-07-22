'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/common/ScrollReveal';
import { TECH_STACK } from '@/lib/constants';
import { Terminal, Calculator, Table, LineChart, Palette, Brain, MonitorPlay, Save, GitBranch, GitPullRequest, Code, Cloud } from 'lucide-react';

const CATEGORIES = ['All', 'Language', 'Data', 'Visualization', 'ML', 'Deployment', 'Tools'];

const TECH_ICONS: Record<string, any> = {
  Python: Terminal,
  NumPy: Calculator,
  Pandas: Table,
  Matplotlib: LineChart,
  Seaborn: Palette,
  'Scikit-learn': Brain,
  Streamlit: MonitorPlay,
  Joblib: Save,
  Git: GitBranch,
  GitHub: GitPullRequest,
  'VS Code': Code,
  'Google Colab': Cloud,
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[300px]" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,176,0,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((tech, i) => {
            const Icon = TECH_ICONS[tech.name];
            return (
              <ScrollReveal key={tech.name} delay={i * 0.05} direction="up">
                <motion.div
                  className="glass-card p-6 h-full cursor-default relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: tech.color }} />
                  
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                    style={{ background: `${tech.color}15`, border: `1px solid ${tech.color}30` }}
                  >
                    {Icon && <Icon className="w-6 h-6" style={{ color: tech.color }} />}
                  </div>
                  
                  <h3 className="font-bold text-white text-lg mb-3 relative z-10">{tech.name}</h3>
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {tech.description}
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
