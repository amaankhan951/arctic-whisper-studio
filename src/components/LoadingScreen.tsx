import { useState, useEffect } from 'react';
import logoIcon from '@/assets/logo-icon.png';

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
          <img 
            src={logoIcon} 
            alt="Thanda Kapda Logo" 
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
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
          THANDA KAPDA
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
