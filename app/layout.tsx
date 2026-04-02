import type { Metadata, Viewport } from 'next';
import React from 'react';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'GenPilot — AI-Powered CRISPR Engineering IDE',
  description: 'Advanced genetic engineering platform with real-time sequence analysis, off-target prediction, and genome build integration.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-black">
        <Loader />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
