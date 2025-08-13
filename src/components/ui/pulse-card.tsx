import { cn } from '@/lib/utils';

interface CardHoverEffectProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'purple' | 'blue' | 'amber' | 'rose';
  glowEffect?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/20',
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20',
};

const iconVariants = {
  purple: 'text-purple-500',
  blue: 'text-blue-500',
  amber: 'text-amber-500',
  rose: 'text-rose-500',
};

export function CardHoverEffect({
  icon,
  title,
  description,
  variant = 'purple',
  glowEffect = false,
  size = 'md',
  className,
}: CardHoverEffectProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-105',
        variantStyles[variant],
        sizeClasses[size],
        glowEffect && 'hover:shadow-2xl',
        className
      )}
    >
      {glowEffect && (
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      )}
      
      <div className="relative z-10">
        <div className={cn('mb-4 inline-flex', iconVariants[variant])}>
          {icon}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}