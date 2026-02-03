import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
  isShort?: boolean;
}

const LoadingScreen = ({ onComplete, isShort = false }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'loading' | 'dissolving' | 'done'>('loading');
  
  const duration = isShort ? 1000 : 2200;

  useEffect(() => {
    const dissolveTimer = setTimeout(() => {
      setPhase('dissolving');
    }, duration + 300);

    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, duration + 1000);

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === 'dissolving' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background with subtle dark veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b8c8d8] via-[#dce5ed] to-[#eef2f5]" />
      <div className="absolute inset-0 bg-[rgba(10,18,22,0.15)]" />
      
      {/* Frost dissolve effect */}
      {phase === 'dissolving' && (
        <div className="absolute inset-0 bg-white animate-frost-dissolve" />
      )}

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Logo Icon */}
        <div 
          className="opacity-0 animate-scale-fade-in"
          style={{ animationDelay: isShort ? '0s' : '0.2s', animationFillMode: 'forwards' }}
        >
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 64 64" 
            fill="none"
            className="drop-shadow-lg"
          >
            {/* Water droplet merged with leaf */}
            <path
              d="M32 4C32 4 12 28 12 40C12 52 21 60 32 60C43 60 52 52 52 40C52 28 32 4 32 4Z"
              fill="hsl(150, 32%, 18%)"
            />
            <path
              d="M32 12C32 12 18 30 18 40C18 48 24 54 32 54"
              stroke="hsl(135, 18%, 67%)"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            {/* Leaf vein */}
            <path
              d="M32 20L32 48M32 30L26 36M32 38L38 44"
              stroke="hsl(135, 18%, 67%)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 
          className="font-display text-2xl tracking-[4px] text-white opacity-0 animate-fade-slide-up"
          style={{ 
            animationDelay: isShort ? '0.2s' : '1.0s', 
            animationFillMode: 'forwards',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          THANDA KAPDA CO.
        </h1>

        {/* Tagline */}
        {!isShort && (
          <p 
            className="font-accent italic text-base text-white/65 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
          >
            Essence of Pure Indulgence
          </p>
        )}

        {/* Progress Bar */}
        <div 
          className="w-[220px] h-[3px] rounded-full bg-white/15 overflow-hidden opacity-0 animate-fade-slide-up"
          style={{ animationDelay: isShort ? '0.1s' : '1.1s', animationFillMode: 'forwards' }}
        >
          <div 
            className="h-full rounded-full bg-pine"
            style={{
              width: '0%',
              animation: `progress-fill ${duration / 1000}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              animationDelay: isShort ? '0.2s' : '1.2s',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
