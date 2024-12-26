'use client';

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Heart } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Digital Dreams",
    price: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    likes: 234,
    status: "Listed",
  },
  {
    id: 2,
    title: "Neon Nights",
    price: "1.8 ETH",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop",
    likes: 189,
    status: "Draft",
  },
];

export function ArtworkGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Artworks</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 p-4">
              <div className="flex w-full items-center justify-between">
                <div>
                  <h3 className="font-semibold">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground">{artwork.price}</p>
                </div>
                <Badge variant="secondary">{artwork.status}</Badge>
              </div>
              <div className="flex w-full items-center justify-between">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Heart className="h-4 w-4" />
                  {artwork.likes}
                </Button>
                <Button size="sm">Edit</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}