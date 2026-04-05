'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import { useDelayedAction } from '@/lib/useDelayedAction';

type Position = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'right-center';

interface FloatingThemeToggleProps {
  position?: Position;
}

const positionStyles: Record<Position, React.CSSProperties> = {
  'bottom-right': { bottom: '24px', right: '24px' },
  'bottom-left': { bottom: '24px', left: '24px' },
  'top-right': { top: '24px', right: '24px' },
  'top-left': { top: '24px', left: '24px' },
  'right-center': { right: '24px', top: '50%', transform: 'translateY(-50%)' },
};

export default function FloatingThemeToggle({ position = 'bottom-right' }: FloatingThemeToggleProps) {
  const { theme, toggleTheme } = useAppStore();
  const { isDelayed, executeDelayed } = useDelayedAction(2000);

  const handleToggle = () => {
    executeDelayed(() => toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isDelayed}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="fixed w-14 h-14 rounded-full flex items-center justify-center text-2xl z-50 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
      style={{
        ...positionStyles[position],
        background: theme === 'light' 
          ? 'rgba(0, 82, 204, 0.9)' 
          : 'rgba(0, 217, 255, 0.15)',
        border: `2px solid ${theme === 'light' ? '#0052cc' : 'var(--glass-border)'}`,
        backdropFilter: 'blur(10px)',
        boxShadow: theme === 'light'
          ? '0 4px 20px rgba(0, 82, 204, 0.3)'
          : '0 4px 20px rgba(0, 217, 255, 0.2)',
        opacity: isDelayed ? 0.7 : 1,
        cursor: isDelayed ? 'not-allowed' : 'pointer',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
