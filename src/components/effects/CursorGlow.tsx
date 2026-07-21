'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Glow follows instantly
      glow.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;

      // Ring lags behind
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12;
      ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;

      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animRef.current = requestAnimationFrame(animate);

    const onEnter = () => {
      glow.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const onLeave = () => {
      glow.style.opacity = '0';
      ring.style.opacity = '0';
    };

    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Glow dot */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className="w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,176,0,0.9) 0%, rgba(255,176,0,0) 70%)',
            boxShadow: '0 0 20px 8px rgba(255,176,0,0.3)',
          }}
        />
      </div>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className="w-10 h-10 rounded-full border -translate-x-1/2 -translate-y-1/2"
          style={{ borderColor: 'rgba(255,176,0,0.3)' }}
        />
      </div>
    </>
  );
}
