// ContactLeft.js

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import SnowEffect from "../BackRound/snowEffect";

const ContactLeft = () => {
  const facebookLink = "https://www.facebook.com/thowfickofficial";
  const twitterLink = "https://twitter.com/thowfickofficia";
  const linkedinLink = "https://www.linkedin.com/in/thowfickofficial/";
  const instagrameLink = "https://www.instagram.com/thowfick_official/";
  const githubLink = "https://github.com/thowfickofficial";

  const handleFacebookClick = () => {
    window.open(facebookLink, "_blank");
  };

  const handleTwitterClick = () => {
    window.open(twitterLink, "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(linkedinLink, "_blank");
  };
  const handleInstagramClick = () => {
    window.open(instagrameLink, "_blank");
  };
  const handleGithubClick = () => {
    window.open(githubLink, "_blank");
  };

  const handlePhoneClick = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.location.href = "tel:+917845136624";
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:mdthowfickinfo@gmail.com";
  };

  return (
    <div className=" relative mb-5 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="absolute inset-0 z-0">
        {/* SnowEffect is set to absolute position and takes the full size of the container */}
        <SnowEffect />
      </div>
      <img
        loading="lazy"
        className="relative w-full h-64 object-fit rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className=" relative flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohamed Thowfick</h3>
        <p className="text-lg font-normal text-gray-400">
          Penetration Tester | Full Stack Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        {/* <p
          className="text-base text-gray-400 flex items-center gap-2"
          onClick={handlePhoneClick}
          style={{ cursor: "pointer" }}
        >
          Phone: <span className="text-lightText">+91 7845136624</span>
        </p> */}
        <p
          className="text-base text-gray-400 flex items-center gap-2"
          onClick={handleEmailClick}
          style={{ cursor: "pointer" }}
        >
          Email:{" "}
          <span className="text-lightText">mdthowfickinfo@gmail.com</span>
        </p>
      </div>
      <div className="relative flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleFacebookClick}>
            <FaFacebookF />
          </span>
          <span className="bannerIcon" onClick={handleTwitterClick}>
            <FaTwitter />
          </span>
          <span className="bannerIcon" onClick={handleLinkedInClick}>
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon" onClick={handleInstagramClick}>
            <FaInstagram />
          </span>
          <span className="bannerIcon" onClick={handleGithubClick}>
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
