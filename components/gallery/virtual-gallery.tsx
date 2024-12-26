'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GalleryScene } from './scene';
import { Suspense } from 'react';
import { LoadingScreen } from './loading-screen';

export function VirtualGallery() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 75 }}
      className="h-screen w-full"
    >
      <Suspense fallback={<LoadingScreen />}>
        <GalleryScene />
        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={10}
        />
      </Suspense>
    </Canvas>
  );
}