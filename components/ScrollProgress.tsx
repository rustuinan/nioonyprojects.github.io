'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24, restDelta: 0.001 });

  return <motion.div style={{ scaleX, transformOrigin: '0% 50%' }} className="bg-aurora fixed left-0 right-0 top-0 z-[60] h-1" />;
}
