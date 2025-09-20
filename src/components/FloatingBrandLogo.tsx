import { useState } from "react";

interface FloatingBrandLogoProps {
  src: string;
  alt: string;
  style: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  color?: 'orange' | 'cream' | 'dark';
}

const FloatingBrandLogo = ({ src, alt, style, size = 'md', color = 'orange' }: FloatingBrandLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const colorClasses = {
    orange: 'bg-primary/10 border-primary/20',
    cream: 'bg-primary-muted/30 border-primary-muted/40',
    dark: 'bg-foreground/5 border-foreground/10'
  };

  return (
    <div
      className={`
        absolute brand-card float-animation rounded-lg p-4 cursor-pointer
        ${sizeClasses[size]} ${colorClasses[color]}
        ${isHovered ? 'scale-110' : ''}
        transition-all duration-300 ease-out
      `}
      style={{
        ...style,
        transform: `${style.transform || ''} ${isHovered ? 'scale(1.1)' : ''}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain filter drop-shadow-lg"
        style={{
          filter: isHovered ? 'brightness(1.1) contrast(1.1)' : undefined
        }}
      />
    </div>
  );
};

export default FloatingBrandLogo;