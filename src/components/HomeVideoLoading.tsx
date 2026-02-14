import { useState, useEffect, useRef, useCallback } from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface HomeVideoLoadingProps {
  onComplete: () => void;
}

const HomeVideoLoading = ({ onComplete }: HomeVideoLoadingProps) => {
  const [phase, setPhase] = useState<'waiting' | 'playing' | 'fading' | 'done'>('waiting');
  const videoRef = useRef<HTMLVideoElement>(null);
  const timersRef = useRef<number[]>([]);

  const startSequence = useCallback(() => {
    setPhase('playing');

    const fadeTimer = window.setTimeout(() => {
      setPhase('fading');
    }, 3200);

    const completeTimer = window.setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4600);

    timersRef.current = [fadeTimer, completeTimer];
  }, [onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => startSequence();

    if (video.readyState >= 3) {
      startSequence();
    } else {
      video.addEventListener('canplaythrough', handleCanPlay, { once: true });
      const fallback = window.setTimeout(() => startSequence(), 800);
      timersRef.current.push(fallback);
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      timersRef.current.forEach(clearTimeout);
    };
  }, [startSequence]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
      }}
    >
      {/* Solid cover shown until video is ready */}
      <div 
        className="absolute inset-0 bg-[#0a1216] z-[1]"
        style={{
          opacity: phase === 'waiting' ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Logo overlay centered on video */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <div 
          className="flex flex-col items-center gap-3 opacity-0 animate-scale-fade-in"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <img 
            src={logoIcon} 
            alt="Thanda Kapda Logo" 
            className="w-20 h-20 object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          />
          <h1 
            className="font-display text-2xl tracking-[4px] text-white opacity-0 animate-fade-slide-up"
            style={{ 
              animationDelay: '1.0s', 
              animationFillMode: 'forwards',
              textShadow: '0 2px 16px rgba(0,0,0,0.5)'
            }}
          >
            THANDA KAPDA
          </h1>
        </div>
      </div>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home-loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideoLoading;
