import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Cyber Security", "Full Stack Developer.", "Penetration Tester."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mohamed Thowfick</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wide">
        "With a passion for cybersecurity, ethical hacking, and full stack development, I'm Mohamed Thowfick—an aspiring IT professional. Throughout my self-learning journey,  My career goals revolve around exploring the extreme of technology. I aspire to make a meaningful impact in the IT and cybersecurity industry by ensuring robust security measures and staying ahead of emerging threats. Let's connect to explore how my skills and passion can contribute to the advancement of cybersecurity and the IT industry. Seeking growth opportunities and ready to make a positive impact!"
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner