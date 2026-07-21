'use client';

import { motion } from 'framer-motion';
import { Database, Brain, Rocket, Presentation, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const CAPSTONE_STAGES = [
  { icon: Database, label: 'Data Collection', desc: 'Identify and acquire a real-world dataset for your chosen problem domain.' },
  { icon: Brain, label: 'Model Training', desc: 'Build, train, and evaluate machine learning models with Scikit-learn.' },
  { icon: Rocket, label: 'Deployment', desc: 'Deploy your trained model as a live, interactive Streamlit web application.' },
  { icon: Presentation, label: 'Presentation', desc: 'Present your live application to a panel of expert judges on Demo Day.' },
];

const PROJECT_IDEAS = [
  'Disease Prediction System',
  'Customer Churn Predictor',
  'Spam Email Classifier',
  'House Price Estimator',
  'Sentiment Analysis App',
  'Student Performance Predictor',
];

export default function CapstoneSection() {
  return (
    <section id="capstone" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px]" style={{ background: 'radial-gradient(ellipse at top right, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Capstone Project</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Build Something <span className="gradient-text">Real</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The capstone project is the culmination of the bootcamp. Over 10 days, you and your team will design, build, and deploy a complete AI application — a live, working product you&apos;re proud to show the world.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Process */}
          <ScrollReveal direction="left">
            <h3 className="font-display font-bold text-2xl text-white mb-8">
              The <span className="gradient-text">Development Pipeline</span>
            </h3>
            <div className="space-y-1">
              {CAPSTONE_STAGES.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.label}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                      whileHover={{ background: 'rgba(255,176,0,0.05)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(255,176,0,0.1)', border: '1px solid rgba(255,176,0,0.2)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#FFB000' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{stage.label}</p>
                        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{stage.desc}</p>
                      </div>
                    </motion.div>
                    {i < CAPSTONE_STAGES.length - 1 && (
                      <div className="flex justify-start ml-9 py-1">
                        <ArrowRight className="w-4 h-4 rotate-90" style={{ color: 'rgba(255,176,0,0.3)' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: What you build */}
          <ScrollReveal direction="right">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(145deg, rgba(139,92,246,0.08), rgba(59,130,246,0.04))',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                What You&apos;ll Walk Away With
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                A fully deployed AI application — live on GitHub and accessible to anyone.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'A real ML model trained on real data', highlight: true },
                  { label: 'A Streamlit web app with a beautiful UI', highlight: false },
                  { label: 'GitHub repository with clean documentation', highlight: false },
                  { label: 'Public URL you can share with employers', highlight: true },
                  { label: 'Presentation skills from Demo Day', highlight: false },
                  { label: 'Portfolio project for your resume & LinkedIn', highlight: true },
                ].map(({ label, highlight }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: highlight ? '#FFB000' : 'rgba(255,255,255,0.3)' }}
                    />
                    <span className="text-sm" style={{ color: highlight ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Example project ideas
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_IDEAS.map((idea) => (
                    <span
                      key={idea}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {idea}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
