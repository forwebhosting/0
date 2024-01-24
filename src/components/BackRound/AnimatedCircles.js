// AnimatedCircles.js
import React from 'react';
import './animatedcircle.css'; // Import the external CSS file

const AnimatedCircles = () => {
  return (
    <div className="area">
      <ul className="circles">
        {[...Array(10)].map((_, index) => (
          <li key={index} className={`circle-${index + 1}`}></li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCircles;
