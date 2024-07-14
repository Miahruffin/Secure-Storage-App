// src/app/layout.js
'use client'; // Make sure to include this

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Header Content (e.g., Logo, Title) */}
          <Navbar />
        </header>

        <main>
          {children}
        </main>

        <footer>
          {/* Footer Content (e.g., Copyright, Links) */}
        </footer>
      </body>
    </html>
  );
}

