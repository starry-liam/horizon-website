'use client';

import { useState, useEffect } from 'react';

export default function CursorGlow({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX,
          y: e.clientY + window.scrollY
        });
      }}
      className="relative w-full h-full min-h-screen transition-colors duration-75 bg-[length:80px_80px] bg-[#0a0f0d] text-white"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08) 10px, rgba(0,0,0,0.9) 150px)`
      }}
    >
      {children}
    </div>
  );
}