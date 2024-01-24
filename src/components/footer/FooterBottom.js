import React from 'react';
import './FooterBottom.css';

const FooterBottom = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-10 relative">
      <p className="text-center text-gray-500 text-base">
        <span className="hover-text">
          © {currentYear}. All rights reserved by MOHAMED THOWFICK
        </span>
      </p>
    </div>
  );
};

export default FooterBottom;
