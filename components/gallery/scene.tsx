'use client';

import { useGLTF } from '@react-three/drei';
import { ArtworkFrame } from './artwork-frame';
import { useGalleryStore } from '@/lib/stores/gallery-store';

export function GalleryScene() {
  const artworks = useGalleryStore((state) => state.artworks);

  return (
    <group>
      {/* Room */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <mesh position={[0, 5, -5]} receiveShadow>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Artwork Frames */}
      {artworks.map((artwork, index) => (
        <ArtworkFrame
          key={artwork.id}
          artwork={artwork}
          position={[-3 + index * 3, 2, -4.5]}
        />
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </group>
  );
}