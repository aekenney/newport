
import React, { useEffect, useRef } from 'react';

const SystemFlowHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 400;
    let animationFrameId: number;

    const particles: any[] = [];
    const pipes = [
      { y: height * 0.3, speed: 2 },
      { y: height * 0.5, speed: 1.5 },
      { y: height * 0.7, speed: 2.5 }
    ];

    class FlowParticle {
      x: number; y: number; s: number; l: number;
      constructor(y: number, speed: number) {
        this.x = Math.random() * width;
        this.y = y + (Math.random() - 0.5) * 20;
        this.s = speed + Math.random();
        this.l = Math.random() * 40 + 20;
      }
      update() {
        this.x += this.s;
        if (this.x > width) this.x = -this.l;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.l, this.y);
        ctx.stroke();
      }
    }

    pipes.forEach(p => {
      for(let i=0; i<30; i++) particles.push(new FlowParticle(p.y, p.speed));
    });

    const animate = () => {
      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.02)';
      ctx.lineWidth = 1;
      for(let i=0; i<width; i+=40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for(let i=0; i<height; i+=40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      // Pipe outlines
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      pipes.forEach(p => {
        ctx.strokeRect(-10, p.y - 15, width + 20, 30);
      });

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      // Technical markers
      ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
      ctx.font = '9px JetBrains Mono';
      pipes.forEach((p, i) => {
        ctx.fillText(`FLOW_CTRL_NODE_${i}: ${p.speed.toFixed(2)} m³/s`, 20, p.y - 25);
        ctx.fillText(`PRESSURE: ${((p.speed * 12.5) + (Math.random() * 0.5)).toFixed(1)} PSI`, 20, p.y + 35);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => { width = canvas.width = window.innerWidth; };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] border-b border-white/5 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-transparent to-[#0f0f0f] pointer-events-none"></div>
      <div className="absolute top-10 left-10">
        <h2 className="text-2xl font-black italic tracking-tighter text-sky-500 uppercase">Systems_Flow_Analysis</h2>
        <p className="mono text-[9px] text-neutral-600 mt-1">REAL_TIME_SIMULATION_ACTIVE // V.4.2.0</p>
      </div>
    </div>
  );
};

export default SystemFlowHero;
