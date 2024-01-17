import React, { useState, useEffect } from 'react';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import ProjectsSlider from "./components/ProjectsSilder/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/certificate/Certificate";
import ResumeButton from "./components/ResumeButton/ResumeButton";
import Loading from './components/loadingPage/loadingPage'; 
import CustomCursor from './CustomCursor';
// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []); // Empty dependency array because onMouseMove is defined inside useEffect
// eslint-disable-next-line
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
      <CustomCursor />
        <ResumeButton />
        <Banner />
        <Features />
        <ProjectsSlider />
        <Resume />
     
        
        
        <Certificate />
        {/* <Testimonial /> */}
        <Contact />
        <Footer /> 
        
       
        <FooterBottom />
        {isLoading && <Loading />}
        
      </div>
      
    </div>
  );
}

export default App;
