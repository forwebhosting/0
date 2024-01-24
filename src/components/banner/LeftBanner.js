// Import necessary libraries and files
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import leftBannerData from '../../data/leftBannerData'; 

const LeftBanner = () => {
  // Destructure the data from the imported file
  const { welcomeText, introduction } = leftBannerData;
  
  const [text] = useTypewriter({
    words: ["Cyber Security", "Full Stack Developer.", "Penetration Tester."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 relative">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">{welcomeText}</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mohamed Thowfick</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wide">
          {introduction}
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
