'use client';

import { ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
  variant?: 'blue' | 'purple' | 'teal' | 'orange';
  className?: string;
}

export function GradientBackground({ 
  children, 
  variant = 'blue',
  className = '' 
}: GradientBackgroundProps) {
  const gradients = {
    blue: 'bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900',
    purple: 'bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-purple-950 dark:via-gray-900 dark:to-purple-900',
    teal: 'bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-teal-950 dark:via-gray-900 dark:to-teal-900',
    orange: 'bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-orange-950 dark:via-gray-900 dark:to-orange-900'
  };

  return (
    <div className={`${gradients[variant]} ${className}`}>
      {children}
    </div>
  );
}