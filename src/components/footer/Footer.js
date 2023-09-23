import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";
import { logo } from "../../assets/index";
// import BouncyBlockClock from "../clock/BouncyBlockClock"; // Import the BouncyBlockClock component here
// import FlyingSpaceship from "./FlyingSpaceship";

const Footer = () => {
  const facebookLink = "https://www.facebook.com/thowfickofficial";
  const twitterLink = "https://twitter.com/thowfickofficia";
  const linkedinLink = "https://www.linkedin.com/in/thowfickofficial/";
  const instagrameLink = "https://www.instagram.com/thowfick_officia/";
  const githubLink = "https://github.com/thowfickofficial";

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        {/* <BouncyBlockClock /> */}
        {/* <FlyingSpaceship /> */}

      </div>
    </div>
  );
}

export default Footer;
