'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigation: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-5 border-b border-opacity-15 border-white"
         style={{
           background: 'rgba(20, 30, 80, 0.25)',
           backdropFilter: 'blur(30px)',
           boxShadow: '0 8px 32px rgba(0, 102, 255, 0.1)',
         }}>
      <button 
        onClick={handleLogoClick}
        className="text-lg md:text-xl font-bold text-white hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0 bg-none border-none p-0"
      >
        Gen<span className="text-cyan-400 font-bold opacity-70">Pilot</span>
      </button>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 ml-auto mr-4"
        aria-label="Toggle menu">
        <span className="w-5 h-0.5 bg-white transition-all" style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
        <span className="w-5 h-0.5 bg-white transition-all" style={{ opacity: isMenuOpen ? 0 : 1 }} />
        <span className="w-5 h-0.5 bg-white transition-all" style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
      </button>

      <ul className="hidden md:flex gap-6 lg:gap-9 list-none flex-1 justify-center">
        <li>
          <a href="#problem" onClick={handleNavClick('problem')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            Problem
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#how" onClick={handleNavClick('how')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            How it works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#features" onClick={handleNavClick('features')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#proteins" onClick={handleNavClick('proteins')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            Proteins
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#updates" onClick={handleNavClick('updates')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            Updates
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <Link href="/docs" className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors relative group">
            Docs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
      </ul>

      <button
        onClick={handleRequestAccess}
        disabled={isPending}
        className="hidden md:block font-mono text-xs uppercase tracking-widest text-black px-6 lg:px-7 py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex-shrink-0 disabled:hover:shadow-none disabled:hover:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)',
          boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)',
          opacity: isPending ? 0.7 : 1,
          cursor: isPending ? 'not-allowed' : 'pointer',
        }}>
        {isPending ? 'Loading...' : 'Request Access'}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-black bg-opacity-95 border-b border-white border-opacity-15" style={{ backdropFilter: 'blur(30px)' }}>
          <ul className="flex flex-col gap-4 p-6 list-none">
            <li>
              <a href="#problem" onClick={handleNavClick('problem')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                Problem
              </a>
            </li>
            <li>
              <a href="#how" onClick={handleNavClick('how')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                How it works
              </a>
            </li>
            <li>
              <a href="#features" onClick={handleNavClick('features')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#proteins" onClick={handleNavClick('proteins')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                Proteins
              </a>
            </li>
            <li>
              <a href="#updates" onClick={handleNavClick('updates')} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                Updates
              </a>
            </li>
            <li>
              <Link href="/docs" onClick={() => setIsMenuOpen(false)} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                Docs
              </Link>
            </li>
            <li className="pt-4 border-t border-white border-opacity-15">
              <button
                onClick={(e) => {
                  handleRequestAccess(e);
                  setIsMenuOpen(false);
                }}
                disabled={isPending}
                className="w-full font-mono text-xs uppercase tracking-widest text-black px-4 py-3 rounded-lg font-semibold transition-all duration-300 disabled:hover:shadow-none"
                style={{
                  background: 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)',
                  boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)',
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
