import React, { useRef, useEffect } from 'react';

const AnimatedTextBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 10;
    const letters = "■ □ ■ □".split("");
    const columns = Math.ceil(canvas.width / fontSize); // Adjusted to ensure all columns are covered
    const drops: number[] = Array.from({ length: columns }, () => canvas.height / fontSize); // Initialize drops at bottom

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.fill(canvas.height / fontSize); // Reset drops array on resize
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      //ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#101C2C";
        let alpha = 1 - ((drops[i] * fontSize - canvas.height / 4 ) / (canvas.height / 4));
        if (alpha < 0) alpha = 0;
        ctx.fillStyle = `rgba(141, 110, 79, ${alpha})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    const intervalId = setInterval(draw, 70);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AnimatedTextBackground;
