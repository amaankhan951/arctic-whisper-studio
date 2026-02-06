import { useState, useEffect } from 'react';

interface HomeVideoLoadingProps {
  onComplete: () => void;
}

const HomeVideoLoading = ({ onComplete }: HomeVideoLoadingProps) => {
  const [phase, setPhase] = useState<'playing' | 'dissolving' | 'done'>('playing');

  useEffect(() => {
    // Video plays for ~4s, then dissolve
    const dissolveTimer = setTimeout(() => {
      setPhase('dissolving');
    }, 4000);

    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4700);

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === 'dissolving' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home-loading.mp4" type="video/mp4" />
      </video>

      {/* Frost dissolve effect */}
      {phase === 'dissolving' && (
        <div className="absolute inset-0 bg-white animate-frost-dissolve" />
      )}
    </div>
  );
};

export default HomeVideoLoading;
