import React from 'react';
import './CertificatePopup.css'; // Import the CSS file

const CertificatePopup = ({ src, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
      <div className="w-2/4 h-3/4 bg-gradient-to-r from-bodyColor to-transparent group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 p-8 rounded-lg shadow-shadowOne flex flex-col justify-center items-center">
        <img
          className="w-3/4 h-3/4 object-contain mb-4 transform rotate-0 transition-transform duration-300 hover:rotate-3"
          src={src}
          alt="Certificate"
        />
        <button className="px-4 py-2  text-white rounded-md button3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CertificatePopup;
