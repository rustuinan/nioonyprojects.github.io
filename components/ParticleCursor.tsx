'use client';

import { useEffect, useRef } from 'react';

export function ParticleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const element = dotRef.current;
    if (!element) return;

    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      element.style.opacity = '1';
    };

    const onLeave = () => {
      element.style.opacity = '0';
    };

    const tick = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      element.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 rounded-full opacity-0 transition-opacity duration-300 md:block"
      style={{
        background: 'radial-gradient(circle, hsla(310,95%,80%,0.55) 0%, hsla(270,90%,70%,0.25) 45%, transparent 70%)',
        filter: 'blur(2px)',
        mixBlendMode: 'screen'
      }}
    />
  );
}
