import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { Canvas, useFrame , useGestureHandler} from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, ScrollControls, PerspectiveCamera, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import LoadingScreen from './components/Loading';

import { Office } from './wall/Live';



useGLTF.preload('./models/model10live.glb');

// GapsPage component
const GapsPage = () => {
  const meshRef = useRef();

  return (
    <>
    <style>
      {`
        div {
          -ms-overflow-style: none; /* Hides scrollbar for IE and Edge */
          scrollbar-width: none; /* Hides scrollbar for Firefox */
           -webkit-overflow-scrolling: touch;
        touch-action: touch !important;
        }
         canvas {
  touch-action: none; /* Disables default touch actions like zoom or scroll */
}

      `}
    </style>
    <div
      className="v-scrollbar-parent rkc-page-scroll-scrollbar-parent"
      style={{ width: '100vw', height: '170vh', overflow: 'hidden', position: 'relative' }}
    >
      
      <Suspense fallback={<LoadingScreen />}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <Environment preset="city" background={false} />
          <PerspectiveCamera makeDefault position={[0, 400, 1500]} fov={50} near={0.9} far={10000} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ScrollControls pages={5} distance={1} damping={0.5} hideScrollbar={true}>
            <Office meshRef={meshRef} /> {/* Passing the ref */}
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
    </>
  );
};


export default GapsPage;
