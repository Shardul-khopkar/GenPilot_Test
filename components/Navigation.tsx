'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { useEffect } from 'react';
import SkyToggle from './ui/sky-toggle';

const Navigation: React.FC = () => {
  const router = useRouter();
  const { theme } = useAppStore();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRequestAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => router.push('/request-access'));
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      startTransition(() => router.push('/#hero'));
    }
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      startTransition(() => router.push(`/#${sectionId}`));
    }
  };

  if (!mounted) return null;

  const isDark = theme === 'dark';
  const navStyle = isDark
    ? { background: 'rgba(20, 30, 80, 0.25)', boxShadow: '0 8px 32px rgba(0, 102, 255, 0.1)' }
    : { background: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 82, 204, 0.08)' };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-5 border-b border-opacity-15 transition-all duration-500"
      style={{
        borderColor: 'var(--glass-border)',
        ...navStyle,
        backdropFilter: 'blur(30px)',
      }}>
      <button 
        onClick={handleLogoClick}
        className="text-lg md:text-xl font-bold transition-opacity hover:opacity-80 cursor-pointer flex-shrink-0 bg-none border-none p-0"
        style={{ color: 'var(--text)' }}
      >
        Gen<span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', opacity: 1 }}>Pilot</span>
      </button>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="Toggle menu">
        <span
          className="w-5 h-0.5 transition-all"
          style={{
            background: 'var(--text)',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
          }}
        />
        <span
          className="w-5 h-0.5 transition-all"
          style={{
            background: 'var(--text)',
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <span
          className="w-5 h-0.5 transition-all"
          style={{
            background: 'var(--text)',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
          }}
        />
      </button>

      <ul className="hidden md:flex gap-6 lg:gap-9 list-none flex-1 justify-center">
        <li>
          <a
            href="#problem"
            onClick={handleNavClick('problem')}
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            Problem
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </a>
        </li>
        <li>
          <a
            href="#how"
            onClick={handleNavClick('how')}
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            How it works
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </a>
        </li>
        <li>
          <a
            href="#features"
            onClick={handleNavClick('features')}
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            Features
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </a>
        </li>
        <li>
          <a
            href="#proteins"
            onClick={handleNavClick('proteins')}
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            Proteins
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </a>
        </li>
        <li>
          <a
            href="#updates"
            onClick={handleNavClick('updates')}
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            Updates
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </a>
        </li>
        <li>
          <Link
            href="/docs"
            className="font-mono text-xs uppercase tracking-widest transition-colors relative group"
            style={{ color: 'var(--text-muted)' }}>
            Docs
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--accent-yellow)' }}
            />
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4 flex-shrink-0">
        <div className="flex-shrink-0 scale-75 origin-right">
          <SkyToggle />
        </div>
        <button
          onClick={handleRequestAccess}
          disabled={isPending}
          className="font-mono text-xs uppercase tracking-widest px-6 lg:px-7 py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] disabled:hover:shadow-none disabled:hover:translate-y-0"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
              : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
            color: isDark ? '#000' : '#fff',
            boxShadow: isDark
              ? '0 0 20px rgba(0, 102, 255, 0.4)'
              : '0 0 20px rgba(0, 82, 204, 0.3)',
            opacity: isPending ? 0.7 : 1,
            cursor: isPending ? 'not-allowed' : 'pointer',
          }}>
          {isPending ? 'Loading...' : 'Request Access'}
        </button>
      </div>

      <div className="md:hidden flex items-center gap-2 flex-shrink-0">
        <div className="flex-shrink-0 scale-75 origin-right">
          <SkyToggle />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden border-b border-opacity-15 transition-all duration-500"
          style={{
            background: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            borderColor: 'var(--glass-border)',
            backdropFilter: 'blur(30px)',
          }}>
          <ul className="flex flex-col gap-4 p-6 list-none">
            <li>
              <a
                href="#problem"
                onClick={handleNavClick('problem')}
                className="font-mono text-xs uppercase tracking-widest transition-colors"
                style={{ color: 'var(--text-muted)' }}>
                Problem
              </a>
            </li>
            <li>
              <a href="#how" onClick={handleNavClick('how')} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                How it works
              </a>
            </li>
            <li>
              <a href="#features" onClick={handleNavClick('features')} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Features
              </a>
            </li>
            <li>
              <a href="#proteins" onClick={handleNavClick('proteins')} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Proteins
              </a>
            </li>
            <li>
              <a href="#updates" onClick={handleNavClick('updates')} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Updates
              </a>
            </li>
            <li>
              <Link href="/docs" onClick={() => setIsMenuOpen(false)} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Docs
              </Link>
            </li>
            <li className="pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
              <button
                onClick={(e) => {
                  handleRequestAccess(e);
                  setIsMenuOpen(false);
                }}
                disabled={isPending}
                className="w-full font-mono text-xs uppercase tracking-widest px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                    : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
                  color: isDark ? '#000' : '#fff',
                  boxShadow: isDark
                    ? '0 0 20px rgba(0, 102, 255, 0.4)'
                    : '0 0 20px rgba(0, 82, 204, 0.3)',
                  opacity: isPending ? 0.7 : 1,
                  cursor: isPending ? 'not-allowed' : 'pointer',
                }}>
                {isPending ? 'Loading...' : 'Request Access'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
