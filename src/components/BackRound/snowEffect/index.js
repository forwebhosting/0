import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./snowEffect.css";

const SnowFlake = () => (
  <defs>
    <path
      className="snowFlake"
      d="M14.75,7.69c0,4.14-3.85,8.56-7.5,7.5C3.28,14,0,10.84,0,6.7S3.3,1.42,7.25.19,14.75,3.55,14.75,7.69Z"
      fill="rgba(255, 1, 79, 0.5)"
    />
  </defs>
);

const Snowfall = () => {
  const snowContainerRef = useRef(null);

  useEffect(() => {
    const snowMainSVG = snowContainerRef.current;
    const snowFlake = snowMainSVG.querySelector(".snowFlake");
    const mainTl = gsap.timeline();

    gsap.set(snowMainSVG, {
      opacity: 1, // Set opacity to 1 to make the snowfall visible
    });

    const getSnowAnim = () => {
      const clone = snowFlake.cloneNode(true);
      snowMainSVG.appendChild(clone);
      const pos = {
        x: gsap.utils.random(-400, 1200),
        y: gsap.utils.random(-300, 900),
      };
      gsap.set(clone, {
        transformOrigin: "50% 50%",
        scale: 0.2,
        x: pos.x,
        y: pos.y,
      });
      const distance = gsap.utils.random(50, 150);
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: gsap.utils.random(1, 3),
        defaults: {
          ease: "linear",
        },
      });
      tl.to(clone, {
        scale: gsap.utils.random(0.1, 0.51),
        ease: "sine.in",
        duration: 1,
      })
        .to(
          clone,
          {
            ease: "sine.inOut",
            x: pos.x - distance,
            y: pos.y + distance,
            duration: 2,
          },
          0
        )
        .to(
          clone,
          {
            ease: "sine",
            scale: 0,
            duration: 1,
          },
          1
        )
        .to(
          clone,
          {
            ease: "sine.inOut",
            rotation: `-=${gsap.utils.random(-23, 23)}`,
            transformOrigin: "200% 50%",
            duration: 2,
          },
          0
        );
      tl.timeScale(distance / 100);
      return tl;
    };

    const init = () => {
      const num = 1300;
      for (let i = 0; i < num; i++) {
        mainTl.add(getSnowAnim(), 0);
      }
      mainTl.seek(1000);
    };

    init();
  }, []);

  return (
    <svg
      className="snowSvg"
      id="snowMainSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      ref={snowContainerRef}
    >
      <SnowFlake />
      <g id="snowContainer" fill="#FFF" />
    </svg>
  );
};

export default Snowfall;
