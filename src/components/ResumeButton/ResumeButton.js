import React, { useState, useEffect } from 'react';
import { Resumepdf } from '../../assets/index';
import './ResumeButton.css';
import resumeButtonData from '../../data/resumeButtonData';
import { MdDownloading } from "react-icons/md";

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { buttonText, messageText, downloadTitle } = resumeButtonData;

  const handleButtonClick = () => {
    const resumeUrl = Resumepdf;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'MOHAMED THOWFICK Resume.pdf';
    a.click();
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const loopTimeout = setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        setShowMessage(true);
      }, 5000);
    }, 5000);

    return () => clearTimeout(loopTimeout);
  }, [showMessage]);

  const buttonStyle = {
    position: 'fixed',
    right: '5px',
    bottom: '6rem',
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
      {showMessage && (
        <div className="message-card message-card-light">
          <p>{messageText}</p>
        </div>
      )}
      <button
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#141518] text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent py-2 px-4 rounded-full shadow-md shadow-designColor animate-bounce"
        title={downloadTitle}
      >
        <MdDownloading size={28} />
      </button>
      <p style={buttonTextStyle}>{buttonText}</p>
    </div>
  );
};

export default ResumeButton;
