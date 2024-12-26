import { create } from 'zustand';
import { ArtworkType } from '@/lib/types';

interface GalleryState {
  artworks: ArtworkType[];
  currentRoom: number;
  nextRoom: () => void;
  previousRoom: () => void;
  setArtworks: (artworks: ArtworkType[]) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  artworks: [],
  currentRoom: 0,
  nextRoom: () =>
    set((state) => ({ currentRoom: state.currentRoom + 1 })),
  previousRoom: () =>
    set((state) => ({ currentRoom: Math.max(0, state.currentRoom - 1) })),
  setArtworks: (artworks) => set({ artworks }),
}));