// StarryMagicCursor.js

import React, { useEffect, useState, useRef } from "react";
import "./StarryMagicCursor.css";

const StarryMagicCursor = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const canvasRef = useRef(null);
  const starsRef = useRef([]); // Use useRef for the stars variable

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const addStar = (e) => {
      mouseVelocityX = e.clientX - lastMouseX;
      mouseVelocityY = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      const randomOffsetX = (Math.random() - 0.5) * 100;
      const randomOffsetY = (Math.random() - 0.5) * 100;

      starsRef.current.push(
        new Star(
          e.clientX,
          e.clientY,
          mouseVelocityX + randomOffsetX,
          mouseVelocityY + randomOffsetY
        )
      );
    };

    canvas.addEventListener("mousemove", addStar);

    class Star {
      constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 2;
        this.size = this.finalSize * 2;
        this.alpha = 1;
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.05;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.turbulence = () => Math.random() * 0.5 - 0.25;
        this.timeElapsed = 0;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 1, 79, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update(deltaTime) {
        this.x += this.velocityX + this.turbulence();
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.alpha = Math.max(0, this.alpha - 0.005);

        this.timeElapsed += deltaTime;
        if (this.timeElapsed < 2000) {
          this.size =
            this.finalSize * 2 - (this.finalSize * this.timeElapsed) / 2000;
        } else {
          this.size = this.finalSize;
        }
      }
    }

    let lastTime = 0;

    const update = (time = 0) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => star.update(deltaTime));
      starsRef.current.forEach((star) => star.draw());
      starsRef.current = starsRef.current.filter(
        (star) =>
          star.alpha > 0 && star.y < height && star.x > 0 && star.x < width
      );

      requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", addStar);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      id="starry-magic-cursor-canvas"
      width={width}
      height={height}
    ></canvas>
  );
};

export default StarryMagicCursor;
