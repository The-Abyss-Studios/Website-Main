"use client";

import { useRef, useEffect } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxIterations = 100; // Adjust for detail
    let zoom = 1;
    let offsetX = 0;
    let offsetY = 0;
    let time = 0;

    const drawFractal = () => {
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let zx = 1.5 * (x - width / 2) / (0.5 * zoom * width) + offsetX;
          let zy = (y - height / 2) / (0.5 * zoom * height) + offsetY;

          let i = 0;
          while (zx * zx + zy * zy < 4 && i < maxIterations) {
            const xtemp = zx * zx - zy * zy;
            zy = 2 * zx * zy + Math.sin(time * 0.001); // Dynamic effect
            zx = xtemp;
            i++;
          }

          const pixel = (y * width + x) * 4;
          const color = i === maxIterations ? 0 : (255 - (i * 9) % 255);

          data[pixel] = color;        // Red
          data[pixel + 1] = 0;        // Green
          data[pixel + 2] = color;    // Blue
          data[pixel + 3] = 255;      // Alpha
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const render = () => {
      time += 16; // Control speed of animation
      drawFractal();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
