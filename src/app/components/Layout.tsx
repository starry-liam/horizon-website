// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="text-center text-xs text-gray-500 mt-4 p-4">
        <p>© {new Date().getFullYear()} Horizon Avionics. All rights reserved.</p>
      </footer>
    </div>
  );
}