import React, { useRef, useEffect } from 'react';

const AnimatedTextBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null = null;
  let animationFrameId: number | null = null;
  const animationSpeed = 0.5;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);

        const fontSize = 10 * dpr;
        let letters = "10101010101010100101010101010101001101010101010101010010101010101010100110";
        letters = letters.split("");
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
          drops[i] = Math.random() * canvas.height;
        }

        const draw = () => {
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#101C2C";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#8D6E4F";
            ctx.font = `${fontSize}px Arial`;

            for (let i = 0; i < drops.length; i++) {
              const text = letters[Math.floor(Math.random() * letters.length)];
              ctx.fillText(text, i * fontSize, drops[i]);
              drops[i] = (drops[i] + animationSpeed) % canvas.height;
            }
          }
          animationFrameId = window.requestAnimationFrame(draw);
        };

        animationFrameId = window.requestAnimationFrame(draw);

        return () => {
          if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
          }
        };
      }
    }
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default AnimatedTextBackground;
