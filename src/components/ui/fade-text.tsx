'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeTextProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  blur?: boolean;
  className?: string;
}

export function FadeText({ 
  children, 
  duration = 0.8, 
  delay = 0, 
  blur = false, 
  className = '' 
}: FadeTextProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,
        filter: blur ? 'blur(4px)' : 'blur(0px)' 
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)' 
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}