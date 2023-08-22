import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaReact, FaPython, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiTestinglibrary } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const Media = () => {
  const facebookLink = "https://www.facebook.com/thowfickofficial";
  const twitterLink = "https://twitter.com/thowfickofficia";
  const linkedinLink = "https://www.linkedin.com/in/thowfickofficial/";
  const instagrameLink = "https://www.instagram.com/thowfick_official/";

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href={instagrameLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiTestinglibrary />
          </span>
          <span className="bannerIcon">
            <MdSecurity />
          </span>
        </div>
        {/* <div className="flex gap-4">
          <span className="bannerIcon">
            <MdSecurity />
          </span>
          <span className="bannerIcon">
            <FaDocker />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div> */}
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaDocker />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
