"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse blur effect (desktop only)
  const blurRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isMobile) return; // Skip mouse effects on mobile
    
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (blurRef.current) {
          blurRef.current.style.transform = `translate3d(${e.clientX - 120}px, ${e.clientY - 120}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <main className="min-h-screen relative transition-colors duration-200 dark:bg-black/40 bg-white/90 overflow-x-hidden w-full">
      <CursorFollower />
      
      {/* Background blur effect (desktop only) */}
      {!isMobile && (
        <div
          ref={blurRef}
          className="pointer-events-none fixed w-60 h-60 rounded-full blur-xl opacity-30 will-change-transform bg-gradient-radial from-black/20 to-transparent dark:from-white/50 hidden sm:block z-[1]"
          style={{ 
            left: 0, 
            top: 0,
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-[2]">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-15 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 to-transparent" />
      </div>
    </main>
  );
}
