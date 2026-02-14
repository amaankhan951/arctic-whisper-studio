import { useState, useEffect, useRef, useCallback } from 'react';

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

    // Start sequence once video has enough data to play
    const handleCanPlay = () => startSequence();

    if (video.readyState >= 3) {
      startSequence();
    } else {
      video.addEventListener('canplaythrough', handleCanPlay, { once: true });
      // Fallback: if video takes too long to buffer, start anyway
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
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ imageRendering: 'auto' }}
      >
        <source src="/home-loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideoLoading;
