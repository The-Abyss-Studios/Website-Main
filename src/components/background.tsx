'use client';

import { useEffect, useRef } from 'react';

const GOLDEN_RATIO = 1.618033988749895;

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (ctx: CanvasRenderingContext2D, time: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const baseCrimson = [220, 20, 60]; // RGB for crimson
      const darkCrimson = [176, 16, 48]; // RGB for darker crimson
      
      // Subtle color transitions
      const t = (Math.sin(time * 0.2) + 1) / 2; // Slower, more subtle transition
      const r1 = Math.floor(baseCrimson[0] * (1 - t) + darkCrimson[0] * t);
      const g1 = Math.floor(baseCrimson[1] * (1 - t) + darkCrimson[1] * t);
      const b1 = Math.floor(baseCrimson[2] * (1 - t) + darkCrimson[2] * t);
      
      gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0.1)`);
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.2)');
      gradient.addColorStop(1, `rgba(${r1}, ${g1}, ${b1}, 0.1)`);
      
      return gradient;
    };

    const drawLissajousCurve = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      a: number,
      b: number,
      delta: number,
      time: number,
      scale: number
    ) => {
      ctx.beginPath();
      const points = 100;
      for (let i = 0; i <= points; i++) {
        const t = (i / points) * Math.PI * 2;
        const x1 = x + Math.sin(a * t + delta) * scale;
        const y1 = y + Math.sin(b * t) * scale;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
      }
      ctx.stroke();
    };

    const drawGoldenSpiral = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      time: number,
      scale: number
    ) => {
      ctx.beginPath();
      const points = 100;
      for (let i = 0; i <= points; i++) {
        const t = (i / points) * Math.PI * 4;
        const radius = Math.pow(GOLDEN_RATIO, t / Math.PI) * scale;
        const x1 = x + Math.cos(t + time * 0.2) * radius;
        const y1 = y + Math.sin(t + time * 0.2) * radius;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
      }
      ctx.stroke();
    };

    const drawParticleTrail = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      time: number,
      index: number
    ) => {
      const trailLength = 5;
      const baseOpacity = 0.15; // Reduced base opacity for subtlety
      
      for (let j = 0; j < trailLength; j++) {
        const opacity = baseOpacity * (1 - j / trailLength);
        ctx.beginPath();
        ctx.arc(
          x + Math.cos(time * 0.5 + index) * (j * 2),
          y + Math.sin(time * 0.5 + index) * (j * 2),
          1.5,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        ctx.fill();
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set up the base gradient
      const gradient = createGradient(ctx, time);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw patterns
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.45;

      // Draw multiple layers of patterns
      for (let i = 0; i < 5; i++) {
        const layerTime = time * (1 + i * 0.2);
        const radius = maxRadius * (1 - i * 0.15);
        
        // Lissajous curves
        ctx.strokeStyle = `rgba(220, 20, 60, ${0.1 - i * 0.015})`;
        ctx.lineWidth = 1;
        drawLissajousCurve(ctx, centerX, centerY, 3, 2, layerTime * 0.3, layerTime, radius);
        drawLissajousCurve(ctx, centerX, centerY, 2, 3, layerTime * 0.2, layerTime, radius * 0.8);

        // Golden spiral
        ctx.strokeStyle = `rgba(220, 20, 60, ${0.08 - i * 0.012})`;
        drawGoldenSpiral(ctx, centerX, centerY, layerTime, radius * 0.6);
      }

      // Draw geometric patterns
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2 + time * 0.2;
        const x = centerX + Math.cos(angle) * maxRadius * 0.7;
        const y = centerY + Math.sin(angle) * maxRadius * 0.7;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 20, 60, ${0.15})`;
        ctx.fill();

        // Draw connecting lines
        if (i > 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          const prevAngle = ((i - 1) / 16) * Math.PI * 2 + time * 0.2;
          const prevX = centerX + Math.cos(prevAngle) * maxRadius * 0.7;
          const prevY = centerY + Math.sin(prevAngle) * maxRadius * 0.7;
          ctx.lineTo(prevX, prevY);
          ctx.strokeStyle = `rgba(220, 20, 60, ${0.1})`;
          ctx.stroke();
        }
      }

      // Draw particle trails
      for (let i = 0; i < 40; i++) {
        const angle = (i / 40) * Math.PI * 2 + time * 0.3;
        const x = centerX + Math.cos(angle) * maxRadius * 0.5;
        const y = centerY + Math.sin(angle) * maxRadius * 0.5;
        drawParticleTrail(ctx, x, y, time, i);
      }

      time += 0.008; // Slower animation speed for subtlety
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 0.7 }} // Reduced opacity for subtlety
    />
  );
} 