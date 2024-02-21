import React, { useState, useEffect, useCallback } from 'react';
import { Resumepdf } from '../../assets/index';
import './ResumeButton.css';
import resumeButtonData from '../../data/resumeButtonData';
import { MdDownloading } from "react-icons/md";
import popupSound from './popup-sound.mp3';

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { buttonText, messageText, downloadTitle } = resumeButtonData;

  const handleButtonClick = () => {
    playPopupSound(); // Play the popup sound when the button is clicked

    const resumeUrl = Resumepdf;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'MOHAMED THOWFICK Resume.pdf';
    a.click();
  };

  const playPopupSound = useCallback(() => {
    if (document.visibilityState === 'visible' && showMessage) {
      const audio = new Audio(popupSound);

      const playAudio = () => {
        audio.play()
          .then(() => {
            // Successfully started playing
          })
          .catch(error => {
            console.error('Failed to play audio:', error);
          });
      };

      if (audio.readyState >= 2) {
        // If the audio is already loaded, play it
        playAudio();
      } else {
        // If the audio is not loaded, request user interaction for audio playback
        document.addEventListener('click', playAudio, { once: true });
      }
    }
  }, [showMessage]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      playPopupSound();
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, [playPopupSound]);

  useEffect(() => {
    const loopTimeout = setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        setShowMessage(true);
        playPopupSound();
      }, 5000);
    }, 5000);

    return () => clearTimeout(loopTimeout);
  }, [showMessage, playPopupSound]);

  const buttonStyle = {
    position: 'fixed',
    right: '5px',
    bottom: '7rem',
    zIndex: '50',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonTextStyle = {
    fontSize: '1rem',
    visibility: isHovered ? 'visible' : 'hidden',
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', playPopupSound);
    return () => document.removeEventListener('visibilitychange', playPopupSound);
  }, [showMessage, playPopupSound]);

  return (
    <div style={buttonStyle}>
      {showMessage && (
        <div className=" message-card message-card-light">
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
        {/* <div className="ResumeButton-ripple"></div> */}
      </button>
      <p style={buttonTextStyle}>{buttonText}</p>
    </div>
  );
};

export default ResumeButton;
