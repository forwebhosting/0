import React, { useState } from "react";
import { Link } from "react-scroll";
// import { FiMenu } from 'react-icons/fi';
import { CgMenuRight } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { logo } from "../../assets/index"; // Assuming logo is correctly exported from assets/index.js
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const facebookLink = "https://www.facebook.com/thowfickofficial";
  const twitterLink = "https://twitter.com/thowfickofficia";
  const linkedinLink = "https://www.linkedin.com/in/thowfickofficial/";
  const instagrameLink = "https://www.instagram.com/thowfick_official/";

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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-23 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="object-none h-14 w-14">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          {/* <FiMenu /> */}
          <CgMenuRight />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  "With a passion for cybersecurity, ethical hacking, and full
                  stack development, I'm Mohamed Thowfick—an aspiring IT
                  professional. Throughout my self-learning journey, My career
                  goals revolve around exploring the extreme of technology. I
                  aspire to make a meaningful impact in the IT and cybersecurity
                  industry by ensuring robust security measures and staying
                  ahead of emerging threats. Let's connect to explore how my
                  skills and passion can contribute to the advancement of
                  cybersecurity and the IT industry. Seeking growth
                  opportunities and ready to make a positive impact!"
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
