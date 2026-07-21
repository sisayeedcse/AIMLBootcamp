'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: '#050508' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Neural SVG animation */}
          <div className="relative mb-10">
            <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
              {/* Nodes */}
              {[
                { cx: 60, cy: 20 },
                { cx: 20, cy: 60 },
                { cx: 100, cy: 60 },
                { cx: 40, cy: 95 },
                { cx: 80, cy: 95 },
                { cx: 60, cy: 60 },
              ].map((pos, i) => (
                <motion.circle
                  key={i}
                  cx={pos.cx}
                  cy={pos.cy}
                  r="5"
                  fill="#FFB000"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                />
              ))}
              {/* Connections */}
              {[
                [60, 20, 20, 60],
                [60, 20, 100, 60],
                [20, 60, 60, 60],
                [100, 60, 60, 60],
                [60, 60, 40, 95],
                [60, 60, 80, 95],
                [20, 60, 40, 95],
                [100, 60, 80, 95],
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]}
                  stroke="#FFB000"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.6, 0.3, 0.6] }}
                  transition={{ delay: i * 0.08, duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                />
              ))}
            </svg>
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,176,0,0.15) 0%, transparent 70%)',
              }}
            />
          </div>

          <motion.p
            className="text-white font-semibold text-lg mb-1 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            IEEE AI/ML Bootcamp 2.0
          </motion.p>
          <motion.p
            className="text-sm mb-8 tracking-widest uppercase"
            style={{ color: '#FFB000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing Experience
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, #FFB000, #FF8C00)',
                boxShadow: '0 0 12px rgba(255,176,0,0.6)',
                transition: 'width 0.08s ease-out',
              }}
            />
          </div>
          <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
