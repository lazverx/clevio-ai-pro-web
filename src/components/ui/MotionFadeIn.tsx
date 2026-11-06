'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface MotionFadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const MotionFadeIn: React.FC<MotionFadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = 16;
  const initial = {
    opacity: 0,
    x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

