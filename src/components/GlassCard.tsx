import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className = '', hover = true, onClick }: GlassCardProps) => {
  return (
    <div 
      className={`${hover ? 'glass-card' : 'glass-card-static'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
