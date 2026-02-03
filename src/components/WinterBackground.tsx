import { useEffect, useState, useRef } from 'react';

const WinterBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      setMouseX((e.clientX - centerX) / centerX);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden z-0">
      {/* Layer 1 - Sky Gradient */}
      <div 
        className="absolute inset-0 bg-sky-gradient"
        style={{
          backgroundSize: '100% 200%',
        }}
      />

      {/* Layer 2 - Distant Mountains */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[70vh] pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        style={{
          transform: `translateY(${scrollY * 0.06}px) translateX(${mouseX * 2}px)`,
        }}
      >
        {/* Farthest peaks */}
        <path
          d="M0 600 L0 350 L200 180 L350 280 L500 120 L650 220 L800 100 L950 200 L1100 80 L1250 180 L1440 150 L1440 600 Z"
          fill="#e2e7ec"
        />
        {/* Middle peaks */}
        <path
          d="M0 600 L0 400 L150 280 L300 350 L450 200 L600 300 L750 180 L900 280 L1050 160 L1200 260 L1350 200 L1440 250 L1440 600 Z"
          fill="#d0d8e0"
        />
        {/* Nearest peaks */}
        <path
          d="M0 600 L0 450 L100 350 L250 420 L400 280 L550 380 L700 260 L850 360 L1000 240 L1150 340 L1300 280 L1440 350 L1440 600 Z"
          fill="#c5ced8"
        />
        {/* Snow caps */}
        <path
          d="M480 200 L500 120 L520 200 Z M780 180 L800 100 L820 180 Z M1080 160 L1100 80 L1120 160 Z"
          fill="#f4f6f8"
          opacity="0.9"
        />
      </svg>

      {/* Layer 3 - Pine Forest Left */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-[50vh] pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMinYMax slice" className="w-full h-full">
          {/* Pine trees - varied heights */}
          <path d="M50 400 L50 300 L20 300 L50 250 L30 250 L50 200 L40 200 L60 140 L80 200 L70 200 L90 250 L70 250 L90 300 L60 300 L60 400 Z" fill="#3d5c4d" />
          <path d="M120 400 L120 320 L100 320 L120 280 L105 280 L120 240 L110 240 L130 180 L150 240 L140 240 L155 280 L140 280 L160 320 L140 320 L140 400 Z" fill="#4a6b5a" />
          <path d="M200 400 L200 280 L175 280 L200 230 L180 230 L200 180 L190 180 L210 100 L230 180 L220 180 L240 230 L220 230 L240 280 L215 280 L215 400 Z" fill="#3d5c4d" />
          <path d="M280 400 L280 330 L260 330 L280 290 L265 290 L280 250 L270 250 L290 190 L310 250 L300 250 L315 290 L300 290 L320 330 L300 330 L300 400 Z" fill="#6b8a7a" />
          <path d="M350 400 L350 300 L330 300 L350 260 L335 260 L350 220 L345 220 L360 160 L375 220 L370 220 L385 260 L370 260 L390 300 L365 300 L365 400 Z" fill="#4a6b5a" />
        </svg>
      </div>

      {/* Layer 3 - Pine Forest Right */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-[50vh] pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMaxYMax slice" className="w-full h-full">
          {/* Pine trees - varied heights */}
          <path d="M50 400 L50 280 L25 280 L50 230 L30 230 L50 180 L40 180 L60 100 L80 180 L70 180 L90 230 L70 230 L90 280 L65 280 L65 400 Z" fill="#4a6b5a" />
          <path d="M130 400 L130 310 L110 310 L130 270 L115 270 L130 230 L120 230 L140 170 L160 230 L150 230 L165 270 L150 270 L170 310 L150 310 L150 400 Z" fill="#3d5c4d" />
          <path d="M210 400 L210 320 L190 320 L210 280 L195 280 L210 240 L200 240 L220 180 L240 240 L230 240 L245 280 L230 280 L250 320 L230 320 L230 400 Z" fill="#6b8a7a" />
          <path d="M290 400 L290 290 L270 290 L290 250 L275 250 L290 210 L280 210 L300 140 L320 210 L310 210 L325 250 L310 250 L330 290 L310 290 L310 400 Z" fill="#3d5c4d" />
          <path d="M360 400 L360 330 L345 330 L360 295 L350 295 L360 260 L355 260 L370 210 L385 260 L380 260 L390 295 L380 295 L395 330 L375 330 L375 400 Z" fill="#4a6b5a" />
        </svg>
      </div>

      {/* Layer 4 - Fog Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cloud A - Top */}
        <div
          className="absolute top-[25%] -left-[50%] w-[200vw] h-24 animate-drift-cloud-1"
          style={{
            background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Cloud B - Middle */}
        <div
          className="absolute top-[45%] -left-[50%] w-[200vw] h-32 animate-drift-cloud-2"
          style={{
            background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(255,255,255,0.09) 0%, transparent 70%)',
          }}
        />
        {/* Cloud C - Lower */}
        <div
          className="absolute top-[60%] -left-[50%] w-[200vw] h-20 animate-drift-cloud-3"
          style={{
            background: 'radial-gradient(ellipse 50% 100% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Layer 5 - Foreground Snow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(220,228,235,0.4) 60%, #e8edf2 100%)',
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      />
    </div>
  );
};

export default WinterBackground;
