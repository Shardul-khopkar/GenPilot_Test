'use client';

import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import FloatingThemeToggle from '@/components/FloatingThemeToggle';
import { useAppStore } from '@/lib/store';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAppStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    // Apply theme to html element immediately
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  // While not hydrated, render without dark class to prevent flickering
  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <head>
        <meta charSet="utf-8" />
        <title>GenPilot — AI-Powered CRISPR Engineering IDE</title>
        <meta name="description" content="Advanced genetic engineering platform with real-time sequence analysis, off-target prediction, and genome build integration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('app-store');
                if (stored) {
                  const state = JSON.parse(stored);
                  if (state.state?.theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black transition-colors duration-500">
        <Loader />
        <FloatingThemeToggle position="bottom-right" />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
