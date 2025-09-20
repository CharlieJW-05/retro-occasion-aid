import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RetroButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const RetroButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className 
}: RetroButtonProps) => {
  const variants = {
    primary: 'retro-button text-primary-foreground font-bold tracking-wider uppercase',
    secondary: 'bg-secondary/80 text-secondary-foreground border-2 border-secondary hover:bg-secondary',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary/10'
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        'transition-all duration-300 transform hover:scale-105',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Button>
  );
};

export default RetroButton;