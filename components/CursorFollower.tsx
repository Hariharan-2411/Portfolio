"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorState = "default" | "hover" | "click" | "text" | "loading" | "nav-hover" | "magnetic";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isMobile, setIsMobile] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number; timestamp: number }>>([]);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const trailCounter = useRef(0);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Advanced trail effect with time-based filtering
      const now = Date.now();
      if (now - lastTrailTime.current > 16) { // ~60fps trail
        setTrail(prev => {
          const newTrail = [...prev, { 
            ...newPosition, 
            id: trailCounter.current++, 
            timestamp: now 
          }];
          return newTrail.slice(-12); // Keep last 12 trail points
        });
        lastTrailTime.current = now;
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorState("text");
      } else if (target.closest('[data-nav-item="true"]')) {
        setCursorState("nav-hover");
      } else if (target.closest('[data-magnetic="true"]')) {
        setCursorState("magnetic");
      } else if (target.closest('button, a, [role="button"], [data-interactive="true"]')) {
        setCursorState("hover");
      }
    };

    const handleMouseLeave = () => {
      setCursorState("default");
      setMagneticOffset({ x: 0, y: 0 });
    };
    
    const handleMouseDown = () => setCursorState("click");
    const handleMouseUp = () => {
      const target = document.elementFromPoint(mousePosition.x, mousePosition.y) as HTMLElement;
      if (target?.closest('[data-nav-item="true"]')) {
        setCursorState("nav-hover");
      } else if (target?.closest('button, a, [role="button"], [data-interactive="true"]')) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    // Enhanced magnetic effect
    const handleMouseMove = (e: MouseEvent) => {
      const magneticElements = document.querySelectorAll('[data-magnetic="true"]');
      magneticElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < 100) {
          const strength = (100 - distance) / 100;
          const offsetX = (e.clientX - centerX) * strength * 0.3;
          const offsetY = (e.clientY - centerY) * strength * 0.3;
          setMagneticOffset({ x: offsetX, y: offsetY });
        }
      });
    };

    // Enhanced interactive elements detection
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], [data-interactive="true"], [data-nav-item="true"], [data-magnetic="true"], input, textarea, select, [contenteditable="true"]'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseup', handleMouseUp);
      });

      return interactiveElements;
    };

    let elements = addListeners();
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", handleMouseMove);

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
      });
      elements = addListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
      });
    };
  }, [mousePosition.x, mousePosition.y]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Warm white bulb-like glow cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        animate={{
          x: mousePosition.x - 60, // Center the 120px circle on cursor
          y: mousePosition.y - 60,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255, 248, 230, 0.15) 0%, rgba(255, 245, 210, 0.08) 50%, rgba(255, 240, 180, 0.03) 80%, transparent 100%)',
          boxShadow: '0 0 40px rgba(255, 248, 230, 0.1)',
          filter: 'blur(1px)',
        }}
      />
    </>
  );
};

export default CursorFollower;