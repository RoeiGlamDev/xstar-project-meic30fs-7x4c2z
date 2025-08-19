import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useAnimation } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ opacity: 1, y: 0 });
  }, [animationControls]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      <h1 className="absolute top-10 text-6xl font-bold text-orange-600">Welcome to GlamCS</h1>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/ Floating Cosmetic Product /}
        <mesh position={[0, 0, 0]} onPointerOver={() => animationControls.start({ scale: 1.1 })} onPointerOut={() => animationControls.start({ scale: 1 })}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/ Floating Lipstick /}
        <mesh position={[-2, 1, 0]} onPointerOver={() => animationControls.start({ scale: 1.1 })} onPointerOut={() => animationControls.start({ scale: 1 })}>
          <cylinderGeometry args={[0.3, 0.3, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/ Floating Perfume Bottle /}
        <mesh position={[2, -1, 0]} onPointerOver={() => animationControls.start({ scale: 1.1 })} onPointerOut={() => animationControls.start({ scale: 1 })}>
          <coneGeometry args={[0.5, 2, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
      <div className="absolute bottom-10 text-lg text-gray-600 text-center">
        <p>Explore our luxurious range of cosmetics at GlamCS.</p>
        <p>Elevate your beauty routine with our premium products.</p>
      </div>
    </div>
  );
};

export default FloatingElements;