import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  imageUrl: string;
  alt: string;
  glowColor?: string;
  className?: string;
}

export default function PhoneMockup({
  imageUrl,
  alt,
  glowColor = 'rgba(229, 62, 62, 0.25)',
  className,
}: PhoneMockupProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Phone frame */}
      <div className="relative mx-auto w-full max-w-sm">
        {/* Glow effect */}
        <div
          className="absolute -inset-4 rounded-3xl opacity-75 blur-2xl"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
        
        {/* Phone container */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-2 shadow-2xl">
          {/* Screen */}
          <div className="overflow-hidden rounded-2xl bg-black">
            <img
              src={imageUrl}
              alt={alt}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}