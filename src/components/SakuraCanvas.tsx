import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayOffset: number;
  type: "sakura" | "snow";
};

export default function SakuraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const petals: Petal[] = [];
    const count = Math.floor((w * h) / 22000);

    const createPetal = (): Petal => {
      const type: "sakura" | "snow" = Math.random() < 0.75 ? "sakura" : "snow";
      return {
        x: Math.random() * w,
        y: Math.random() * h - h,
        size: type === "sakura" ? 6 + Math.random() * 8 : 2 + Math.random() * 3,
        speedY: 0.3 + Math.random() * 0.8,
        speedX: -0.3 + Math.random() * 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: 0.4 + Math.random() * 0.5,
        sway: 20 + Math.random() * 40,
        swaySpeed: 0.005 + Math.random() * 0.01,
        swayOffset: Math.random() * Math.PI * 2,
        type,
      };
    };

    for (let i = 0; i < count; i++) petals.push(createPetal());

    let frame = 0;
    let rafId = 0;

    const drawSakura = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      // 5-petal sakura shape
      const s = p.size;
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, s);
      gradient.addColorStop(0, "#fce8ec");
      gradient.addColorStop(0.6, "#f5c6ce");
      gradient.addColorStop(1, "#e8a5b1");
      ctx.fillStyle = gradient;

      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const x = Math.cos(angle) * s;
        const y = Math.sin(angle) * s;
        const cx1 = Math.cos(angle - 0.3) * s * 0.6;
        const cy1 = Math.sin(angle - 0.3) * s * 0.6;
        const cx2 = Math.cos(angle + 0.3) * s * 0.6;
        const cy2 = Math.sin(angle + 0.3) * s * 0.6;
        if (i === 0) ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(cx1, cy1, x, y);
        ctx.quadraticCurveTo(cx2, cy2, 0, 0);
      }
      ctx.fill();

      // center
      ctx.fillStyle = "#c8385a";
      ctx.globalAlpha = p.opacity * 0.4;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawSnow = (p: Petal) => {
      ctx.save();
      ctx.globalAlpha = p.opacity * 0.7;
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      for (const p of petals) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(frame * p.swaySpeed + p.swayOffset) * 0.5;
        p.rotation += p.rotationSpeed;

        if (p.y > h + 20) {
          p.y = -20;
          p.x = Math.random() * w;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        if (p.type === "sakura") drawSakura(p);
        else drawSnow(p);
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
