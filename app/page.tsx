import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FeaturedArtworks } from '@/components/featured-artworks';
import { TrendingArtists } from '@/components/trending-artists';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Discover and Collect Exceptional Digital Art
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Join our community of artists and collectors in an immersive virtual gallery experience.
              Buy, sell, and showcase digital art in a revolutionary way.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/explore">Explore Galleries</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup">Become an Artist</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Artworks</h2>
          <FeaturedArtworks />
        </div>
      </section>

      {/* Trending Artists Section */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Trending Artists</h2>
          <TrendingArtists />
        </div>
      </section>
    </div>
  );
}