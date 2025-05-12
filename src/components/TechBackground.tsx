'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  connections: number[];
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize points
    const initPoints = () => {
      const points: Point[] = [];
      const numPoints = Math.floor((canvas.width * canvas.height) / 10000); // Increased density

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Slower movement
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5, // Smaller points
          hue: Math.random() * 20 - 10,
          connections: [], // Track connections
        });
      }

      // Create constellation patterns
      const createConstellation = (centerX: number, centerY: number, radius: number, numPoints: number) => {
        const startIndex = points.length;
        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          points.push({
            x,
            y,
            vx: 0,
            vy: 0,
            size: 1,
            hue: 0,
            connections: [],
          });
        }

        // Connect points in the constellation
        for (let i = 0; i < numPoints; i++) {
          const currentIndex = startIndex + i;
          const nextIndex = startIndex + ((i + 1) % numPoints);
          points[currentIndex].connections.push(nextIndex);
        }
      };

      // Add multiple constellations
      const numConstellations = 5;
      for (let i = 0; i < numConstellations; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100 + 50;
        const points = Math.floor(Math.random() * 5) + 5;
        createConstellation(x, y, radius, points);
      }

      pointsRef.current = points;
    };
    initPoints();

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const time = Date.now() * 0.001;

      // Update and draw points
      points.forEach((point, i) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw point with crimson color
        const baseHue = 348;
        const hue = (baseHue + point.hue + Math.sin(time + i) * 10) % 360;
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw constellation connections
        point.connections.forEach(connectionIndex => {
          const connectedPoint = points[connectionIndex];
          ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.3)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(connectedPoint.x, connectedPoint.y);
          ctx.stroke();
        });

        // Draw dynamic connections
        points.forEach((otherPoint, j) => {
          if (i === j) return;

          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            const opacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      // Add mathematical patterns
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      // Draw rotating circles
      for (let i = 0; i < 3; i++) {
        const angle = time * (0.5 + i * 0.2);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.strokeStyle = `hsla(348, 100%, 50%, 0.1)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw sine wave
      ctx.strokeStyle = 'hsla(348, 100%, 50%, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = centerY + Math.sin(x * 0.01 + time) * 50;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #000000, #1a0000)' }}
    />
  );
} 