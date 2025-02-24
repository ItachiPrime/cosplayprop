
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function FloatingCar() {
  const carRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!carRef.current) return;
    
    const animate = () => {
      if (carRef.current) {
        carRef.current.rotation.y += 0.005;
        carRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <mesh ref={carRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshPhongMaterial color="#ffffff" />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingCar />
      </Canvas>
    </div>
  );
}
