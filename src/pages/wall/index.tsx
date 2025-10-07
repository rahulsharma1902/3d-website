'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Office } from './Live';
import gsap from 'gsap';

export default function GapsPage() {
  const modelRef = useRef();
  const cameraRef = useRef(); 
  const isDraggingRef = useRef(false); // Track drag state
  const startPosRef = useRef(0); // Track start position (X for desktop, Y for mobile)

  const scrollAmount = 500; // Controls scroll movement
  const damping = 0.9; // Animation damping
  const [isMobileView, setIsMobileView] = useState(false);
  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  // Update view mode and boundaries based on screen size
  const updateViewMode = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
    setBoundaries(isMobile ? { minX: -17790, maxX: 200 } : { minX: -17200, maxX: 0 });
  }, []);

  useEffect(() => {
    updateViewMode();
    window.addEventListener('resize', updateViewMode);
    return () => window.removeEventListener('resize', updateViewMode);
  }, [updateViewMode]);

  // Move the model with boundary checks
  const moveModel = useCallback(
    (delta) => {
      if (modelRef.current) {
        const targetPositionX = modelRef.current.position.x + delta;
        const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetPositionX));

        gsap.to(modelRef.current.position, {
          x: clampedX,
          duration: damping,
          ease: 'power1.out',
        });
      }
    },
    [boundaries, damping]
  );

  // Mobile: Touch Events
  const handleTouchStart = useCallback(
    (e) => {
      if (isMobileView && e.touches.length === 1) {
        isDraggingRef.current = true;
        startPosRef.current = e.touches[0].clientY; // Start Y position for touch
      }
    },
    [isMobileView]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isMobileView && isDraggingRef.current) {
        const deltaY = e.touches[0].clientY - startPosRef.current;
        const scaleFactor = scrollAmount / 100;
        moveModel(deltaY * scaleFactor);
        startPosRef.current = e.touches[0].clientY;
      }
    },
    [isMobileView, moveModel]
  );

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Desktop: Mouse Events
  const handleMouseDown = useCallback(
    (e) => {
      if (!isMobileView) {
        isDraggingRef.current = true;
        startPosRef.current = e.clientX; // Track mouse down position
      }
    },
    [isMobileView]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isMobileView && isDraggingRef.current) {
        const deltaX = e.clientX - startPosRef.current;
        const scaleFactor = scrollAmount / 100;
        moveModel(deltaX * scaleFactor);
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView, moveModel]
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Desktop: Mouse Wheel Event
  const handleWheel = useCallback(
    (e) => {
      if (!isMobileView) {
        const delta = e.deltaY;
        const scaleFactor = scrollAmount / 100;
        moveModel(delta * scaleFactor);
      }
    },
    [isMobileView, moveModel]
  );

  useEffect(() => {
    if (isMobileView) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (isMobileView) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isMobileView, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp, handleWheel]);

  return (
    <div
      style={{
        width: '100vw',
        height: '170vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Canvas>
        <ambientLight intensity={2} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 400, 1500]}
          fov={50}
          near={0.9}
          far={10000}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <group ref={modelRef}>
          <Office />
        </group>
      </Canvas>
    </div>
  );
}
