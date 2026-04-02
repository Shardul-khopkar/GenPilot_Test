'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Proteins from '@/components/Proteins';
import Updates from '@/components/Updates';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Homepage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      <Hero />
      <StatsStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <Proteins />
      <Updates />
      <CTA />
      <Footer />
    </main>
  );
}
