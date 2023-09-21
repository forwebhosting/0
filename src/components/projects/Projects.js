import React from 'react';
import styled from 'styled-components';
// import Title from '../layouts/Title'
import { projectOne, projectTwo, DisneyClone } from "../../assets/index";
import ProjectsCard from './ProjectsCard';


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

const Projects = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="OTT CLONE"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={DisneyClone}
          websiteLink= {DisneyCloneLink}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          websiteLink= {YoutubeCloneLink}
        />
        <ProjectsCard
          title="E-commerce Website(Habeeb)"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          websiteLink= {HabeebEcomLink}
        />
        {/* <ProjectsCard
          title="Chatting App"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div> */}
    </section>
  );
}

export default Projects