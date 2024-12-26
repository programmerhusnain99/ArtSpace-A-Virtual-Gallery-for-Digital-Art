'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const FEATURED_ARTWORKS = [
  {
    id: 1,
    title: 'Digital Dreams',
    artist: 'Elena Rodriguez',
    price: '2.5 ETH',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    likes: 234,
  },
  {
    id: 2,
    title: 'Neon Nights',
    artist: 'Marcus Chen',
    price: '1.8 ETH',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop',
    likes: 189,
  },
  {
    id: 3,
    title: 'Abstract Reality',
    artist: 'Sarah Williams',
    price: '3.2 ETH',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    likes: 312,
  },
];

export function FeaturedArtworks() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURED_ARTWORKS.map((artwork) => (
        <Card key={artwork.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 p-4">
            <div className="flex w-full items-center justify-between">
              <div>
                <h3 className="font-semibold">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
              </div>
              <Badge variant="secondary">{artwork.price}</Badge>
            </div>
            <div className="flex w-full items-center justify-between">
              <Button variant="ghost" size="sm" className="gap-1">
                <Heart className="h-4 w-4" />
                {artwork.likes}
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}