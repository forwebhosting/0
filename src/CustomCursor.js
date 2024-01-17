import React, { useEffect, useState } from 'react';
import './index.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });

    const target = e.target;
    setHovered(target.matches('.clickable'));
  };

  const onMouseDown = () => {
    setClicking(true);
  };

  const onMouseUp = () => {
    setClicking(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className={`custom-cursor ${hovered ? 'hovered' : ''} ${clicking ? 'clicking' : ''}`} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}>
      <div className="cursor-inner"></div>
      <div className="ripple"></div>
    </div>
  );
};

export default CustomCursor;
