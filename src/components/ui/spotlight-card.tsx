'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({ 
  children, 
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.15)'
}: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}