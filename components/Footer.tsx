'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t px-4 md:px-8 lg:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative z-10"
            style={{ borderColor: 'var(--glass-border)' }}>
      <div className="font-sans font-bold text-lg md:text-xl text-white">
        Gen<span className="text-cyan-400 font-light">Pilot</span>
      </div>
      
      <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-7 list-none justify-center">
        <li>
          <Link href="/docs" className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">
            Docs
          </Link>
        </li>
        <li>
          <Link href="/wip" className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">
            Research
          </Link>
        </li>
        <li>
          <Link href="/wip" className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
      
      <div className="font-mono text-xs text-gray-600 tracking-widest text-center md:text-right">
        © 2025 GenPilot · All rights reserved
      </div>
    </footer>
  );
}
