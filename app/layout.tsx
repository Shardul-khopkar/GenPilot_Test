'use client';

import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
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
    <html lang="en" className={hydrated ? (theme === 'dark' ? 'dark' : '') : ''}>
      <head>
        <meta charSet="utf-8" />
        <title>GenPilot — Genetic Engineering Tools Suite</title>
        <meta name="description" content="Three powerful tools for CRISPR research: Find base pair locations (Tindr), convert genome builds (HGtranslate), and predict editing success (Success Predictor)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('app-store');
                if (stored) {
                  const parsed = JSON.parse(stored);
                  if (parsed.state?.theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black transition-colors duration-500">
        <Loader />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
