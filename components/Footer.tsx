'use client';

import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { theme, toggleTheme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer
      className="border-t px-4 md:px-8 lg:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative z-10 transition-all duration-500"
      style={{
        borderColor: 'var(--glass-border)',
        backgroundColor: theme === 'light' ? 'rgba(248, 249, 250, 0.5)' : 'rgba(20, 30, 80, 0.15)',
      }}
    >
      <div className="font-sans font-bold text-lg md:text-xl" style={{ color: 'var(--text)' }}>
        Gen<span className="text-cyan-400 font-light">Pilot</span>
      </div>

      <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-7 list-none justify-center items-center">
        <li>
          <Link
            href="/docs"
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-500 hover:text-cyan-400"
            style={{
              color: theme === 'light' ? '#374151' : '#9ca3af',
            }}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href="/wip"
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-500 hover:text-cyan-400"
            style={{
              color: theme === 'light' ? '#374151' : '#9ca3af',
            }}
          >
            Research
          </Link>
        </li>
        <li>
          <Link
            href="/wip"
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-500 hover:text-cyan-400"
            style={{
              color: theme === 'light' ? '#374151' : '#9ca3af',
            }}
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-500 hover:text-cyan-400"
            style={{
              color: theme === 'light' ? '#374151' : '#9ca3af',
            }}
          >
            Contact
          </Link>
        </li>
        <li className="md:ml-4 md:pl-4 border-l" style={{ borderColor: 'var(--glass-border)' }}>
          <button
            onClick={toggleTheme}
            className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded border transition-all duration-500 hover:scale-105 active:scale-95"
            style={{
              borderColor: theme === 'light' ? '#cbd5e1' : 'var(--glass-border)',
              color: theme === 'light' ? '#0d1117' : '#00d9ff',
              backgroundColor: theme === 'light' ? 'rgba(242, 246, 252, 0.8)' : 'rgba(0, 217, 255, 0.1)',
            }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>

      <div
        className="font-mono text-xs tracking-widest text-center md:text-right transition-colors duration-500"
        style={{ color: 'var(--text-muted)' }}
      >
        © 2025 GenPilot · All rights reserved
      </div>
    </footer>
  );
}
