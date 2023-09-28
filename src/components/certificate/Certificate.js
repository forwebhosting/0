import React, { useState, useEffect, useRef } from 'react'; // Added missing dependencies
// import Title from '../layouts/Title';
import {  NSE1, NSE2, NSE3, ICIP, endpoint_security } from "../../assets/index";
// import { ExCertificate, NSE1, NSE2, NSE3, ICIP, endpoint_security } from "../../assets/index";
import ProjectsCard from './CertificateCard';
import CertificatePopup from './CertificatePopup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

// Add your CSS styles using styled-components
const SignContainer = styled.div`
position: relative; /* Set the position to relative */
overflow: hidden; 

.sign {
  position: relative;
  background: none;
  color: #303030;
  font-size: 4rem;
  display: inline-block;
  font-family: 'Varela Round', sans-serif;
}

#one {
  animation: flicker-n_2 10s infinite forwards;

}

#three {
  -webkit-animation: flicker-0 10s infinite linear;
  -moz-animation: flicker-0 10s infinite linear;
  animation: color-change 10s infinite forwards;
}


#three::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f84aa7;
  border-radius: 50%;
  filter: blur(2em);
  opacity: 0;

  animation: color-change 10s infinite linear;
  animation: change-op 10s infinite linear;
}

#three::after {
  content: '';
  position: absolute;
  top: 50px;
  bottom: 0px;
  left: 0;
  right: 0;
  border-radius: 1em;
  background: radial-gradient(#ff014f 30%, #eb1557, #ffc8e6);
  transform: perspective(1em) rotateX(80deg) translateY(100%);
  filter: blur(5px);
  animation: change-op 10s infinite linear;


}

#two {
  transition: 0s;
  animation: flicker-e 10s infinite linear;
}


#four {
  animation: flicker-n 10s infinite linear;
}

@keyframes flicker-n {

  0%,
  4%,
  6%,
  9%,
  11%,
  29%,
  41%,
  54%,
  56%,
  76%,
  78%,
  89%,
  91%,
  93%,
  95%,
  100% {
      background: #303030;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
  }


  5%,
  10%,
  30%,
  40%,
  55%,
  77%,
  90%,
  92%,
  94% {

      background: linear-gradient(90deg, #ffb8de, #272727);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;

  }

}

@keyframes flicker-e {


  0%,
  4%,
  6%,
  9%,
  11%,
  29%,
  41%,
  54%,
  56%,
  76%,
  78%,
  89%,
  91%,
  93%,
  95%,
  100% {
      background: #303030;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
  }


  5%,
  10%,
  30%,
  40%,
  55%,
  77%,
  90%,
  92%,
  94% {

      background: linear-gradient(-90deg, #ffb8de, #272727);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;

  }

}

@keyframes flicker-n_2 {


  0%,
  4%,
  6%,
  9%,
  11%,
  29%,
  41%,
  54%,
  56%,
  76%,
  78%,
  89%,
  91%,
  93%,
  95%,
  100% {
      background: #303030;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
  }


  5%,
  10%,
  30%,
  40%,
  55%,
  77%,
  90%,
  92%,
  94% {

      background: linear-gradient(-90deg, #ffaed99f, #181818);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;

  }

}



@keyframes change-op {

  0%,
  4%,
  6%,
  9%,
  11%,
  29%,
  41%,
  54%,
  56%,
  76%,
  78%,
  89%,
  91%,
  93%,
  95%,
  100% {
      opacity: 0;
  }


  5%,
  10%,
  30%,
  40%,
  55%,
  77%,
  90%,
  92%,
  94% {
      opacity: 1;

  }


}

@keyframes color-change {

  0%,
  4%,
  6%,
  9%,
  11%,
  29%,
  41%,
  54%,
  56%,
  76%,
  78%,
  89%,
  91%,
  93%,
  95%,
  100% {
      color: #303030;
      text-shadow: none;
  }



  5%,
  10%,
  30%,
  40%,
  55%,
  77%,
  90%,
  92%,
  94% {
      color: white;
      text-shadow: 0 0 0.125em rgba(248, 74, 167, 1);

  }








}
 
`;

const Certificate = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [cerSrc, setCerSrc] = useState('');
  const [cerLink, setCerLink] = useState('');
  const sliderRef = useRef(null); // Added a ref for the Slider component

  const toggleCertificatePopup = (src, link) => {
    setCerSrc(src);
    setCerLink(link);
    setShowCertificate(!showCertificate);
  };

  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current && sliderRef.current.slickNext) {
        sliderRef.current.slickNext(); // Fixed sliderRef usage
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="certificate" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        {/* <Title title="" des="My Certificates" /> */}
        <SignContainer className="w-full " >
            <div className="sign" id="one">C</div>
            <div className="sign" id="two">e</div>
            <div className="sign" id="two">r</div>
            <div className="sign" id="two">t</div>
            <div className="sign" id="four">i</div>
            <div className="sign" id="three">f</div>
            <div className="sign" id="two">i</div>
            <div className="sign" id="two">c</div>
            <div className="sign" id="four">a</div>
            <div className="sign" id="two">t</div>
            <div className="sign" id="four">es</div>
            
           
          </SignContainer>
      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="relative">
      <div  className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title="Fortinet NSE1 Certification"
              //des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
              src={NSE1}
              // link="https://example-link1.com"
              // onGithubClick={() => toggleCertificatePopup(ExCertificate)}
            />
          </div>
          <div  className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title="Fortinet NSE2 Certification"
              //des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
              src={NSE2}
              // link="https://example-link1.com"
              // onGithubClick={() => toggleCertificatePopup(ExCertificate)}
            />
          </div>
          <div  className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title="Fortinet NSE3 Certification"
              //des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
              src={NSE3}
              // link="https://example-link1.com"
              // onGithubClick={() => toggleCertificatePopup(ExCertificate)}
            />
          </div>
          <div  className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title="ICIP(Critical Infrastructure Protection)"
              // des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
              src={ICIP}
              // link="https://example-link1.com"
              // onGithubClick={() => toggleCertificatePopup(ExCertificate)}
            />
          </div>
          <div  className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title="CISCO EndPoint Security "
              //des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
              src={endpoint_security}
              // link="https://example-link1.com"
              // onGithubClick={() => toggleCertificatePopup(ExCertificate)}
            />
          </div>
      </Slider>
      {showCertificate && <CertificatePopup src={cerSrc} link={cerLink} onClose={toggleCertificatePopup} />}
    </section>
  );
}

export default Certificate;
