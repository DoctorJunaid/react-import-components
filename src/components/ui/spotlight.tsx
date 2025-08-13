import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  className?: string;
}

export function Spotlight({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(229, 62, 62, 0.08) 0%, rgba(229, 62, 62, 0.04) 50%, transparent 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, rgba(229, 62, 62, 0.08) 0%, rgba(229, 62, 62, 0.04) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, rgba(229, 62, 62, 0.06) 0%, rgba(229, 62, 62, 0.06) 80%, transparent 100%)",
  className,
}: SpotlightProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{ background: gradientFirst }}
      />
      <div
        className="absolute inset-0"
        style={{ background: gradientSecond }}
      />
      <div
        className="absolute inset-0"
        style={{ background: gradientThird }}
      />
    </div>
  );
}