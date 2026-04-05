'use client';

import { useEffect, useState } from 'react';
import { useDelayedAction } from '@/lib/useDelayedAction';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isDark, setIsDark] = useState(false);
  const { isDelayed, executeDelayed } = useDelayedAction(2000);

  useEffect(() => {
    console.error(error);
    // Detect dark mode
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, [error]);

  const handleReset = () => {
    executeDelayed(() => reset());
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen transition-colors duration-500"
      style={{
        background: 'var(--bg-gradient)',
      }}
    >
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
          Something went wrong
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{error.message}</p>
        <button
          onClick={handleReset}
          disabled={isDelayed}
          className="px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-shadow"
          style={{
            background: 'var(--accent-cyan)',
            color: isDark ? 'var(--text)' : '#1a1a2e',
            opacity: isDelayed ? 0.7 : 1,
            cursor: isDelayed ? 'not-allowed' : 'pointer',
          }}
        >
          {isDelayed ? 'Loading...' : 'Try again'}
        </button>
      </div>
    </div>
  );
}
