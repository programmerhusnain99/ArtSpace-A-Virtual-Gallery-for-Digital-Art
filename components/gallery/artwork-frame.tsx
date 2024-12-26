'use client';

import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { ArtworkType } from '@/lib/types';

interface ArtworkFrameProps {
  artwork: ArtworkType;
  position: [number, number, number];
}

export function ArtworkFrame({ artwork, position }: ArtworkFrameProps) {
  const texture = useTexture(artwork.imageUrl);
  const frameRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (frameRef.current && hovered) {
      frameRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Frame */}
      <mesh
        ref={frameRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.open(`/artwork/${artwork.id}`, '_blank')}
      >
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#8b4513" />
        
        {/* Artwork */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.8, 2.8]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </mesh>

      {/* Frame Label */}
      <group position={[0, -1.6, 0.1]}>
        <mesh>
          <planeGeometry args={[2, 0.3]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}