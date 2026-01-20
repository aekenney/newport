/**
 * Particle class for smoke effects in canvas animations
 */
export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
    opacity: number;

    constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        this.vx = vx + (Math.random() - 0.5) * 5;
        this.vy = vy + (Math.random() - 0.5) * 3;
        this.life = 1.0;
        this.size = Math.random() * 40 + 20;
        this.opacity = Math.random() * 0.2 + 0.1;
    }

    update(): void {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.005;
        this.size += 1.0;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = `rgba(180, 180, 180, ${this.life * this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

/**
 * LensDebris class for rubber debris effects in canvas animations
 */
export class LensDebris {
    x: number;
    y: number;
    size: number;
    life: number;
    rotation: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 3;
        this.life = 1.0;
        this.rotation = Math.random() * Math.PI * 2;
    }

    update(): void {
        this.life -= 0.0015;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(10, 10, 10, ${this.life})`;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.fillStyle = `rgba(0, 0, 0, ${this.life * 0.3})`;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size * 2.5, this.size * 0.4);
        ctx.restore();
    }
}
