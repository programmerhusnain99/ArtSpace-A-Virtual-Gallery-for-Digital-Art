'use client';

import { Button } from '@/components/ui/button';
import { useGalleryStore } from '@/lib/stores/gallery-store';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export function GalleryControls() {
  const { nextRoom, previousRoom } = useGalleryStore();

  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
      <Button
        variant="secondary"
        size="icon"
        onClick={previousRoom}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
      >
        <ZoomIn className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
      >
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={nextRoom}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}