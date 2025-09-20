import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FloatingBrandLogoProps {
  src: string;
  alt: string;
  style: CSSProperties;
  size?: "sm" | "md" | "lg";
  color?: "orange" | "cream" | "dark";
  className?: string;
}

const FloatingBrandLogo = ({
  src,
  alt,
  style,
  size = "md",
  color = "orange",
  className,
}: FloatingBrandLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-28 h-28",
    lg: "w-36 h-36",
  };

  const colorClasses = {
    orange: "bg-primary/15 border-primary/30 shadow-[0_18px_45px_rgba(249,115,22,0.28)]",
    cream: "bg-primary-muted/40 border-primary-muted/40 shadow-[0_16px_40px_rgba(237,219,204,0.28)]",
    dark: "bg-foreground/15 border-foreground/30 shadow-[0_16px_40px_rgba(16,9,5,0.25)]",
  };

  return (
    <div
      className={cn(
        "absolute float-animation rounded-3xl transition-transform duration-500 ease-out",
        sizeClasses[size],
        isHovered ? "scale-[1.08]" : "scale-100"
      )}
      style={{ ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "brand-card relative h-full w-full overflow-hidden rounded-3xl border p-4 backdrop-blur-md",
          colorClasses[color],
          className
        )}
      >
        <div className="absolute inset-0 rounded-2xl border border-white/10 mix-blend-soft-light" aria-hidden="true" />
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_60%)] opacity-60" aria-hidden="true" />
        <img
          src={src}
          alt={alt}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(16,9,5,0.35)] transition-transform duration-300"
          style={{
            filter: isHovered
              ? "brightness(1.18) contrast(1.18) saturate(1.22)"
              : "brightness(1.08) contrast(1.08) saturate(1.12)",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingBrandLogo;
