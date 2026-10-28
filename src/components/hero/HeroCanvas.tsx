"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized offset (-1 to 1)
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate stars with dusk-inspired colors (lavender, warm amber, cyan, soft white)
    const starColors = ["#c8b8e8", "#ffd8b0", "#8fcaff", "#ffffff", "#f0eaff"];
    let stars: Star[] = [];

    const initStars = () => {
      const count = Math.min(Math.floor((width * height) / 9000), 140);
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.85), // Keep mostly in upper 85%
          size: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: 0,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initStars();

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle celestial parallax shift
      const offsetX = mouseRef.current.x * 16;
      const offsetY = mouseRef.current.y * 12;

      // Draw dusk atmosphere horizon gradient (inspired by Brijesh's Godhuli dusk)
      const horizonGradient = ctx.createRadialGradient(
        width * 0.5 + offsetX * 0.5,
        height * 0.95 + offsetY * 0.5,
        50,
        width * 0.5,
        height * 0.95,
        width * 0.7
      );
      horizonGradient.addColorStop(0, "rgba(216, 120, 48, 0.12)"); // warm amber bloom
      horizonGradient.addColorStop(0.35, "rgba(77, 141, 255, 0.08)"); // electric blue
      horizonGradient.addColorStop(0.7, "rgba(30, 20, 60, 0.04)"); // deep dusk violet
      horizonGradient.addColorStop(1, "transparent");

      ctx.fillStyle = horizonGradient;
      ctx.fillRect(0, 0, width, height);

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.3;
        star.alpha = Math.max(0.1, Math.min(1, currentAlpha));

        const starX = star.x + offsetX * (star.size * 0.5);
        const starY = star.y + offsetY * (star.size * 0.5);

        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Delicate glow for larger stars
        if (star.size > 1.4) {
          ctx.beginPath();
          ctx.arc(starX, starY, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * 0.2;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
    </div>
  );
}
