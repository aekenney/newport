import React, { useEffect, useRef } from 'react';
import { Particle, LensDebris } from '@/utils';
import { HERO_CONTENT } from '@/constants';
import { cn } from '@/utils';
import { heroStyles } from './styles';

/**
 * Burnout Hero component - animated canvas hero section with drifting car
 */
export const BurnoutHero: React.FC = () => {
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

        let t = 0;
        let carX = width / 2;
        let carY = height / 2;
        let carAngle = 0;

        const animate = (): void => {
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
                for (let i = 0; i < 2; i++) {
                    smoke.push(new Particle(rearLX, rearLY, -Math.cos(carAngle) * 10, -Math.sin(carAngle) * 5));
                    smoke.push(new Particle(rearRX, rearRY, -Math.cos(carAngle) * 10, -Math.sin(carAngle) * 5));

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
                const particle = smoke[i];
                if (particle) {
                    particle.update();
                    particle.draw(ctx);
                    if (particle.life <= 0) smoke.splice(i, 1);
                }
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
                const debris = rubber[i];
                if (debris) {
                    debris.update();
                    debris.draw(ctx);
                    if (debris.life <= 0) rubber.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = (): void => {
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
        <div className={cn(heroStyles.hero)}>
            <canvas ref={canvasRef} className={cn(heroStyles.canvas)} />

            <div className={cn(heroStyles.content)}>
                <h1 className={cn(heroStyles.title)}>
                    {HERO_CONTENT.title.toUpperCase()}
                </h1>
                <div className={cn(heroStyles.subtitleWrapper)}>
                    <p className={cn(heroStyles.subtitle)}>
                        {HERO_CONTENT.subtitle}
                    </p>
                    <div className={cn(heroStyles.dividers)}>
                        <span className={cn(heroStyles.divider, heroStyles.dividerOrange)}></span>
                        <span className={cn(heroStyles.divider, heroStyles.dividerBlue)}></span>
                    </div>
                </div>
            </div>

            <div className={cn(heroStyles.status)}>
                <div>
                    <span className={cn(heroStyles.statusLabel)}>{HERO_CONTENT.sessionLabel}</span>
                    <span className={cn(heroStyles.statusText)}>{HERO_CONTENT.sessionSubtext}</span>
                </div>
            </div>

            <div className={cn(heroStyles.vignette)}></div>
        </div>
    );
};
