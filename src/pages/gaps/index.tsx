'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office'


export default function GapsPage() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Canvas>
      <ambientLight intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <ScrollControls pages={3} damping={0.5}>
        <Office/>
        </ScrollControls>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
}


