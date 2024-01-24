// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";
import { footerData } from "../../data/footerData"; // Import the footerData

const Footer = () => {
  return (
    <div className="w-full relative py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href={footerData.facebookLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href={footerData.twitterLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href={footerData.linkedinLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href={footerData.instagramLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href={footerData.githubLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
