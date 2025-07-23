import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const SpaceScene = () => {
  const groupRef = useRef();
  const rocketRef = useRef();

  useFrame(({ clock }) => {
    if (rocketRef.current) {
      rocketRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      rocketRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      
      <group ref={rocketRef} position={[0, 0, 0]}>
        {/* Rocket Body */}
        <mesh position={[0, -1, 0]}>
          <coneGeometry args={[0.5, 2, 32]} />
          <meshStandardMaterial 
            color="#9c27b0" 
            emissive="#7b1fa2" 
            emissiveIntensity={0.5} 
          />
        </mesh>
        
        {/* Rocket Nose */}
        <mesh position={[0, 1, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.8, 1.5, 32]} />
          <meshStandardMaterial 
            color="#e91e63" 
            emissive="#c2185b" 
            emissiveIntensity={0.8} 
          />
        </mesh>
        
        {/* Rocket Mid Section */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial 
            color="#673ab7" 
            emissive="#5e35b1" 
            emissiveIntensity={0.3} 
          />
        </mesh>
      </group>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <div className="three-scene">
      <Canvas 
        camera={{ 
          position: [0, 0, 10], 
          fov: 50,
          near: 0.1,
          far: 1000 
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SpaceScene />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;