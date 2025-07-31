'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '' 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}