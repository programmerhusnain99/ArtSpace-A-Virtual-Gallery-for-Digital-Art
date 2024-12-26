'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TRENDING_ARTISTS = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    artworks: 24,
    followers: '12.5K',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    artworks: 18,
    followers: '8.2K',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    artworks: 32,
    followers: '15.7K',
  },
];

export function TrendingArtists() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TRENDING_ARTISTS.map((artist) => (
        <Card key={artist.id}>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-24 w-24">
                <Image
                  src={artist.avatar}
                  alt={artist.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{artist.name}</h3>
              <div className="mb-4 flex gap-2">
                <Badge variant="secondary">{artist.artworks} Artworks</Badge>
                <Badge variant="secondary">{artist.followers} Followers</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button>View Profile</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}