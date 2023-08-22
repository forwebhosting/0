import React, { useState } from 'react';
import { ImDownload } from 'react-icons/im';
import { Resumepdf } from "../../assets/index";

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Replace 'your_resume.pdf' with the actual URL or path to your resume file
    const resumeUrl = Resumepdf;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'MOHAMED THOWFICK Resume.pdf';
    a.click();
  };

  const buttonStyle = {
    position: 'fixed',
    right: '0.5rem', 
    bottom: '2rem', 
    zIndex: '50',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonTextStyle = {
    fontSize: '1rem', 
    visibility: isHovered ? 'visible' : 'hidden',
  };

  return (
    <div style={buttonStyle}>
      <button
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#141518] text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent py-2 px-4 rounded-full shadow-md shadow-designColor animate-bounce"
        title="Click to download My Resume"
      >
        <ImDownload size={24} /> {/* Adjust the icon size as needed */}
      </button>
      <p style={buttonTextStyle}>Download Resume</p>
    </div>
  );
};

export default ResumeButton;
