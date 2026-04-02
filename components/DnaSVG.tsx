'use client';

import React from 'react';

interface DnaSVGProps {
  className?: string;
}

const DnaSVG: React.FC<DnaSVGProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: '100%', opacity: 0.12 }}>
      <defs>
        <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00a86b', stopOpacity: 0 }} />
          <stop offset="30%" style={{ stopColor: '#00a86b', stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: '#00a86b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00a86b', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {/* DNA strand path top */}
      <path
        d="M0 300 Q150 200 300 300 Q450 400 600 300 Q750 200 900 300 Q1050 400 1200 300"
        stroke="url(#dnaGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 340 Q150 440 300 340 Q450 240 600 340 Q750 440 900 340 Q1050 240 1200 340"
        stroke="url(#dnaGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Rungs */}
      <line x1="75" y1="250" x2="75" y2="390" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="150" y1="283" x2="150" y2="383" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="225" y1="300" x2="225" y2="380" stroke="#00a86b" strokeWidth="0.8" opacity="0.4" />
      <line x1="300" y1="300" x2="300" y2="340" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="375" y1="300" x2="375" y2="370" stroke="#00a86b" strokeWidth="0.8" opacity="0.4" />
      <line x1="450" y1="317" x2="450" y2="357" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="525" y1="300" x2="525" y2="370" stroke="#00a86b" strokeWidth="0.8" opacity="0.4" />
      <line x1="600" y1="300" x2="600" y2="340" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="675" y1="300" x2="675" y2="380" stroke="#00a86b" strokeWidth="0.8" opacity="0.4" />
      <line x1="750" y1="250" x2="750" y2="420" stroke="#00a86b" strokeWidth="0.8" opacity="0.5" />
      <line x1="825" y1="283" x2="825" y2="383" stroke="#00ff8c" strokeWidth="0.8" opacity="0.4" />
      <line x1="900" y1="300" x2="900" y2="340" stroke="#00ff8c" strokeWidth="0.8" opacity="0.5" />
      <line x1="975" y1="300" x2="975" y2="380" stroke="#00ff8c" strokeWidth="0.8" opacity="0.4" />
      <line x1="1050" y1="283" x2="1050" y2="383" stroke="#00ff8c" strokeWidth="0.8" opacity="0.5" />
      <line x1="1125" y1="260" x2="1125" y2="400" stroke="#00ff8c" strokeWidth="0.8" opacity="0.4" />
      {/* Node dots */}
      <circle cx="75" cy="250" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="75" cy="390" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="300" cy="300" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="300" cy="340" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="600" cy="300" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="600" cy="340" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="900" cy="300" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="900" cy="340" r="3" fill="#00ff8c" opacity="0.5" />
      <circle cx="1125" cy="260" r="3" fill="#00ff8c" opacity="0.4" />
      <circle cx="1125" cy="400" r="3" fill="#00ff8c" opacity="0.4" />
    </svg>
  );
};

export default DnaSVG;
