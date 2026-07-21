'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setIsVisible(v > 0.01));
    return unsub;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #FFB000, #FF8C00, #FFB000)',
        opacity: isVisible ? 1 : 0,
        boxShadow: '0 0 12px rgba(255,176,0,0.6)',
      }}
      aria-hidden="true"
    />
  );
}
