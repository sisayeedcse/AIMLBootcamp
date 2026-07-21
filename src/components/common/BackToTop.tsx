'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
          style={{
            background: 'rgba(255,176,0,0.15)',
            border: '1px solid rgba(255,176,0,0.4)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 20px rgba(255,176,0,0.2)',
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#FFB000]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
