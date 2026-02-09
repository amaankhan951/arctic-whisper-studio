import { useState, useEffect, useRef } from 'react';

interface HomeVideoLoadingProps {
  onComplete: () => void;
}

const HomeVideoLoading = ({ onComplete }: HomeVideoLoadingProps) => {
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Gate opens around 3.2s — start crossfade then
    const fadeTimer = setTimeout(() => {
      setPhase('fading');
    }, 3200);

    // After the crossfade completes, remove the overlay
    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home-loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideoLoading;
