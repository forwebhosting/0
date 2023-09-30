import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectOne, projectTwo, FoodWebsite, DisneyClone, AmazonClone, NobrokerClone, PhisingTool, KeyLogger, ZomatoClone } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
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

const DisneyCloneLink = "https://disneyclone-thowfickofficial.netlify.app/";
const HabeebEcomLink = "https://habeebecommerce-thowfickofficial.netlify.app/";
const YoutubeCloneLink = "https://youtubeclone-thowfickofficial.netlify.app/";
const AmazonCloneLink = "https://amazonclone-thowfickofficial.netlify.app/";
const ZomatoCloneLink = "https://zomatoclone-thowfickofficial.netlify.app/";
const NobrokerCloneLink = "https://nobrokerclone-thowfickofficial.netlify.app/";
const FoodWebsiteLink = "https://habeebfoods.netlify.app/";
const PhisingToolLink = "https://www.linkedin.com/posts/thowfickofficial_cyberdosti-cybersecurity-phishingawareness-activity-7109775363626475522-v1Ju?utm_source=share&utm_medium=member_desktop";
const KeyLoggerLink = "https://www.linkedin.com/posts/thowfickofficial_keylogger-cybersecurity-ethicalhacking-activity-7111929822079062016-ziyT?utm_source=share&utm_medium=member_desktop";




const Projects = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Adjust the margin as needed
    draggable: false, // Disable user dragging
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens
        },
      },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Programmatically advance to the next slide
      }
    }, 3000); // 1000 milliseconds (1 second) interval

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        {/* <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        /> */}


        <SignContainer className="w-full " >
          <div className="sign" id="one">M</div>
          <div className="sign" id="two">y</div>
          <div className="sign" id="two"> </div>
          <div className="sign" id="two">P</div>
          <div className="sign" id="four">r</div>
          <div className="sign" id="three">o</div>
          <div className="sign" id="two">j</div>
          <div className="sign" id="two">e</div>
          <div className="sign" id="four">c</div>
          <div className="sign" id="two">t</div>
          <div className="sign" id="four">s</div>
        </SignContainer>

      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="relative">
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="OTT CLONE"
            src={DisneyClone}
            websiteLink={DisneyCloneLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            src={projectOne}
            websiteLink={YoutubeCloneLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="E-commerce Website(Habeeb)"
            src={projectTwo}
            websiteLink={HabeebEcomLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="Amazon Clone"
            src={AmazonClone}
            websiteLink={AmazonCloneLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="Zomato Clone"
            src={ZomatoClone}
            websiteLink={ZomatoCloneLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="Restaurant Website "
            src={FoodWebsite}
            websiteLink={FoodWebsiteLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="NoBroker Clone"
            src={NobrokerClone}
            websiteLink={NobrokerCloneLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="Phising Tool"
            src={PhisingTool}
            websiteLink={PhisingToolLink}
          />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
          <ProjectsCard
            title="KeyLogger Tool"
            src={KeyLogger}
            websiteLink={KeyLoggerLink}
          />
        </div>

      </Slider>

    </section>
  );
}

export default Projects;
