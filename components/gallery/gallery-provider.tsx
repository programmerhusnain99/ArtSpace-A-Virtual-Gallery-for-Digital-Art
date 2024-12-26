'use client';

import { useEffect } from 'react';
import { useGalleryStore } from '@/lib/stores/gallery-store';

const SAMPLE_ARTWORKS = [
  {
    id: '1',
    title: 'Digital Dreams',
    artist: 'Elena Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    price: '2.5 ETH',
    description: 'A mesmerizing digital artwork exploring the intersection of dreams and reality.',
  },
  {
    id: '2',
    title: 'Neon Nights',
    artist: 'Marcus Chen',
    imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop',
    price: '1.8 ETH',
    description: 'A vibrant exploration of city lights and urban energy.',
  },
  {
    id: '3',
    title: 'Abstract Reality',
    artist: 'Sarah Williams',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    price: '3.2 ETH',
    description: 'An abstract interpretation of modern life and technology.',
  },
];

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const setArtworks = useGalleryStore((state) => state.setArtworks);

  useEffect(() => {
    setArtworks(SAMPLE_ARTWORKS);
  }, [setArtworks]);

  return <>{children}</>;
}