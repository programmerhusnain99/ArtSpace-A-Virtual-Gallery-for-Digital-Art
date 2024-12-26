'use client';

import { Html, useProgress } from '@react-three/drei';

export function LoadingScreen() {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-1 w-48 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Loading Gallery ({Math.round(progress)}%)
        </p>
      </div>
    </Html>
  );
}