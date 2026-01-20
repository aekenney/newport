
import React, { useEffect, useRef } from 'react';

const DriftHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 500;
    let animationFrameId: number;

    const smokeParticles: any[] = [];
    const tireMarks: any[] = [];

    let carX = -200;
    let carY = height / 2;
    let angle = 0;
    let speed = 8;
    let isDrifting = false;

    class TireMark {
      constructor(public x: number, public y: number, public a: number) {}
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.a);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(-10, -15, 20, 4);
        ctx.fillRect(-10, 11, 20, 4);
        ctx.restore();
      }
    }

    class Particle {
      x: number; y: number; vx: number; vy: number; life: number; size: number;
      constructor(x: number, y: number) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 4 - speed * 0.5;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1.0;
        this.size = Math.random() * 30 + 10;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.life -= 0.01;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(100, 100, 100, ${this.life * 0.3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Technical Ground Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
      }

      // Physics logic
      carX += speed;
      
      // Trigger drift in the middle
      if (carX > width * 0.3 && carX < width * 0.7) {
        isDrifting = true;
        angle = Math.min(angle + 0.02, Math.PI / 6);
        carY += Math.sin(angle) * 2;
        tireMarks.push(new TireMark(carX, carY, angle));
        for(let i=0; i<2; i++) smokeParticles.push(new Particle(carX - 40, carY));
      } else {
        isDrifting = false;
        angle = Math.max(angle - 0.02, 0);
      }

      if (carX > width + 200) {
        carX = -200;
        carY = height / 2 + (Math.random() - 0.5) * 100;
        tireMarks.length = 0;
      }

      // Draw Tire Marks
      tireMarks.forEach(m => m.draw(ctx));

      // Draw Smoke
      for (let i = smokeParticles.length - 1; i >= 0; i--) {
        smokeParticles[i].update();
        smokeParticles[i].draw(ctx);
        if (smokeParticles[i].life <= 0) smokeParticles.splice(i, 1);
      }

      // Draw Car (Simplified Engineering View)
      ctx.save();
      ctx.translate(carX, carY);
      ctx.rotate(angle);
      
      // Chassis
      ctx.fillStyle = '#f97316'; // Racing Orange
      ctx.fillRect(-50, -25, 100, 50);
      
      // Highlights
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.fillRect(-30, -20, 40, 40);
      
      // Headlights
      ctx.fillStyle = '#fff';
      ctx.fillRect(45, -20, 5, 10);
      ctx.fillRect(45, 10, 5, 10);
      
      // Ground Shadow
      ctx.restore();

      // UI Text Overlays
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.fillText(`VELOCITY: ${speed.toFixed(1)} m/s`, 40, 60);
      ctx.fillText(`ANGLE: ${(angle * 180 / Math.PI).toFixed(1)}°`, 40, 80);
      ctx.fillText(`SYSTEM_STATUS: ${isDrifting ? 'LATERAL_FORCE_ACTIVE' : 'NOMINAL'}`, 40, 100);

      ctx.fillStyle = 'white';
      ctx.font = '700 80px Space Grotesk';
      ctx.fillText('ALEX', width / 2 - 100, height / 2 + 30);
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 2;
      ctx.strokeText('ALEX', width / 2 - 100, height / 2 + 30);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-[#0f0f0f] overflow-hidden border-b border-white/10">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
            <h1 className="text-8xl font-black tracking-tighter mix-blend-difference">
                SYSTEMS <span className="text-orange-500">ENGINEER</span>
            </h1>
            <p className="mono text-sm text-neutral-500 tracking-[0.4em] uppercase mt-4">
                Optimization // Performance // Critical Infrastructure
            </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[20px] border-[#0f0f0f] opacity-20"></div>
    </div>
  );
};

export default DriftHero;
