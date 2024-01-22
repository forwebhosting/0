// Import necessary libraries and files
import React, { useState, useEffect, useCallback } from 'react';
// import { MdDownloading } from 'react-icons/im';
import { Resumepdf } from '../../assets/index';
import './ResumeButton.css'; // Import the CSS file
import resumeButtonData from '../../data/resumeButtonData'; // Import the data file
import { MdDownloading } from "react-icons/md";
// Import the popup sound file
import popupSound from './popup-sound.mp3';

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Destructure the data from the imported file
  const { buttonText, messageText, downloadTitle } = resumeButtonData;

  const handleButtonClick = () => {
    const resumeUrl = Resumepdf;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'MOHAMED THOWFICK Resume.pdf';
    a.click();
  };

  // Play the popup sound if the tab is visible and the message is shown
  const playPopupSound = useCallback(() => {
    if (document.visibilityState === 'visible' && showMessage) {
      const audio = new Audio(popupSound);
      audio.play();
    }
  }, [showMessage]);

  useEffect(() => {
    // Show the message after 5 seconds of opening the website
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      // Play the popup sound when the message appears
      playPopupSound();
    }, 8000);

    return () => clearTimeout(initialTimeout); // Clear the initial timeout on component unmount
  }, [playPopupSound]);

  useEffect(() => {
    // Set up a timer to hide the message after 5 seconds and show it again after 5 seconds in a loop
    const loopTimeout = setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        setShowMessage(true);
        // Play the popup sound when the message reappears
        playPopupSound();
      }, 5000);
    }, 5000); // Initial 5 seconds + Interval 5 seconds

    return () => clearTimeout(loopTimeout); // Clear the loop timeout on component unmount
  }, [showMessage, playPopupSound]);

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

  // Listen for visibility change to play/pause the sound accordingly
  useEffect(() => {
    document.addEventListener('visibilitychange', playPopupSound);

    return () => document.removeEventListener('visibilitychange', playPopupSound);
  }, [showMessage, playPopupSound]);

  return (
    <div style={buttonStyle}>
      {showMessage && (
        <div className="message-card">
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
        <div className="ResumeButton-ripple"></div>
      </button>
      <p style={buttonTextStyle}>{buttonText}</p>
    </div>
  );
};

export default ResumeButton;
