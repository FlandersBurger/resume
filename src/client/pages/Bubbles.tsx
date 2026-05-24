import { useEffect, useRef } from "react";

const colors = ["#ffc300", "#ff5733", "#c70039", "#900c3e", "#571845"];

interface Bubble {
  lifespan: number;
  radius: number;
  expanding: boolean;
  speed: number;
  circumference: number;
  maxRadius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function Bubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let bubbles: Bubble[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 56);
    };

    const makeBubble = (): Bubble => ({
      lifespan: 0,
      radius: 1,
      expanding: true,
      speed: Math.round(Math.random() * 3),
      circumference: Math.round(Math.random() * 50) + 5,
      maxRadius: Math.round(Math.random() * 200) + 20,
      x: Math.round(Math.random() * canvas.width),
      y: Math.round(Math.random() * canvas.height),
      vx: Math.random() >= 0.5 ? 1 : -1,
      vy: Math.random() >= 0.5 ? 1 : -1,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
        ctx.fillStyle = colors[Math.round((colors.length * bubble.radius) / bubble.maxRadius)];
        ctx.fill();
        ctx.strokeStyle = colors[colors.length - Math.round((colors.length * bubble.radius) / bubble.maxRadius)];
        ctx.lineWidth = (bubble.circumference * bubble.radius) / bubble.maxRadius;
        ctx.stroke();
      });
    };

    const frame = () => {
      bubbles.push(makeBubble());
      bubbles = bubbles.filter((b) => {
        if (b.radius === b.maxRadius) b.expanding = false;
        b.x += b.vx * b.speed;
        b.y += b.vy * b.speed;
        b.radius += b.expanding ? 1 : -1;
        return b.radius > 0;
      });
      draw();
      animId = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="bubbles-page" style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
}
