import React, { useEffect, useRef } from 'react';

const BurnoutHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 650;
    let animationFrameId: number;

    const smoke: Particle[] = [];
    const rubber: LensDebris[] = [];

    class Particle {
      x: number; y: number; vx: number; vy: number; life: number; size: number; opacity: number;
      constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        this.vx = vx + (Math.random() - 0.5) * 5;
        this.vy = vy + (Math.random() - 0.5) * 3;
        this.life = 1.0;
        this.size = Math.random() * 40 + 20;
        this.opacity = Math.random() * 0.2 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.005;
        this.size += 1.0;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(180, 180, 180, ${this.life * this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class LensDebris {
      x: number; y: number; size: number; life: number; rotation: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 3;
        this.life = 1.0;
        this.rotation = Math.random() * Math.PI * 2;
      }
      update() {
        this.life -= 0.0015;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(10, 10, 10, ${this.life})`;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.fillStyle = `rgba(0, 0, 0, ${this.life * 0.3})`;
        ctx.fillRect(-this.size/2, -this.size/2, this.size * 2.5, this.size * 0.4);
        ctx.restore();
      }
    }

    let t = 0;
    let carX = width / 2;
    let carY = height / 2;
    let carAngle = 0;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle road lines
      ctx.strokeStyle = 'rgba(255,255,255,0.02)';
      ctx.lineWidth = 1;
      ctx.setLineDash([30, 60]);
      ctx.beginPath();
      ctx.moveTo(0, height * 0.5);
      ctx.lineTo(width, height * 0.5);
      ctx.stroke();
      ctx.setLineDash([]);

      // Move car in a wide figure-8
      t += 0.008;
      const prevX = carX;
      const prevY = carY;
      carX = width / 2 + Math.cos(t) * (width * 0.4);
      carY = height / 2 + Math.sin(t * 2) * (height * 0.25);
      
      const dx = carX - prevX;
      const dy = carY - prevY;
      const baseAngle = Math.atan2(dy, dx);
      const driftIntensity = Math.sin(t * 1.8);
      carAngle = baseAngle + (driftIntensity * 0.7);

      // Tires
      const rearLX = carX + Math.cos(carAngle + 2.5) * 45;
      const rearLY = carY + Math.sin(carAngle + 2.5) * 45;
      const rearRX = carX + Math.cos(carAngle - 2.5) * 45;
      const rearRY = carY + Math.sin(carAngle - 2.5) * 45;

      if (Math.abs(driftIntensity) > 0.2) {
        for(let i=0; i<2; i++) {
          smoke.push(new Particle(rearLX, rearLY, -Math.cos(carAngle)*10, -Math.sin(carAngle)*5));
          smoke.push(new Particle(rearRX, rearRY, -Math.cos(carAngle)*10, -Math.sin(carAngle)*5));
          
          if (Math.random() > 0.94) {
            rubber.push(new LensDebris(
              Math.random() * width,
              Math.random() * height
            ));
          }
        }
      }

      // Draw Smoke
      for (let i = smoke.length - 1; i >= 0; i--) {
        smoke[i].update();
        smoke[i].draw(ctx);
        if (smoke[i].life <= 0) smoke.splice(i, 1);
      }

      // Draw Car
      ctx.save();
      ctx.translate(carX, carY);
      ctx.rotate(carAngle);
      ctx.shadowBlur = 40;
      ctx.shadowColor = 'rgba(0,0,0,1)';
      ctx.fillStyle = '#111';
      ctx.fillRect(-50, -25, 100, 50);
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 2;
      ctx.strokeRect(-50, -25, 100, 50);
      ctx.fillStyle = '#050505';
      ctx.fillRect(-18, -18, 36, 36);
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(255,255,255,0.7)';
      ctx.fillRect(45, -20, 6, 12);
      ctx.fillRect(45, 8, 6, 12);
      ctx.restore();

      // Draw Rubber (Screen Space)
      for (let i = rubber.length - 1; i >= 0; i--) {
        rubber[i].update();
        rubber[i].draw(ctx);
        if (rubber[i].life <= 0) rubber.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 650;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[650px] border-b border-white/5 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="block w-full h-full opacity-80" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center select-none z-10">
        <h1 className="text-[12rem] md:text-[18rem] font-black tracking-tighter text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] leading-none">
          ALEX
        </h1>
        <div className="mt-[-2rem] flex flex-col items-center gap-6">
          <p className="text-neutral-400 font-bold tracking-[0.5em] uppercase text-xs md:text-sm bg-black/60 px-8 py-3 rounded-full backdrop-blur-md border border-white/10">
            Systems Infrastructure & Embedded Performance
          </p>
          <div className="flex gap-10 opacity-40">
            <span className="w-16 h-[1px] bg-orange-500"></span>
            <span className="w-16 h-[1px] bg-blue-500"></span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-left opacity-30 select-none">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Session_Active</span>
          <span className="text-[9px] mono text-neutral-500 uppercase tracking-widest">Autonomous_Vector_Rendering</span>
        </div>
      </div>
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
};

export default BurnoutHero;