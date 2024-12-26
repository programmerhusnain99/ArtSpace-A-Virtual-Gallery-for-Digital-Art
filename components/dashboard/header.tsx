'use client';

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session?.user?.name || 'Artist'}
        </p>
      </div>
      <Button>Upload Artwork</Button>
    </div>
  );
}