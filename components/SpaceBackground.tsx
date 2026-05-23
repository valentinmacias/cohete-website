"use client";

import { useEffect, useRef } from "react";

// --- CUSTOMIZE YOUR STARFIELD HERE ---
const STAR_COUNT = 180; // Total number of stars on screen
const SPEED_MIN = 0.1; // Minimum movement speed per frame
const SPEED_MAX = 0.2; // Maximum movement speed per frame
const SIZE_MIN = 1.5; // Base size for background stars (pixels)
const SIZE_MAX = 3.5; // Size for closer, brighter stars (pixels)
const LARGE_STAR_CHANCE = 0.15; // 15% chance a star is large, 85% chance it's small
// -------------------------------------

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const stars: Star[] = [];

    class Star {
      x!: number;
      y!: number;
      size!: number;
      speedX!: number;
      speedY!: number;
      opacity!: number;

      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        if (init) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        } else {
          // Re-spawning near center to elegantly radiate outward in any direction
          this.x = width / 2 + (Math.random() - 0.5) * 50;
          this.y = height / 2 + (Math.random() - 0.5) * 50;
        }

        // Controlled Size Config
        this.size = Math.random() > 1 - LARGE_STAR_CHANCE ? SIZE_MAX : SIZE_MIN;

        // Controlled Speed & Direction Config
        const angle = Math.random() * Math.PI * 2; // Random 360-degree trajectory
        const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);

        // Map speeds to mathematical vectors
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;

        this.opacity = 0.4 + Math.random() * 0.6;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Recycles star if it hits any outer boundary edge
        if (
          this.x < -10 ||
          this.x > width + 10 ||
          this.y < -10 ||
          this.y > height + 10
        ) {
          this.reset(false);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new Star());
    }

    let animationId: number;
    function animate() {
      if (!ctx) return;
      ctx.fillStyle = "#030406";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-screen h-screen">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
