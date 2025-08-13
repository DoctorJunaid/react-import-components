import React from 'react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  className?: string;
  reverse?: boolean;
}

export function BorderBeam({
  duration = 8,
  size = 300,
  className,
  reverse = false,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden rounded-2xl",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl border-2 border-transparent",
          "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
          "animate-pulse"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      />
    </div>
  );
}