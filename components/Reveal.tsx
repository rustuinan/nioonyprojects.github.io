'use client';

import { motion } from 'framer-motion';

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className}>
      {children}
    </motion.div>
  );
}
