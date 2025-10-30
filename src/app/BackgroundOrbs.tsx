"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';

const ORB_COUNT = 6;
// Adding more colors for the increased orb count.
const ORB_COLORS = ['#0A5ED7', '#4C8DF2', '#E11937', '#2E72D7', '#F57D8F', '#7FAEF2']; 
// Drastically increased base speed for a very noticeable effect.
const MIN_SPEED = 0.15; 
const MAX_SPEED_MULTIPLIER = 15;

const Orb = ({ initialX, initialY, size, color, speedMultiplier }: { initialX: number, initialY: number, size: number, color: string, speedMultiplier: number }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  // Velocity now uses the increased MIN_SPEED
  const velocity = useRef({ x: (Math.random() - 0.5) * MIN_SPEED, y: (Math.random() - 0.5) * MIN_SPEED });

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      setPosition(prev => {
        let newX = prev.x + velocity.current.x * speedMultiplier;
        let newY = prev.y + velocity.current.y * speedMultiplier;

        if (newX < 0 || newX > 100) velocity.current.x *= -1;
        if (newY < 0 || newY > 100) velocity.current.y *= -1;

        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));

        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speedMultiplier]);

  return (
    <div
      className="pointer-events-none absolute rounded-full opacity-30 blur-2xl"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: color,
        transition: 'all 0.2s ease-out',
        willChange: 'transform, opacity',
      }}
    />
  );
};

export default function BackgroundOrbs() {
  const [speed, setSpeed] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Effect to detect screen size for responsive orb sizing
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Effect to handle scroll-based speed changes
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      // Hyper-responsive scroll speed calculation.
      const newSpeed = 1 + Math.min(scrollDelta / 2, MAX_SPEED_MULTIPLIER);
      setSpeed(newSpeed);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => setSpeed(1), 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Memoized orb generation, responsive to screen size
  const orbs = useMemo(() => {
    const sizeMultiplier = isMobile ? 100 : 150;
    const sizeBase = isMobile ? 75 : 150;
    return Array.from({ length: ORB_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * sizeMultiplier + sizeBase, // Use responsive sizes
      color: ORB_COLORS[i % ORB_COLORS.length],
    }));
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {orbs.map(orb => (
        <Orb
          key={orb.id}
          initialX={orb.x}
          initialY={orb.y}
          size={orb.size}
          color={orb.color}
          speedMultiplier={speed}
        />
      ))}
    </div>
  );
}
