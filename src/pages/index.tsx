import { Suspense, useEffect, useRef, useState} from 'react';
import { Canvas,useThree,useFrame } from '@react-three/fiber';
import { Environment,OrbitControls, Preload, ScrollControls, useAnimations, useGLTF,PerspectiveCamera, Stage } from '@react-three/drei';
import { DirectionalLight } from 'three';
import { useScroll } from '@react-three/drei';
import { Model as DesktopModel } from './wall/Live';
import { Model as MobileModel } from './wall/MobileLive';

import { LinearToneMapping, PointLight, PointLightHelper } from 'three'; // Import PointLightHelper
import * as THREE from 'three';

import LoadingScreen from './components/Loading';


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 600);
      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
};

const Newmodel = ({ isMobile, ...props }) => {
  const { camera } = useThree();
  const ref = useRef();
  const scroll = useScroll();
  const group = useRef();
  const { animations } = useGLTF('./models/16finalLiveFile2.glb');
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (ref.current) {
      if (isMobile) {
        camera.lookAt(-500, 280, 100);
        ref.current.position.x = scroll.offset * -18000;
        camera.position.set(-500, 280, 1770);
      } else {
        camera.lookAt(0, 280, 100);
        ref.current.position.x = scroll.offset * -17000;
        camera.position.set(0, 280, 1670);
      }
    }
  });

  return <mesh ref={ref}>{isMobile ? <MobileModel /> : <DesktopModel />}</mesh>;
};

useGLTF.preload('./models/16finalLiveFile2.glb');


const ModelCanvas = () => {
  const isMobile = useIsMobile();

    const ref = useRef();
  return (
    <>
    <style>
      {`
        div {
          -ms-overflow-style: none; /* Hides scrollbar for IE and Edge */
          scrollbar-width: none; /* Hides scrollbar for Firefox */
           -webkit-overflow-scrolling: touch;
        }
      `}
    </style>
 
    <Suspense fallback={<LoadingScreen />}>
        <Canvas
          style={{ width: '100%', height: '100vh' }}
          camera={{ near: 0.1, far: 80000.0, fov: 25 }}
          // camera={{ near: 0.1, far: 80000.0, fov: 25.5 }}
          gl={{
            toneMapping: LinearToneMapping, // Use Linear tone mapping
            outputEncoding: THREE.sRGBEncoding,
          }}
        >
          {/* Ambient light for basic illumination */}
          <ambientLight intensity={0} color={'#ffffff'} />

          {/* Directional light for shadows */}
          <directionalLight
            intensity={1.8}
            position={[10, 10, 10]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* Add PointLight */}
          <pointLight
            intensity={3} // Brighter for highlights
            position={[5, 5, 5]} // Position near the model
            distance={50} // Limit range
            decay={2} // Exponential light falloff
            castShadow
          />
          {/* Helper for debugging light */}
          <primitive
            object={new PointLightHelper(new PointLight(0xffffff, 3), 0.5)}
          />

          {/* Add Environment */}
          <Environment preset="night" background={false} />

          {/* Scrollable Content */}
          <ScrollControls hideScrollbar={true} pages={35} distance={1} damping={0.5}>
          <Newmodel isMobile={isMobile} />

          </ScrollControls>
        </Canvas>
      </Suspense>
  </>
  )
}

export default ModelCanvas