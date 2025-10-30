"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';

const images = [
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg"
];

export default function InteractiveGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [panelSize, setPanelSize] = useState(300);
  const dragStartX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Make the carousel responsive to screen size
  useEffect(() => {
    const updatePanelSize = () => {
      const newSize = window.innerWidth < 768 ? 200 : 400;
      setPanelSize(newSize);
    };
    updatePanelSize();
    window.addEventListener('resize', updatePanelSize);
    return () => window.removeEventListener('resize', updatePanelSize);
  }, []);

  const cellCount = images.length;
  
  // Calculate the geometry of the carousel
  const { theta, translateZ } = useMemo(() => {
    const angle = 360 / cellCount;
    // A larger radius pushes the side images further away, making them appear smaller and more peripheral.
    const radius = Math.round((panelSize / 2) / Math.tan(Math.PI / cellCount));
    return { theta: angle, translateZ: radius * 1.4 };
  }, [cellCount, panelSize]);

  // Determine the rotation of the entire carousel based on the selected image
  const rotation = -selectedIndex * theta;

  const handlePrev = () => {
    setSelectedIndex(selectedIndex - 1);
  };

  const handleNext = () => {
    setSelectedIndex(selectedIndex + 1);
  };
  
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const dragEndX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragEndX - dragStartX.current;
    if (Math.abs(dragDistance) > 50) { // Swipe threshold
      if (dragDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  // This function handles the infinite looping
  const getPanelIndex = (index: number) => {
    return ((index % cellCount) + cellCount) % cellCount;
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* This new 'scene' container prevents overflow and the resulting zoom */}
      <div className="relative w-full overflow-hidden" style={{ height: `${panelSize * 0.8}px` }}>
        {/* This container sets up the 3D perspective and interaction */}
        <div 
          ref={carouselRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing"
          style={{ 
            width: `${panelSize}px`, 
            height: `${panelSize * 0.75}px`, 
            perspective: '1000px',
          }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* This is the rotating carousel itself */}
        <div
          className="w-full h-full absolute"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${translateZ}px) rotateY(${rotation}deg)`,
            transition: 'transform 0.75s cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        >
          {images.map((src, index) => {
            const isSelected = getPanelIndex(selectedIndex) === index;
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center overflow-hidden rounded-lg"
                style={{
                  width: `${panelSize}px`,
                  height: `${panelSize * 0.75}px`,
                  // Positions each panel in a circle and scales the selected one
                  transform: `rotateY(${index * theta}deg) translateZ(${translateZ}px) ${isSelected ? 'scale(1.2)' : 'scale(1)'}`,
                  backfaceVisibility: 'hidden',
                  // Makes the side panels much more transparent
                  opacity: isSelected ? 1 : 0.2,
                  transition: 'transform 0.75s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.75s ease',
                  zIndex: isSelected ? 1 : 0,
                }}
              >
                <Image 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  layout="fill" 
                  objectFit="cover" 
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
        </div>
      </div>
      {/* Desktop Arrow Navigation */}
      <div className="hidden md:flex mt-8">
        <button onClick={handlePrev} className="p-2 bg-brand-primary text-white rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary/60 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={handleNext} className="p-2 bg-brand-primary text-white rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
