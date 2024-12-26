import { VirtualGallery } from "@/components/gallery/virtual-gallery";
import { GalleryControls } from "@/components/gallery/controls";
import { GalleryProvider } from "@/components/gallery/gallery-provider";

export default function GalleryPage() {
  return (
    <GalleryProvider>
      <div className="relative h-screen w-full">
        <VirtualGallery />
        <GalleryControls />
      </div>
    </GalleryProvider>
  );
}