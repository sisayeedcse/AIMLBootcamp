'use client';

import { useEffect, useRef, useState } from 'react';

export default function LearningCurveLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const timer = setTimeout(() => setHasAnimated(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:block w-full overflow-hidden my-6"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12"
      >
        <path
          d="M 10 50 C 250 50, 450 35, 650 20 C 800 8, 920 6, 990 6"
          stroke="#F9A318"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: hasAnimated ? 0 : 1000,
            transition: 'stroke-dashoffset 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        />
        {[
          { cx: 10, cy: 50 },
          { cx: 250, cy: 46 },
          { cx: 500, cy: 30 },
          { cx: 750, cy: 14 },
          { cx: 990, cy: 6 },
        ].map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r="4"
            fill="#F9A318"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transition: `opacity 0.3s ease ${0.2 + i * 0.25}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
