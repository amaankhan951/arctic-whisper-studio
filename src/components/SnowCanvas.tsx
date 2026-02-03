import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  phase: number;
}

const SnowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 100;
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - 100,
      radius: 1.5 + Math.random() * 3,
      speedY: 0.15 + Math.random() * 0.4,
      speedX: 0,
      opacity: 0.35 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      particlesRef.current.forEach((particle) => {
        // Update position with sinusoidal sway
        particle.speedX = Math.sin(time + particle.phase) * (0.3 + Math.random() * 0.6);
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particle when it exits bottom
        if (particle.y > canvas.height + 20) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        // Wrap horizontally
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.x < -10) particle.x = canvas.width + 10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SnowCanvas;
