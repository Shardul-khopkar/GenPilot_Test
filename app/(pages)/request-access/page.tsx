'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RequestAccessPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black pt-24 pb-16 px-6">
        <style dangerouslySetInnerHTML={{ __html: `
          .wip-badge {
            font-family: "Space Mono", monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #00d9ff;
            display: inline-block;
            padding: 8px 16px;
            background: rgba(0, 217, 255, 0.1);
            border: 1.5px solid rgba(0, 217, 255, 0.3);
            border-radius: 4px;
            margin-bottom: 28px;
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            color: #b0b8c8;
            margin-bottom: 48px;
            max-width: 600px;
          }

          .wip-icon {
            font-size: 72px;
            margin-bottom: 32px;
            opacity: 0.7;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .status-box {
            background: rgba(20, 30, 80, 0.25);
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 36px 32px;
            margin-bottom: 48px;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(0, 102, 255, 0.1);
          }

          .status-label {
            font-family: "Space Mono", monospace;
            font-size: 0.68rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #0066ff;
            margin-bottom: 12px;
          }

          .status-message {
            font-size: 1rem;
            color: #ffffff;
            line-height: 1.6;
          }

          .features-list {
            text-align: left;
            display: inline-block;
            margin-top: 32px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            color: #b0b8c8;
            font-size: 0.95rem;
          }

          .feature-item:before {
            content: "✓";
            color: #00d9ff;
            font-weight: bold;
            font-size: 1.2rem;
            flex-shrink: 0;
          }
        ` }} />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="wip-badge">Work In Progress</div>
          <h1 className="wip-title">Early Access Program</h1>
          <p className="wip-subtitle">We're building the future of genetic engineering IDEs. Join our early access program to be among the first to experience GenPilot.</p>

          <div className="status-box">
            <div className="status-label">Current Status</div>
            <div className="status-message">Developing comprehensive sequence analysis and CRISPR prediction tools</div>
          </div>

          <div className="features-list">
            <div className="feature-item">Access to beta features before public release</div>
            <div className="feature-item">Direct feedback channel with our development team</div>
            <div className="feature-item">Special pricing for early adopters</div>
            <div className="feature-item">Priority support and onboarding</div>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 text-sm mb-6">Coming soon: Early access sign-up form</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-xs tracking-widest uppercase hover:bg-cyan-400 hover:bg-opacity-5 transition-all rounded">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
